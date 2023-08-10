from django.urls import path
from unicodedata import UCD

from .views import RegisterView,UserUpdateAPIView,TutorialAPIView,UserProfileView,BlogPostUpdatedView,ArticleAPIView,BlogPostView,blog_list,searchblog,category_list,userblogView
from .views import LoginView,UserView,LogoutView,CampaignListAPIView,CampaignDetailsAPIView,SubscriberToCampaignAPIView,IndexAPIView

urlpatterns = [
    path('register', RegisterView.as_view()),
    
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('userprofile', UserProfileView.as_view()), 
    path('logout', LogoutView.as_view()),
    path('users/<int:pk>', UserUpdateAPIView.as_view(), name='update_user'),

    ##profile endpoint to store profile data

    #blogpostendpoints
    path('blogPost', BlogPostView.as_view()),
    path('blogPostlist', blog_list),
    path('blogPostlist/<int:id>', userblogView),

    


    path('campaigns',CampaignListAPIView.as_view(),name="campaigns"),
    path('campaign/<str:slug>',CampaignDetailsAPIView.as_view(),name="campaign"),
    path('subscriber',SubscriberToCampaignAPIView.as_view(),name="subscribe"),
    path('index',IndexAPIView.as_view(),name="index"),
    #path('tutorials',TutorialAPIView.as_view(),name="tutorial"),
    path('searchblog', searchblog, name='search'),
    path('article/<int:id>', ArticleAPIView, name='article'),
    path('categorylist', category_list, name='category'),
    path('blogPostUpdate', BlogPostUpdatedView.as_view()),
    
    
]
