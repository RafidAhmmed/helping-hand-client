from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'start_date', 'target_completion', 'category')
    list_filter = ('status', 'category', 'start_date')
    search_fields = ('title', 'description')
    date_hierarchy = 'start_date' 