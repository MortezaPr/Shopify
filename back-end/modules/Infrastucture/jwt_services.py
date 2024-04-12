import datetime

import jwt
from django.conf import settings
from rest_framework import exceptions


def create_access_token(id):
    return jwt.encode(
        {
            "id": id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2),
            "iat": datetime.datetime.utcnow(),
        },
        settings.SECRET_KEY,
        algorithm="HS256",
    )


def decode_access_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")

        return payload["id"]
    except:
        raise exceptions.AuthenticationFailed("unauthenticated")


def create_refresh_token(id):
    return jwt.encode(
        {
            "id": id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
            "iat": datetime.datetime.utcnow(),
        },
        settings.SECRET_KEY,
        algorithm="HS256",
    )


def decode_refresh_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")

        return payload["id"]
    except:
        raise exceptions.AuthenticationFailed("unauthenticated")
