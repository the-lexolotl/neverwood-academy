---
{"tags":["Category/PointofInterest"],"MyContainer":["[[2-World/Places/Nevewinter Woods.md|Nevewinter Woods]]","[[2-World/Hubs/Xvart Village.md|Xvart Village]]"],"MyCategory":"Dungeon","obsidianUIMode":"preview","image":"Xvart Dungeon.webp","dg-publish":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"Connected_Quests":["[[Miaukier Must Die!|Miaukier Must Die!]]"],"dg-show-backlinks":true,"dg-path":"World/Points of Interest/Xvart Ritual Dungeon.md","permalink":"/world/points-of-interest/xvart-ritual-dungeon/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true}
---


# General


**Location:** [[2-World/Hubs/Xvart Village\|Xvart Village]]

**Category:** Dungeon

### Description
This is the description for the location.

hidden
`BUTTON[button_quest]` 

- [ ]  Navigate through the dungeon
- [ ]  Locate the sharman and [[2-World/People/Other/Miaukier\|Miaukier]] 
- [ ]  Stop the ritual
- [ ]  Decide if Mutant Miaukier should go free

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
:::
| File                                                   |
| ------------------------------------------------------ |
| [[2-Quests/Miaukier Must Die!\|Miaukier Must Die!]] |

{ .block-language-dataview}


### [[2-Quests/Miaukier Must Die!\|Miaukier Must Die!]]
- [x]  Navigate through the dungeon
- [x]  Locate the sharman and [[2-World/People/Other/Miaukier\|Miaukier]] 
- [x]  Stop the ritual
- [x]  Decide if Mutant Miaukier should go free
