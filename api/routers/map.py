from fastapi import APIRouter,Request,Depends
from fastapi.responses import HTMLResponse
from twogis.api import Two_gis_sorted
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="static")



@router.get('/',tags=['map'],response_class=HTMLResponse)
async def render_map(request:Request):
    return templates.TemplateResponse('map.html',{"request": request})


# @router.get('/attractions',tags=['map'])
# async def get_attractions():
#     pass



@router.get('/food{city}/{coordinates}',tags=['map'])
async def get_food(city,coordinates,data = Depends(Two_gis_sorted)):
    return data.get_food(city,coordinates)

@router.get('/petrol{city}/{coordinates}',tags=['map'])
async def get_petrol(city,coordinates,data = Depends(Two_gis_sorted)):
    return data.get_petrol(city,coordinates)

@router.get('/camping{city}/{coordinates}',tags=['map'])
async def get_hostel(city,coordinates,data = Depends(Two_gis_sorted)):
    return data.get_camping(city,coordinates)



@router.get('/bank{city}/{coordinates}',tags=['map'])
async def get_bank(city,coordinates,data = Depends(Two_gis_sorted)):
    return data.get_bank(city,coordinates)



@router.get('/hostel{city}/{coordinates}',tags=['map'])
async def get_hostel(city,coordinates,data = Depends(Two_gis_sorted)):
    return data.get_bank(city,coordinates)