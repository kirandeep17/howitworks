from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import  reverse
from cloudinary.models import CloudinaryField
from django.template.defaultfilters import slugify

# Create your models here.



class Booktype(models.Model):
    btype = models.CharField(max_length=100, unique=True)

    class Meta:
        ordering=('btype',)

# Create model gor book
class Book(models.Model):
    book_name = models.CharField(max_length=150)
    author_name = models.CharField(max_length=150)
    type = models.ForeignKey(Booktype, on_delete=models.CASCADE)
    price = models.FloatField()
    publication = models.CharField(max_length=100)

    class Meta:
        ordering=('book_name',)

    def __str__(self):
        return self.book_name

    def get_url(self):
       return reverse('book_detail', args=[self.id])

#############################module tutural#############33

class Campaign(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    slug = models.SlugField(max_length=200,null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    logo=CloudinaryField('Image',overwrite=True,format="jpg")
    
    class Meta:
        ordering=('-created_at',)

    def _str_(self):
        return self.title
    
    def save(self,*args,**kwargs):
        to_assign= slugify(self.title)

        if Campaign.objects.filter(slug=to_assign).exists():
            to_assign = to_assign+str(Campaign.objects.all().cout())

        self.slug= to_assign
        super().save(*args,**kwargs)
        
class Subscriber(models.Model):
    campaign = models.ForeignKey(to=Campaign,on_delete=models.DO_NOTHING)
    email = models.EmailField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering=('-created_at',)

    def _str_(self):
        return self.email


class User(AbstractUser):
    #username = None
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )

    TYPE_CHOICES = (
        (1, 'Admin Generated'),
        (2, 'User Generated'),
    )

    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    
    author = models.CharField(max_length=200, null=True, default=None)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)   
    
    mobile_number = models.CharField(max_length=20,default=None,null=True)
    address_line_1 = models.CharField(max_length=255,default=None,null=True)
    address_line_2 = models.CharField(max_length=255, blank=True, null=True)
    postcode = models.CharField(max_length=20,default=None,null=True)
    state = models.CharField(max_length=100,default=None,null=True),
    area = models.CharField(max_length=100,default=None,null=True)
    education = models.CharField(max_length=100,default=None,null=True)
    country = models.CharField(max_length=100,default=None,null=True)
    about_me = models.TextField(blank=True, null=True,default=None)



    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.author or 'Uncategorized'
    
    def save(self, *args, **kwargs):
        if not self.author:
            self.author = self.username
        super(User, self).save(*args, **kwargs)

class CustomUser(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )

    TYPE_CHOICES = (
        (1, 'Admin Generated'),
        (2, 'User Generated'),
    )
    author = models.CharField(max_length=200, null=True, default=None)
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.author or 'Uncategorized'

class Category(models.Model):
    name = models.CharField(max_length=100, null=True, default=None)
    discription =  models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name or 'Uncategorized'

class Tutorials(models.Model):
    TYPE_CHOICES = (
        (1, 'Admin Generated'),
        (2, 'User Generated'),
    )

    STATUS_CHOICES = (
        (1, 'Active'),
        (0, 'Inactive'),
        (2, 'Suspended'),
        (3, 'Deleted'),
    )

    title = models.CharField(max_length=200, verbose_name="Meta Title Info")
    description = models.TextField(verbose_name="Meta Description")
    keywords = models.CharField(max_length=200, verbose_name="Meta Keywords",blank=True )
    meta_tags = models.CharField(max_length=200, verbose_name="Other Users Generated Tags for Search",blank=True )
    heading = models.CharField(max_length=100, verbose_name="Display Breadcrumb Page Title",blank=True )
    category = models.ForeignKey(Category, on_delete=models.CASCADE,blank=True,default=1)
    content = models.TextField(verbose_name="The Rich Text")
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Author",null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Date Created")
    modified_at = models.DateTimeField(auto_now=True, verbose_name="Date Modified")
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)

    def __str__(self):
        return self.title


