import requests



class two_gis():
    def __init__(self):
        self.key = 'rugoqt4514'

    def get_item(self,item,coordinates):   # Нужно оставить только id
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q={item}&sort_point=59.942311,30.266461&key={self.key}')
        return response





    def get_food(self):
        pass


    def get_hostel(self):
        pass



    def get_petrol(self):

        pass



A=two_gis()



key = 'rugoqt4514'



response = requests.get(f'https://catalog.api.2gis.com/2.0/catalog/rubric/search?q=кафе&region_id=38&key={key}')

print(response.json())









