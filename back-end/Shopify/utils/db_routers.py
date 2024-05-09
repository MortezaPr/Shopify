class NonRelRouter:
    """
    A router to control all database operations on models in the Media application.
    """

    def db_for_read(self, model, **hints):
        if model._meta.app_label == "Media":
            return "nonrel"
        return None

    def db_for_write(self, model, **hints):
        print(model._meta.app_label)
        if model._meta.app_label == "Media":
            return "nonrel"
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == "Media" or obj2._meta.app_label == "Media":
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == "Media":
            return db == "nonrel"
        return None
