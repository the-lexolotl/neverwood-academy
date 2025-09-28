---
{"tags":["Category/Continent"],"obsidianUIMode":"preview","MyContainer":"[[Toril|Toril]]","image":"Faerûn 1.png","dg-publish":true,"dg-path":"World/Continents/Faerûn.md","permalink":"/world/continents/faerun/","dgPassFrontmatter":true,"updated":"2025-09-28T19:14:12.000+01:00"}
---




> [!NOTE] Parent Planet: `INPUT[suggester(optionQuery(#Category/Planet)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: FaerunInteractive ### Must be unique with no spaces  
>> image: [[Pasted image 20250914210200.png]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [6600, 10200]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 3300 ### To center the map, make this half of the map height.  
>> long: 5100 ### To center the map, make this half of the map width.  
>> minZoom: -4 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 3 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -3.5 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
>> zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
>> unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
>> scale: 0.273972602739726 ### Real units/px (resolution) of your map  
>> recenter: false  
>> darkmode: false ### marker
>> ```
>
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Region Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#Region Details|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🗺️Regions),
> option(2, ⚔️Capital Cities),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box]
> > >[!div-m|no-title]
> > > ![[#Regions|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Capital Cities|no-h clean]]
> > 

---
# General Info

See [[2-World/Continents/Faerun Interactive Map\|Faerun Interactive Map]]

# Region Details

**Dominant Races:**  
**Climate:** 

# GM Notes

Make notes of what you need to track in the region here. 

# Regions

`BUTTON[button_region]` **continent** Places where people live - Cities, Towns, Villages, Hamlets, Encampment, Keeps, Fortresses, Strongholds.

```base
properties:
  file.name:
    displayName: Region Name
views:
  - type: cards
    name: Region - Cards
    filters:
      and:
        - file.folder == "2-World/Regions"
        - list(MyContainer).contains(this)
    order:
      - file.name
    image: note.image
  - type: table
    name: Region - Table
    filters:
      and:
        - file.folder == "2-World/Regions"
        - list(MyContainer).contains(this)
    order:
      - file.name
      - MyContainer
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 182

```

# Capital Cities

`BUTTON[button_group]` Groups of people and power - religious, cults, guilds, military

```base
formulas:
  LinkedToThisContinent: |
    list(MyContainer)
      .map(link(value))
      .filter(file(value))
      .filter(
        list(file(value).properties.MyContainer)
          .map(link(value))
          .contains(this)
      )
      .length > 0
  RegionsForThis: |
    list(MyContainer)
      .map(link(value))
      .filter(file(value))
      .filter(
        list(file(value).properties.MyContainer)
          .map(link(value))
          .contains(this)
      )
      .map(link(value, file(value).name))
properties:
  file:
    displayName: Hub
  MyCategory:
    displayName: Type
  RegionsForThis:
    displayName: Region(s)
views:
  - type: cards
    name: Capital Cities (Cards)
    image: note.image
    filters:
      and:
        - file.inFolder("2-World/Hubs")
        - formula.LinkedToThisContinent
        - or:
            - MyCategory.contains("City +1500")
            - list(MyCategory).contains("City +1500")
  - type: table
    name: Capital Cities (List)
    filters:
      and:
        - file.inFolder("2-World/Hubs")
        - formula.LinkedToThisContinent
        - or:
            - MyCategory.contains("City +1500")
            - list(MyCategory).contains("City +1500")
    order:
      - file
      - MyCategory
      - RegionsForThis
```
