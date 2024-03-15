# Use the official Python image as the base image
FROM python:3.12

# Set environment variables
ENV PYTHONUNBUFFERED 1

# sets the working directory
WORKDIR /usr/src/app

# Copy the requirements file to the working directory
COPY requirements.txt ./

# install pipenv on the container
RUN pip install -r requirements.txt

# copy all files and directories from <src> to <dest>
COPY . .

# Expose the port on which the Django development server will run
EXPOSE 8000

ENV DJANGO_SETTINGS_MODULE=Shopify.product_settings


# Command to run
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
