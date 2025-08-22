import os
import json
from django.conf import settings
from django.shortcuts import render

# Create your views here.
def portfolio(request):
    file_path = os.path.join(os.path.dirname(__file__), 'data', 'projects.json')

    with open(file_path, 'r', encoding="utf-8") as file:
        projects = json.load(file)

    return render(request, 'portfolio.html', {'projects': projects})