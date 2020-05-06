#azure default: gunicorn --bind=0.0.0.0 --timeout 600 application:app
#Django apps typically don't need customization.
#https://docs.microsoft.com/en-us/azure/developer/python/tutorial-deploy-app-service-on-linux-04#flask-startup-commands

#https://docs.microsoft.com/en-us/azure/developer/python/

gunicorn --bind=0.0.0.0 --timeout 600 server:app
