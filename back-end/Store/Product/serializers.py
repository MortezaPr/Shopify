from django.utils.text import slugify
from rest_framework import serializers

from .models import Laptop, Mobile


class MobileSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False, allow_blank=True)

    class Meta:
        model = Mobile
        fields = "__all__"

    def create(self, validated_data):
        # Assuming 'name' field is used to generate slug if not provided
        if "slug" not in validated_data or not validated_data["slug"]:
            validated_data["slug"] = slugify(validated_data["name"])
        # Ensure slug is unique and adjust if necessary
        original_slug = validated_data["slug"]
        unique_slug = original_slug
        num = 1
        while Mobile.objects.filter(slug=unique_slug).exists():
            unique_slug = f"{original_slug}-{num}"
            num += 1
        validated_data["slug"] = unique_slug
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if "slug" in validated_data:
            # If slug is explicitly set, ensure it's unique
            original_slug = validated_data["slug"]
            unique_slug = original_slug
            num = 1
            while (
                Mobile.objects.filter(slug=unique_slug).exclude(pk=instance.pk).exists()
            ):
                unique_slug = f"{original_slug}-{num}"
                num += 1
            validated_data["slug"] = unique_slug
        return super().update(instance, validated_data)


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        exclude = ["slug"]
