from fastapi import APIRouter
from fastapi import Depends

router = APIRouter()

@router.get('/',tags=['city'])
async def select_city(city:str):
    return city


