# Use the official Python image as the base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files to the working directory
COPY . .

# Expose the port on which the Django development server will run
EXPOSE 8000

ENV DJANGO_SETTINGS_MODULE=Shopify.product_settings


# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
