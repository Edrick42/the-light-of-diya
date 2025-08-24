from django.shortcuts import render
from blog_post.models import Post

# Create your views here.
def blog(request):
    posts = Post.objects.order_by('created_at')
    return render(request, 'blog.html', {'posts': posts})