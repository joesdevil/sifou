#!/usr/bin/env python3
import pika

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)

connection = pika.BlockingConnection(pika.ConnectionParameters(host="localhost"))
channel = connection.channel()
channel.queue_declare(queue="alert")
print(" [*] Waiting for messages...")
channel.basic_consume(queue="alert", on_message_callback=callback)
channel.start_consuming()