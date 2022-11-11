# Generated by Django 4.1.2 on 2022-11-09 14:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_cabinethandle'),
    ]

    operations = [
        migrations.CreateModel(
            name='SinkFaucet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sinkfaucet', models.CharField(blank=True, max_length=10)),
                ('roomtype', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.roomtype')),
            ],
        ),
    ]
