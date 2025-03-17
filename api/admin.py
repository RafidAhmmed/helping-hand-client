from django.contrib import admin
from .models import News, Project, GalleryImage, User

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'category')
    list_filter = ('category', 'date')
    search_fields = ('title', 'content')
    date_hierarchy = 'date'

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'start_date', 'target_completion', 'category')
    list_filter = ('status', 'category', 'start_date')
    search_fields = ('title', 'description')
    date_hierarchy = 'start_date'

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_added', 'category')
    list_filter = ('category', 'date_added')
    search_fields = ('title',)
    date_hierarchy = 'date_added'

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'gender', 'date_joined')
    list_filter = ('gender', 'date_joined')
    search_fields = ('first_name', 'last_name', 'email')
    date_hierarchy = 'date_joined'
    readonly_fields = ('date_joined',) 