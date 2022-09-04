from fastapi import FastAPI
from routuers import map
from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
app = FastAPI()
templates = Jinja2Templates(directory="static")



app.include_router(map.router, prefix ='/api/v1/city', tags=['city'])