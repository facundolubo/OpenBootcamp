from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=64, help_text='Nombre del genero')
    def __str__(self) -> str:
        return self.name