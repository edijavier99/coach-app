
from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'day_posted', 'updated')
    list_filter = ('category', 'day_posted')
    search_fields = ('title', 'subtitle', 'description')

admin.site.register(Post, PostAdmin)
