# Generated by Django 4.2.3 on 2023-07-26 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0005_campaign_category_customuser_tutorials_subscriber'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='discription',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
