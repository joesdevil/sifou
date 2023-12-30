from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from pydantic import BaseModel
from sqlalchemy import Boolean, Column, Float, Integer, String
app = FastAPI()

 
  
origins = {
    "http://localhost",
    "http://localhost:3000",
}

app.add_middleware(
   CORSMiddleware,
    allow_origins = origins,
    allow_credentials =True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)


# SQLAlchemy setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



class Item(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)


class Zone(Base):
    __tablename__ = "zones"
    id = Column(Integer, primary_key=True, index=True)
    zoneName = Column(String, index=True)
    rangValue = Column(Integer)


class Camera(Base):
    __tablename__ = "cameras"
    id = Column(Integer, primary_key=True, index=True)
    ip_address = Column(String, index=True)
    is_active = Column(Boolean, index=True)
    zone_id = Column(Integer, ForeignKey("zones.id"))
    
     

Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Pydantic model for request body
class ItemCreate(BaseModel):
    name: str
    description: str


class zoneCreate(BaseModel):
    zoneName: str
    rangValue: int


class cameraCreate(BaseModel):
    ip_address: str
    zone_id: int
    is_active:bool




# api 
@app.post("/items/")
def create_item(item: ItemCreate):
    db_item = Item(**item.dict())
    db = SessionLocal()
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    db.close()
    return db_item


@app.post("/zones/")
def create_item(zone: zoneCreate):
    db_zone = Zone(**zone.dict())
    db = SessionLocal()
    db.add(db_zone)
    db.commit()
    db.refresh(db_zone)
    db.close()
    return db_zone




@app.post("/cameras/")
def create_camera(camera: cameraCreate):
    db_camera = Camera(**camera.dict())
    db = SessionLocal()
    db.add(db_camera)
    db.commit()
    db.refresh(db_camera)
    db.close()
    return db_camera



@app.get('/zones/')
def get_zones(db: Session = Depends(get_db)):
    zones = db.query(Zone).all()
    return zones
 
@app.get('/cameras/')
def get_zones(db: Session = Depends(get_db)):
    cameras = db.query(Camera).all()
    return cameras
 





 
 
import jwt
 
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware


SECERT_KEY = "0C5EE8268E33FEB5525728C16E4793D6AA85F526B14402F9BB779ABCB503A730"
ALGORITHM ="HS256"
ACCESS_TOKEN_EXPIRES_MINUTES = 800

test_user = {
   "username": "admin",
    "password": "admin",

}

 



class LoginItem(BaseModel):
    username: str
    password: str

    @app.get("/")
    def read_root():
     return {"Hello": "World"}

@app.post("/login")
async def user_login(loginitem:LoginItem):


    data = jsonable_encoder(loginitem)

    if data['username']== test_user['username'] and data['password']== test_user['password']:

        encoded_jwt = jwt.encode(data, SECERT_KEY, algorithm=ALGORITHM)
        return {"token": encoded_jwt}

    else:
        return {"message":"login failed"}
    





fake_users_db = {}
from passlib.context import CryptContext
class UserCreate(BaseModel):
    username: str
    password: str


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    password = Column(String)



pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Function to hash a password
def hash_password(password: str):
    return pwd_context.hash(password)

# Route to add a new user
 
@app.post("/add_user")
def add_user(user: UserCreate, db: Session = Depends(get_db)):
     
    db_user = User(**user.dict())
    db = SessionLocal()
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

