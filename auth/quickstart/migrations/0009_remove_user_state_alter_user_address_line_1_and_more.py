# Generated by Django 4.2.3 on 2023-08-03 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0008_user_about_me_user_address_line_1_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='state',
        ),
        migrations.AlterField(
            model_name='user',
            name='address_line_1',
            field=models.CharField(default=None, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='area',
            field=models.CharField(default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='country',
            field=models.CharField(default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='education',
            field=models.CharField(default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='mobile_number',
            field=models.CharField(default=None, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='postcode',
            field=models.CharField(default=None, max_length=20, null=True),
        ),
    ]