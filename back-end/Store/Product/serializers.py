from django.utils.text import slugify
from rest_framework import serializers

from .models import Laptop, Phone


class PhoneSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False, allow_blank=True)

    class Meta:
        model = Phone
        fields = "__all__"

    def create(self, validated_data):
        if "slug" not in validated_data or not validated_data["slug"]:
            validated_data["slug"] = slugify(validated_data["title"])
        # Ensure slug is unique and adjust if necessary
        original_slug = validated_data["slug"]
        unique_slug = original_slug
        num = 1
        while Phone.objects.filter(slug=unique_slug).exists():
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
                Phone.objects.filter(slug=unique_slug).exclude(pk=instance.pk).exists()
            ):
                unique_slug = f"{original_slug}-{num}"
                num += 1
            validated_data["slug"] = unique_slug
        return super().update(instance, validated_data)


class LaptopSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False, allow_blank=True)

    class Meta:
        model = Laptop
        fields = "__all__"

    def create(self, validated_data):
        if "slug" not in validated_data or not validated_data["slug"]:
            validated_data["slug"] = slugify(validated_data["title"])
        # Ensure slug is unique and adjust if necessary
        original_slug = validated_data["slug"]
        unique_slug = original_slug
        num = 1
        while Phone.objects.filter(slug=unique_slug).exists():
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
                Phone.objects.filter(slug=unique_slug).exclude(pk=instance.pk).exists()
            ):
                unique_slug = f"{original_slug}-{num}"
                num += 1
            validated_data["slug"] = unique_slug
        return super().update(instance, validated_data)


class ProductSerializer(serializers.Serializer):
    def to_representation(self, instance):
        if isinstance(instance, Phone):
            return PhoneSerializer(instance).data
        elif isinstance(instance, Laptop):
            return LaptopSerializer(instance).data
        else:
            raise Exception("Unexpected type of tagged object")
