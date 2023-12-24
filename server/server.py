import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(host="localhost"))
channel = connection.channel()
channel.queue_declare(queue="alert")
while True:

    channel.basic_publish(exchange="", routing_key="alert", body="Hello World!")
    print(" [x] Sent 'Hello World!'")
    