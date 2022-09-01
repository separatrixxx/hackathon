from fastapi import FastAPI
from routers import city

app = FastAPI()
app.include_router(city.router, prefix ='/api/v1/city', tags=['city'])