from django.shortcuts import render, get_object_or_404
from .models import Post

# Create your views here.
def blog_post(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'blog_post.html', {'post': post})