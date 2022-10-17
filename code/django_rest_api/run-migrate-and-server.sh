#!/bin/bash
sleep 5
# python test_app/manage.py startapp jobdatabase
python test_app/manage.py makemigrations
python test_app/manage.py migrate
python test_app/manage.py runserver 0:8000
