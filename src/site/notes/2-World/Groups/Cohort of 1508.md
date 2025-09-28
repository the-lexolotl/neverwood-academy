---
{"tags":["Category/Group"],"MyContainer":"[[Neverwood Academy|Neverwood Academy]]","MyCategory":"Academic Cohort","image":"class of 1508.png","obsidianUIMode":"preview","leader":null,"officers":null,"members":null,"initiates":null,"faction":null,"primary_contact":null,"benefits":[{"standing":1,"reward":"What do they get at level 1?"},{"standing":2,"reward":"What do they get at level 2?"},{"standing":3,"reward":"What do they get at level 3?"}],"dg-publish":true,"permalink":"/2-world/groups/cohort-of-1508/","dgPassFrontmatter":true,"updated":"2025-09-27T18:56:54.000+01:00"}
---









> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Place)):MyContainer]`

> [!column|no-i no-t]
>> [!note|no-title]
>> ![class of 1508.png](/img/user/z_Assets/classLogos/class%20of%201508.png)
>
>> [!note|div-m] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, ⁉️Goals),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!note|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Goals|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 




> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🔗People),
> option(2, 🔗Hierarchy),
> option(3, ⚡Enemies/Allies),
> option(4, 🛠️Services),
> option(5,➕Membership),
> option(6, 🛡️Ranks),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box]
> > >[!div-m|no-title]
> > > ![[#People|no-h clean]]
> > 
> > >[!div-m|no-title]
> > > ![[#Hierarchy|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Enemies/Allies|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Services|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Membership|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Ranks|no-h clean]]



---

# General

**Select Parent:** `INPUT[suggester(optionQuery(#Category/Hub),optionQuery(#Category/Region)):MyContainer]`
 

**Select Category:** `INPUT[template-group-type][:MyCategory]`
 


# People

The following people are members of this group.  

```base
properties:
  file.name:
    displayName: Star Systems Name
  note.MyCategory:
    displayName: Type of Star System
  note.char_race:
    displayName: Race
  note.char_gender:
    displayName: Gender
  note.char_age:
    displayName: Age
  note.char_college:
    displayName: College
views:
  - type: cards
    name: Group Members - Cards
    filters:
      and:
        - or:
            - file.folder == "2-World/People"
            - file.folder == "1-Party/Group 1"
            - file.folder == "1-Party/Group 2"
        - list(Connected_Groups).contains(this)
    order:
      - file.name
      - char_age
      - char_gender
      - char_race
      - char_college
    image: note.image
  - type: table
    name: Group Members - Table
    filters:
      and:
        - or:
            - file.folder == "2-World/People"
            - file.folder == "1-Party/Group 1"
            - file.folder == "1-Party/Group 2"
        - list(Connected_Groups).contains(this)
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC
    columnSize:
      file.name: 182

```



