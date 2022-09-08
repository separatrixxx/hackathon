from fastapi import APIRouter,Request
from fastapi.responses import HTMLResponse

from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="static")



@router.get('/',tags=['map'],response_class=HTMLResponse)
async def render_map(request:Request):
    return templates.TemplateResponse('map.html',{"request": request})


@router.get('/attractions',tags=['map'])
async def get_attractions():
    pass



@router.get('/food',tags=['map'])
async def get_food():
    pass

@router.get('/petrol',tags=['map'])
async def get_petrol():
    pass

@router.get('/hostel',tags=['map'])
async def get_hostel():
    pass