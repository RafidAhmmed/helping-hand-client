from django.contrib import admin
from .models import News

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'category')
    list_filter = ('category', 'date')
    search_fields = ('title', 'content') 