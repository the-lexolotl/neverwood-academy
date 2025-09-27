---
{"dg-publish":true,"permalink":"/1-dm-toolkit/home-embeds/","dgPassFrontmatter":true}
---

# Party


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

# Create New

#### Player Elements

- `BUTTON[button_player]` – Create a new Player Character note
    
- `BUTTON[button_journal]` – Start a new Journal Entry for a Player or Session
    

---

#### World Elements

- `BUTTON[button_person]` – Create a new Person – an individual NPC or character in the world
    
- `BUTTON[button_item]` – Create a new Item – gear, artifacts, treasures, relics, or magical items
    
- `BUTTON[button_quest]` – Create a new Quest – assignable tasks, missions, or narrative arcs
    
- `BUTTON[button_group]` – Create a new Group – organizations like cults, guilds, factions, military orders
    
- `BUTTON[button_club]` – Create a Extracurricular Club
    
- `BUTTON[button_species]` – Define a new Sapient Species – intelligent inhabitants of your world
    
- `BUTTON[button_pointofinterest]` – Create a new Point of Interest – explorable sites like dungeons, ruins, crash sites, shrines
    
- `BUTTON[button_place]` – Create a new Place – natural or constructed locations like mountains, ruins, temples
    
- `BUTTON[button_hub]` – Create a new Hub – populated places like Cities, Towns, Villages, Hamlets, Encampments, Keeps, Fortresses, Strongholds
    
- `BUTTON[button_region]` – Create a new Region – a local area within a continent (political, geographic, or cultural)
    
- `BUTTON[button_continent]` – Create a new Continent – a major landmass on a planet
    
- `BUTTON[button_planet]` – Create a new Planet – a world within a star system
	
- `BUTTON[button_starsystem]` – Create a new Star System – a sun and its orbiting bodies
	
- `BUTTON[button_galaxy]` – Create a new Galaxy – the largest cosmic structure in your universe

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

# Vault Graph


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



<canvas height="0" width="0" style="display: block; box-sizing: border-box; height: 0px; width: 0px;"></canvas>



</div></div>
