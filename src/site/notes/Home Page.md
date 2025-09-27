---
{"dg-home":true,"dg-publish":true,"permalink":"/home-page/","tags":["gardenEntry"],"dgPassFrontmatter":true}
---


| **[[2-World/Continents/Faerûn\|Faerûn]]**  | **[[2-World/Hubs/Neverwood Academy\|Neverwood Academy]]**         | **[[2-World/Groups/Cohort of 1508\|Cohort of 1508]]** | **[[1-Party/Group 1/Group 1\|Group 1]]**  | **[[1-Party/Group 2/Group 2\|Group 2]]**  |
| --------------- | --------------------------------- | ---------------------- | ---------------- | ---------------- |
| ![Faerûn.png](/img/user/z_Assets/Maps/Faer%C3%BBn.png) | ![Neverwood Academy square.png](/img/user/z_Assets/Neverwood%20Academy%20square.png) | ![class of 1508.png](/img/user/z_Assets/classLogos/class%20of%201508.png) | ![Group 1.png](/img/user/z_Assets/character_art/Players/Group%201.png) | ![group 2.png](/img/user/z_Assets/character_art/Players/Group%202.png) |

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
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/1-dm-toolkit/home-embeds/#party" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h1 clean

</div>


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


</div></div>

> >
> > >[!div-m|no-title]
> > > 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/1-dm-toolkit/home-embeds/#session-journals" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

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
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/1-dm-toolkit/home-embeds/#recently-modified" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

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
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/1-dm-toolkit/home-embeds/#vault-graph" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

<div class="markdown-embed-title">

# no-h clean

</div>


# Vault Graph


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



<canvas height="0" width="0" style="display: block; box-sizing: border-box; height: 0px; width: 0px;"></canvas>



</div></div>


</div></div>
