from django.db import models

class chomolokko(models.Model):
    word = models.CharField(max_length=100, unique=True)
    meaning = models.TextField()

    def __str__(self):
        return self.word

class bn(models.Model):
    word = models.CharField(max_length=100, unique=True)
    meaning = models.TextField()

    def __str__(self):
        return self.word

class en(models.Model):
    word = models.CharField(max_length=100, unique=True)
    meaning = models.TextField()

    def __str__(self):
        return self.word