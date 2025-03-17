from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='news_images/')
    date = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = 'News'

    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    status = models.CharField(max_length=50)
    start_date = models.DateField()
    target_completion = models.DateField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class GalleryImage(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery_images/')
    category = models.CharField(max_length=50)
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    gender = models.CharField(max_length=10)
    password = models.CharField(max_length=128)  # Will be hashed
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}" 