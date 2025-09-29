---
{"tags":["Category/PointofInterest"],"MyContainer":"[[2-World/Places/Quandrix Campus.md|Quandrix Campus]]","MyCategory":"Landmark","obsidianUIMode":"preview","image":"Torus Hall.webp","dg-publish":true,"permalink":"/2-world/points-of-interest/torus-hall/","dgPassFrontmatter":true,"updated":"2025-09-29T15:34:36.000+01:00"}
---


# General

![Torus Hall.webp](/img/user/z_Assets/Maps/Torus%20Hall.webp)

**Category:** Landmark

### Description
The central hall of Quandrix campus lies at the end of a geometric series of walkways, terminating at ascending ramps to the towering building. Inside, Torus Hall’s architecture is mapped to an ever-changing three-dimensional grid, which slowly evolves. Some Quandrix faculty members insist that mage-students shouldn’t linger too long inside the hall, lest its geometry eventually turn itself inside out while students are still within it.

# GM Notes

Make notes of what you need to track in the Point of Interest here. 

::hidden
# Travel

`VIEW[{Travel Calculator#HoursPerDay}][math]` hrs per day
[[1-DM Toolkit/Travel Calculator\|Travel Calculator]]  / [[Exhaustion\|Exhaustion]] Level: `VIEW[{Travel Calculator#ExhaustionLevel}][math]`

| Destination |  Travel Days  |
| ---|---|
| [[Next Town A\|Next Town A]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`      |
| [[Next Town B \|Next Town B ]] | 🕓: `VIEW[round((99* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`

# Scene Summary 

This is a cave

```statblock
monster: Troll
```

### Forest Approach

This is the approach

### Cave Interior

This is inside


# Quests

`BUTTON[button_quest]` 

- [ ]  Locate the human remains. 
- [ ] Recover the journal. 

```base
views:
  - type: cards
    name: Quests - Cards
    filters:
      and:
        - file.folder == "2-World/Quests"
        - list(MyContainer).contains(this)
    order:
      - file.name
    image: note.image
  - type: table
    name: Quests - Table
    filters:
      and:
        - file.folder == "2-World/Quests"
        - list(MyContainer).contains(this)
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC
    columnSize:
      file.name: 182

```

# People

`BUTTON[button_person]`  The following people are associated with this location.

```base
properties:
  note.Connected_Quests:
    displayName: Associated Quests
  note.Connected_Groups:
    displayName: Associated Groups
  note.char_race:
    displayName: Race
  note.char_gender:
    displayName: Gender
  note.char_age:
    displayName: Age
views:
  - type: cards
    name: People - Cards
    filters:
      and:
        - file.folder == "2-World/People"
        - list(MyContainer).contains(this)
        - char_status == "Alive"
    order:
      - file.name
      - char_age
      - char_gender
      - char_race
    image: note.image
  - type: table
    name: People - Table
    filters:
      and:
        - file.folder == "2-World/People"
        - list(MyContainer).contains(this)
    order:
      - file.name
      - char_race
      - char_gender
      - char_age
      - Connected_Groups
      - Connected_Quests
    sort:
      - property: Connected_Groups
        direction: ASC
      - property: char_gender
        direction: ASC
      - property: file.name
        direction: DESC
    columnSize:
      file.name: 182

```

# Encounter

Lists any mentioned monsters in this note.



```base
views:
  - type: cards
    name: Mentioned Monsters
    filters:
      and:
        - this.hasLink(file)
        - noteType == "pf2eMonster"
    image: note.image
    cardSize: 200
    imageFit: contain
    imageAspectRatio: 1

```

```encounter
name: Example
creatures:
 - 3: Goblin, 5, 15, 2, 25 # 1 goblin with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
```

:::