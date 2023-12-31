# Generated by Django 4.2.7 on 2023-12-05 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dictionaryapp', '0003_banglatoenglishword_banglaword_englishword_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='en',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=1000, unique=True)),
                ('meaning', models.TextField()),
            ],
        ),
        migrations.RenameModel(
            old_name='BanglaWord',
            new_name='Word',
        ),
        migrations.DeleteModel(
            name='BanglaToEnglishWord',
        ),
        migrations.DeleteModel(
            name='EnglishWord',
        ),
    ]
