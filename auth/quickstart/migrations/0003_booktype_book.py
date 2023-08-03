# Generated by Django 4.2.3 on 2023-07-26 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0002_remove_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booktype',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('btype', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'ordering': ('btype',),
            },
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=150)),
                ('author_name', models.CharField(max_length=150)),
                ('price', models.FloatField()),
                ('publication', models.CharField(max_length=100)),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quickstart.booktype')),
            ],
            options={
                'ordering': ('book_name',),
            },
        ),
    ]
