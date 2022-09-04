import requests



class two_gis():
    def __init__(self):
        self.key = 'rugoqt4514'


    def get_item(self,item,coordinates):   # Нужно оставить только id
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q={item}&sort_point=59.942311,30.266461&key={self.key}')
        return response


    def get_food(self,coordinates):
        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=кафе&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])
        return coordinata


    def get_hostel(self,coordinates):
        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=хостел&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])
        return coordinata


    def get_petrol(self,coordinates):

        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=заправка&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])
        return coordinata


    def get_camping(self,coordinates):

        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=база отдыха&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])

        return coordinata


    def get_sight(self,coordinates):

        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=достопримечательность&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])

        return coordinata


    def get_bank(self,coordinates):

        coordinates=coordinates.split(sep=',')
        response = requests.get(f'https://catalog.api.2gis.com/3.0/items?q=банкомат&type=branch&point={coordinates[0]}%2C{coordinates[1]}&radius=1000&key={self.key}')

        result=response.json()['result']
        items=result['items']
        address_name=[]
        coordinata=[]

        for i in range(len(items)):
            items_type=items[i]
            address_name.append(items_type['address_name'])
            response_coordinates=requests.get(f'https://catalog.api.2gis.com/3.0/items/geocode?q=Санкт-Петербург,{address_name[i]}, 25&fields=items.point&key=rugoqt4514')
            result_coordinates=response_coordinates.json()['result']
            items_coordinates=result_coordinates['items']
            for j in range(len(items_coordinates)):
                items_coordinates_type=items_coordinates[j]
                coordinata.append(items_coordinates_type['point'])

        for j in range(len(coordinata)):
                coordinata[j]=str(coordinata[j]['lat'])+', '+str(coordinata[j]['lon'])

        return coordinata



