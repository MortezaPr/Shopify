from pymongo import MongoClient
from bson.objectid import ObjectId


client = MongoClient(
        "mongodb://admin:password@mongodb:27017"
    )
    
db = client["mediaDb"]
collection = db['pictures']

def save_picture_to_mongodb(picture_data):
    return collection.insert_one({'picture_data': picture_data}).inserted_id

    
def get_picture_from_mongodb(picture_data):
    product_picture = collection.find_one({'_id': ObjectId(picture_data)})

    if product_picture:
        return product_picture['picture_data']
    
    return None

def delete_picture_from_mongodb(picture_id):
    result = collection.delete_one({'_id': ObjectId(picture_id)})
    return result.deleted_count 