from django.contrib import admin

from .models import Book,Booktype, Campaign, Subscriber, Tutorials ,Category

# Register your models here.
class BooktypeModelAdmin(admin.ModelAdmin):
    search_fields=('btype',)
    list_per_page = 1

class BookModelAdmin(admin.ModelAdmin):
    search_fields=('book_name','author_name')
    list_per_page = 1

admin.site.register(Book,BookModelAdmin)
admin.site.register(Booktype,BooktypeModelAdmin)

class CampaignModelAdmin(admin.ModelAdmin):
    list_display= ('title','created_at','updated_at')
    search_fields=('title','description')
    list_per_page = 1

class SubscriberModelAdmin(admin.ModelAdmin):
    list_display= ('email','campaign','created_at')
    search_fields=('email','campaign__title','created_at')
    list_per_page = 1

admin.site.register(Campaign,CampaignModelAdmin)
admin.site.register(Subscriber,SubscriberModelAdmin)
admin.site.register(Tutorials)
admin.site.register(Category)

