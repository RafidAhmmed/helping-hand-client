from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Category, News, Project, GalleryImage, CustomUser

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'category')
    list_filter = ('category', 'date')
    search_fields = ('title', 'content')
    date_hierarchy = 'date'

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'start_date', 'end_date', 'category')
    list_filter = ('status', 'category', 'start_date')
    search_fields = ('title', 'description')
    date_hierarchy = 'start_date'

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'category')
    list_filter = ('category', 'date')
    search_fields = ('title',)
    date_hierarchy = 'date'

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'gender', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'gender')
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('gender', 'bio', 'profile_picture')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Additional Info', {'fields': ('gender', 'bio', 'profile_picture')}),
    ) 