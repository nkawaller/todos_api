from django.db import models

# Create your models here.

class Note(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    note = models.TextField()
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return f'{self.note}'
