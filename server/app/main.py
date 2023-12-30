# main.py

from fastapi import FastAPI
from app import database, models

app = FastAPI()

@app.on_event("startup")
async def startup_db_client():
    database.create_tables()

@app.post("/items/")
async def create_item(item: models.Item):
    # Your database operations here
    pass
