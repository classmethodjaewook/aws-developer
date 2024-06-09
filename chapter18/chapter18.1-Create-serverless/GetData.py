import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("test-db")

def lambda_handler(event, context):
    response = table.scan()
    return response['Items']