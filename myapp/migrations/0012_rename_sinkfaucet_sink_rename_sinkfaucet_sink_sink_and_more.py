# Generated by Django 4.1.2 on 2022-11-16 13:03

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0011_backsplash_backsplashuser_cabinet_cabinetuser_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SinkFaucet',
            new_name='Sink',
        ),
        migrations.RenameField(
            model_name='sink',
            old_name='sinkfaucet',
            new_name='sink',
        ),
        migrations.RenameField(
            model_name='sink',
            old_name='sinkfaucetuser',
            new_name='sinkuser',
        ),
    ]