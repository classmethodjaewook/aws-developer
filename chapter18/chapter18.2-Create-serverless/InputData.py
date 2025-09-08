import boto3
import json
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("gr-product-db")

def lambda_handler(event, context):

    inserted_data = {
        'id': event['id'],
        'name': event['name'],
        'description': event['description'],
        # 필요한 경우 추가 필드 추가
    }

    table.put_item(Item=inserted_data)

    return {
        'statusCode': 200,
        'body': json.dumps(inserted_data)
    }