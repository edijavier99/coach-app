# Generated by Django 4.2.13 on 2024-07-28 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image_url_tow',
            field=models.URLField(blank=True, max_length=350, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='second_paragraph',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='image_url',
            field=models.URLField(blank=True, max_length=350, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(max_length=400, unique=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='subtitle',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=400),
        ),
    ]
