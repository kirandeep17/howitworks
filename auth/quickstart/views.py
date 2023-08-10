from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
from .models import User
import jwt, datetime

from django.shortcuts import render,get_object_or_404
from .models import  Book, Booktype,Tutorials,Category
from django.db.models import Q

from rest_framework import generics,response
from .models import Campaign,Subscriber
from rest_framework import status
from .serializers import SubscriberSerializer,CampaignSerializer,TutorialsSerializer,CategorySerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.http import HttpRequest



# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']


        print(email)
        print(password)
        user = User.objects.filter(email=email,password=password).first()

        if user is None :
            raise AuthenticationFailed('no user found error')

        

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow()+datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.set_cookie(key='email', value=email, httponly=True)
        response.set_cookie(key='userid', value=user.id, httponly=True)

        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):
    def get(self, request):
        
        token = request.COOKIES.get('jwt')
        print(token)
        if not token:
            raise AuthenticationFailed

        try:
            payload = jwt.decode(token, 'secret',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthrised')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)

class UserProfileView(APIView):
    def post(self, request):
        
        print("coming")
        token = request.data['jwt']
        print(token)
        if not token:
            raise AuthenticationFailed

        try:
            payload = jwt.decode(token, 'secret',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthrised')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)

class LogoutView(APIView):
    def post(self,request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response

class UserUpdateAPIView(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            return None

    def put(self, request, pk):
        user = self.get_object(pk)
        if not user:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        user = self.get_object(pk)
        if not user:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def book_list(request):
    book = Book.objects.all()
    return render(request, 'book_list.html', {'book': book })

# Define function to display the particular book
def book_detail(request,book_id):
    book = get_object_or_404(Book, id=book_id)
    types = Booktype.objects.all()
    t = types.get(id=book.type.id)
    return render(request, 'book_detail.html', {'book': book, 'type': t.btype})

# Define function to search book
def search(request):
    results = []

    if request.method == "GET":
        query = request.GET.get('search')

        if query == '':
            query = 'None'

        results = Book.objects.filter(Q(book_name__icontains=query) | Q(author_name__icontains=query) | Q(price__icontains=query) )

    return render(request, 'search.html', {'query': query, 'results': results})

##############################tutorial

class CampaignListAPIView(generics.ListAPIView):
    serializer_class = CampaignSerializer
    def get_queryset(self):
        return Campaign.objects.all()
    
class CampaignDetailsAPIView(generics.GenericAPIView):
    serializer_class = CampaignSerializer
    def get(self,request,slug):
        query_set = Campaign.objects.filter(slug=slug).first()
        
        if query_set:
            return response.Response(self.serializer_class(query_set).data)
        return response.Response('Not Found', status = status.HTTP_404_NOT_FOUND)
    

class SubscriberToCampaignAPIView(generics.CreateAPIView):
    serializer_class = SubscriberSerializer
    def get_queryset(self):
        return Subscriber.objects.all()
    

class IndexAPIView(APIView):
    def get(self,request):
        return JsonResponse({'text': 'Just rendering some JSON :)'})






@api_view(['GET'])
def TutorialAPIView(request, keyword):

    page = Tutorials.objects.filter(title=keyword)

    serializer = TutorialsSerializer(page, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def ArticleAPIView(request, id):
    data = get_object_or_404(Tutorials, id=id)
    
    serializer = TutorialsSerializer(data)
    return Response(serializer.data)


# Define function to search book
def search(request):
    results = []

    if request.method == "GET":
        query = request.GET.get('search')

        if query == '':
            query = 'None'

        results = Book.objects.filter(Q(book_name__icontains=query) | Q(author_name__icontains=query) | Q(price__icontains=query) )

    return render(request, 'search.html', {'query': query, 'results': results})


class BlogPostView(APIView):
    def post(self, request):
        id = request.user.id
        print("id is ",id)
        serializer = TutorialsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save() 
        return Response(serializer.data)
    
@api_view(('GET',))
def blog_list(request):
    blogs = Tutorials.objects.all()
    serializer = TutorialsSerializer(blogs, many=True)

    return Response(serializer.data)

@api_view(('GET',))
def searchblog(request):
    results = []

    if request.method == "GET":
        query = request.GET.get('search')

        if query == '':
            query = 'None'

        results = Tutorials.objects.filter(Q(title__icontains=query) | Q(content__icontains=query))

        serializer = TutorialsSerializer(results, many=True)

        return Response(serializer.data)

@api_view(('GET',))
def category_list(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def userblogView(request, id):
    print(id)
    data = Tutorials.objects.filter(author=id)
    
    serializer = TutorialsSerializer(data,many=True)
    return Response(serializer.data)

class BlogPostUpdatedView(APIView):
    def patch(self, request):
        id = request.data['id']
        print("id is ",id)
        obj = Tutorials.objects.filter(id=id).first()
        serializer = TutorialsSerializer(obj,data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save() 
        return Response(serializer.data)