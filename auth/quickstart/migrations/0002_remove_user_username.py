# Generated by Django 4.2.2 on 2023-07-06 14:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
    ]
