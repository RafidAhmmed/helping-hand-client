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