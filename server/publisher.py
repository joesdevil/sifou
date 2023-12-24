import asyncio
import websockets
import json
# Dictionary to store connected clients
clients = set()

async def server_handler(websocket, path):
    # Register the new client
    clients.add(websocket)
    try:
        for i in range(0,5):
            context = {}
            # Send a message to the client
            
            message=input("message : ")
            # message="Urgent: a worker was injured"
            context["message"]=message
            date=input("date : ")
            # date="dd"
            context["date"]=date
            status=input("status : ")
            # status="danger"
            context["status"]=status
            
            print("context sent")
            await websocket.send(json.dumps(context))
            await asyncio.sleep(250)  # Send a message every 5 seconds
            

    except websockets.exceptions.ConnectionClosed:
        # Remove the client when the connection is closed
        clients.remove(websocket)
        print(f"Client disconnected: {websocket.remote_address}")

# Start the WebSocket server
start_server = websockets.serve(server_handler, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()



# import asyncio
# import websockets
# import json

# # Dictionary to store connected clients
# clients = set()

# async def server_handler(websocket, path):
#     # Register the new client
#     clients.add(websocket)
#     print(f"Client connected: {websocket.remote_address}")

#     try:
#         while True:
#             context = {}
#             # Send a message to the client
            
#             message = input("message: ")
#             context["message"] = message
#             date = input("date: ")
#             context["date"] = date
#             status = input("status: ")
#             context["status"] = status
            
#             print("context sent")
#             await websocket.send(json.dumps(context))
           

#     except websockets.exceptions.ConnectionClosed:
#         # Remove the client when the connection is closed
#         clients.remove(websocket)
#         print(f"Client disconnected: {websocket.remote_address}")

# # Start the WebSocket server
# start_server = websockets.serve(server_handler, "localhost", 8765)

# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()
