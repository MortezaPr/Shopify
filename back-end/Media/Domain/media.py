from djongo import models as mongo_models


class Media(mongo_models.Model):
    file_type = mongo_models.CharField(max_length=50)
    upload_date = mongo_models.DateTimeField(auto_now_add=True)

    class Meta:
        _use_db = "nonrel"
