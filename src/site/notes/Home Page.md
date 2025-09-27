---
{"dg-publish":true,"permalink":"/home-page/","tags":["gardenEntry"]}
---

This is the homepage test

> [!cards|5]
> 
> **[[2-World/Continents/Faerûn\|Faerûn]]**
> [![Faerûn.png|Faerûn](/img/user/z_Assets/Maps/Faer%C3%BBn.png)](Faerûn)
> 
> **[[2-World/Hubs/Neverwood Academy\|Neverwood Academy]]**
> [![Neverwood Academy Square.png|Neverwood Academy](/img/user/z_Assets/Neverwood%20Academy%20square.png)](Neverwood%20Academy)
> 
> **[[2-World/Groups/Cohort of 1508\|Cohort of 1508]]**
> [![class of 1508.png|Cohort of 1508](/img/user/z_Assets/classLogos/class%20of%201508.png)](Cohort%20of%201508)
> 
> **[[1-Party/Group 1/Group 1\|Group 1]]**
> [![group 1.png|Players - Group 1](/img/user/z_Assets/character_art/Players/Group%201.png)](Group%201)
> 
 > **[[1-Party/Group 2/Group 2\|Group 2]]**
> [![group 2.png|Players - Group 2](/img/user/z_Assets/character_art/Players/Group%202.png)](Group%202)


> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🧙Party),
> option(2, 📚Session Journals),
> option(4, 🪶Recently Modified),
> option(5, 📈Vault Graph),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box]
> > >[!div-m|no-title]
> > > 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h1 clean

</div>


# Party

- `BUTTON[button_player]` – Create a new Player Character note

```base
formulas:
  Untitled: ""
  TestForm: ""
  Untitled 2: char_age.
properties:
  property.char_race:
    displayName: Race
  property.char_gender:
    displayName: Gender
  property.char_status:
    displayName: Status
  property.char_class:
    displayName: Class
  property.char_age:
    displayName: Age
  property.char_items:
    displayName: Inventory
  file.name:
    displayName: Character Name
  property.Player:
    displayName: Player Name
  property.level:
    displayName: Level
  note.char_status:
    displayName: Character Status
  note.char_race:
    displayName: Race
  note.char_gender:
    displayName: Gender
  note.char_items:
    displayName: Items
  note.char_age:
    displayName: Age
  note.level:
    displayName: Level
  note.char_class:
    displayName: Class
  note.char_college:
    displayName: College
views:
  - type: cards
    name: Party Members
    filters:
      and:
        - tags == ["Category/Player"]
        - file.folder != "z_Templates/World Builder Templates"
    order:
      - file.name
      - Player
      - char_status
      - char_gender
      - char_race
      - char_class
      - level
      - char_college
    image: note.image
  - type: table
    name: Party View - Tables
    filters:
      and:
        - tags == ["Category/Player"]
        - file.folder != "z_Templates/World Builder Templates"
    order:
      - file.name
      - Player
      - char_race
      - char_gender
      - level
      - char_status
      - char_class
      - char_age
    image: note.image
  - type: table
    name: View

```


</div></div>

> >
> > >[!div-m|no-title]
> > > 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h clean

</div>


# Session Journals

- `BUTTON[button_journal]` – Start a new Journal Entry for a Player or Session

```base
properties:
  note.sessionstatus:
    displayName: Status
  note.sessionDate:
    displayName: Date
  note.players:
    displayName: Players
  note.OneLiner:
    displayName: One Liner
  note.fc-category:
    displayName: Catagory
views:
  - type: cards
    name: Journals - Vards
    filters:
      and:
        - file.folder == "1-Session Journals"
    order:
      - fc-display-name
      - OneLiner
      - sessionDate
      - players
      - sessionstatus
      - fc-category
    sort:
      - property: file.name
        direction: ASC
    limit: 15
    image: note.image
  - type: table
    name: Session Journals
    filters:
      and:
        - file.folder == "1-Session Journals"
    order:
      - file.name
      - Status
      - players
    limit: 15

```


</div></div>

> >
> > > [!div-m|no-title]
> > > 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h1 clean

</div>


# Recently Modified

```base
formulas:
  Untitled: ""
  Untitled 2: ""
properties:
  note.MyContainer:
    displayName: Location
  note.MyCategory:
    displayName: Type
views:
  - type: table
    name: Recently Modified - All
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
      - obsidianUIMode
    sort:
      - property: file.mtime
        direction: DESC
      - property: file.ctime
        direction: ASC
      - property: file.folder
        direction: DESC
      - property: formula.Untitled 2
        direction: DESC
      - property: property.MyCategory
        direction: ASC
      - property: property.Status
        direction: DESC
    limit: 20
    columnSize:
      file.name: 177
      property.MyContainer: 189
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 170
  - type: table
    name: Regions
    filters:
      and:
        - file.folder == "2-World/Regions"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Hubs
    filters:
      and:
        - file.folder == "2-World/Hubs"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: file.name
        direction: DESC
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Places
    filters:
      and:
        - file.folder == "2-World/Places"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: file.name
        direction: DESC
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Places of Interest
    filters:
      and:
        - file.folder == "2-World/Points of Interest"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: People
    filters:
      and:
        - file.folder == "2-World/People"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 154
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Groups
    filters:
      and:
        - file.folder == "2-World/Groups"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: file.ctime
        direction: ASC
      - property: file.name
        direction: ASC
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Quests
    filters:
      and:
        - file.folder == "2-World/Quests"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: table
    name: Session Journals
    filters:
      and:
        - file.folder == "1-Session Journals"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    sort:
      - property: file.name
        direction: ASC
      - property: property.Status
        direction: DESC
    limit: 10
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
  - type: cards
    name: View
    filters:
      and:
        - file.inFolder("2-World/Points of Interest")
    order:
      - file.name
      - MyContainer
      - MyCategory
    sort:
      - property: file.mtime
        direction: DESC
    image: note.image
  - type: table
    name: View 2

```





</div></div>

> > 
> > > [!div-m|no-title]
> > > 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h clean

</div>


# Vault Graph


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



<canvas height="0" width="0" style="display: block; box-sizing: border-box; height: 0px; width: 0px;"></canvas>



</div></div>


</div></div>
