from django.db import models

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