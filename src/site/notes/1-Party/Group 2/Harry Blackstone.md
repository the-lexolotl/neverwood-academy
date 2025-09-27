---
{"aliases":["Ross"],"tags":["Category/Player"],"Player":"Ross","Role":"Player","level":2,"hp":14,"max_hp":14,"ac":11,"modifier":1,"pasperc":11,"Status":"Active","PlayerKnownLanguages":["Common","Common Sign Language"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Human","char_class":"Wizard","char_gender":"Male","char_status":"Alive","char_age":"Young Adult","char_items":[],"Connected_Quests":["[[2-World/Quests/The Missing Professor.md|The Missing Professor]]","[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]","[[2-World/Quests/Miaukier Must Die!.md|Miaukier Must Die!]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 2/Group 2.md|Group 2]]","[[2-World/Groups/Neverwood Times.md|Neverwood Times]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend","Cadoras Damellawar"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Ross.png","char_role":"Player","char_college":"Quandrix","dg-publish":true,"dg-path":"Party/Group 2/Harry Blackstone.md","permalink":"/party/group-2/harry-blackstone/","dgPassFrontmatter":true,"updated":"2025-09-27T18:29:06.000+01:00"}
---


> [!NOTE|div-m] Player Name:  `Ross`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![Ross.png](/img/user/z_Assets/character_art/Players/Ross.png)
>
>> [!div-m|no-title] Place Name
>> ~~~
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, 🧙Description),
>> option(3, ⚙️Configure),
>> option(4, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh480|10]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Configure|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~
> INPUT[select(
> option(1, 🤹Abilities+Skills),
> option(2, 💪Traits),
> option(3, 📖Spell Book),
> option(4, ⚔️Inventory),
> option(5, 🔗Connections),
> option(6, 🧑‍🤝‍🧑Relationships),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Skills|no-h clean]]
> >
> > >[!div-m|no-title]
> > > ![[#Traits|no-h1 clean]]
> >
> > >[!div-m|no-title]
> > > ![[#Spell Book|no-h1 clean]]
> >
> > > ![[#Inventory|no-h1 clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h1 clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h1 clean]]

---

# General

```badges
items:
  - label: College
    value: '{{frontmatter.char_college}}'
```
<br>

```badges
items:
  - label: Race
    value: 'Human'
  - label: Level
    value: '{{frontmatter.level}}'
  - label: Initiative
    value: '{{frontmatter.modifier}}'
```
<br>

```badges
items:
  - label: Spell Save
    value: 13
  - label: AC
    value: '{{frontmatter.ac}}'
  - label: AC (Mage Armor)
    value: 14
```

<br>

```healthpoints
state_key: harry_health
health: '{{ frontmatter.hp }}'
reset_on: long-rest
hitdice:
  dice: d6
  value: 1
```

```event-btns
items:
  - name: Short Rest
    value: short-rest
  - name: Long Rest
    value: long-rest
```

# Description

This is the persons description. 

# Configure



| Stat     | Value                                         |
| -------- | --------------------------------------------- |
| Status   | `INPUT[template-person-status][:char_status]` |
| Race     | `INPUT[template-person-race][:char_race]`     |
| Class    | `INPUT[template-person-class][:char_class]`   |
| Level    | `INPUT[number:level]`                         |
| Gender   | `INPUT[template-person-gender][:char_gender]` |
| Age      | `INPUT[template-person-age-range][:char_age]` |
| HP       | `INPUT[number:hp]`                            |
| Max HP   | `INPUT[number:max_hp]`                        |
| AC       | `INPUT[number:ac]`                            |
| Modifier | `INPUT[number:modifier]`                      |
| College  | `INPUT[template-college][:char_college]`      |

# GM Notes

Make notes of what you need to track in the town here. 

# Skills


```ability
abilities:
  strength: 8
  dexterity: 13
  constitution: 14
  intelligence: 17
  wisdom: 12
  charisma: 12

proficiencies:
  - intelligence
  - wisdom
```

<br>

```skills
proficiencies:
  - arcana
  - insight
  - nature
  - stealth
expertise:
  - investigation
```


# Traits

### Arcane Recovery
*PHB-2024, pg. 166*

When you finish a Short Rest, you can recover. The spell slots can have a combined level equal to no more than 1, and none of the slots can be level 6 or higher.

You can use this feature once per Long Rest.

Arcane Recovery: (No Action) 1/Long Rest
```consumable
label: ""
state_key: harry_arcane_recovery
uses: 1
reset_on: long-rest
```

### Crafter
*PHB-2024, pg. 200*

-  Tool Proficiency. You gain proficiency with three different Artisan's Tools.
-  Discount. When buying an nonmagical item, you receive a 20 percent discount.

#### Fast Crafting.
When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, if you have the associated tools and are proficient with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.
-  Woodcarver's Tools
-  Alchemist's Supplies
-  Jeweller's Tools

### Neverwood Initiate - Quandrix
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Intelligence.

[[3-Mechanics/CLI/spells/druidcraft-xphb\|Druidcraft]] (Cantrip)
[[3-Mechanics/CLI/spells/mage-hand-xphb\|Mage Hand]] (Cantrip)
[[3-Mechanics/CLI/spells/absorb-elements-xge\|Absorb Elements]] (1st/Long Rest)
```consumable
label: "Absorb Elements/Long Rest"
state_key: harry_absorb_elements
uses: 1
reset_on: long-rest
```


# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: harry_spells_1
    reset_on: long-rest
    uses: 3
```

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Neverwood Initiate - Quandrix
```consumable
label: "Absorb Elements/Long Rest"
state_key: harry_absorb_elements
uses: 1
reset_on: long-rest
```

### Arcane Recovery
```consumable
label: "Arcane Recovery/Long Rest"
state_key: harry_arcane_recovery
uses: 1
reset_on: long-rest
```

> [!NOTE]- Prepared
> Create Bonfire(Cantrip)
Fire Bolt(Cantrip)
Light(Cantrip)
Burning Hands(1st)
Detect Magic(1st)
Shield(1st)
Thunderwave(1st)

> [!NOTE]+ Known
> **Cantrips**
> Acid Splash(Cantrip)
Blade Ward(Cantrip)
Booming Blade(Cantrip)
Chill Touch(Cantrip)
Control Flames(Cantrip)
Create Bonfire(Cantrip)
Dancing Lights(Cantrip)
Elementalism(Cantrip)
Fire Bolt(Cantrip)
Friends(Cantrip)
Frostbite(Cantrip)
Green-Flame Blade(Cantrip)
Gust(Cantrip)
Infestation(Cantrip)
Light(Cantrip)
Lightning Lure(Cantrip)
Mage Hand(Cantrip)
Mending(Cantrip)
Message(Cantrip)
Mind Sliver(Cantrip)
Minor Illusion(Cantrip)
Mold Earth(Cantrip)
Poison Spray(Cantrip)
Prestidigitation(Cantrip)
Ray of Frost(Cantrip)
Shape Water(Cantrip)
Shocking Grasp(Cantrip)
Sword Burst(Cantrip)
Thunderclap(Cantrip)
Toll the Dead(Cantrip)
True Strike(Cantrip)
  <br>
  ** 1st Level Spells**
Absorb Elements(1st)
Alarm(1st)
Burning Hands(1st)
Catapult(1st)
Cause Fear(1st)
Charm Person(1st)
Chromatic Orb(1st)
Color Spray(1st)
Comprehend Languages(1st)
Detect Magic(1st)
Disguise Self(1st)
Earth Tremor(1st)
Expeditious Retreat(1st)
False Life(1st)
Feather Fall(1st)
Find Familiar(1st)
Fog Cloud(1st)
Grease(1st)
Ice Knife(1st)
Identify(1st)
Illusory Script(1st)
Jump(1st)
Longstrider(1st)
Mage Armor(1st)
Magic Missile(1st)
Protection from Evil and Good(1st)
Ray of Sickness(1st)
Shield(1st)
Silent Image(1st)
Silvery Barbs(1st)
Sleep(1st)
Snare(1st)
Tasha's Caustic Brew(1st)
Tasha's Hideous Laughter(1st)
Tenser's Floating Disk(1st)
Thunderwave(1st)
Unseen Servant(1st)
Witch Bolt(1st)

# Inventory

The following items belong to Harry Blackstone.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
 

- Abacus
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- Harry's Dorm Room Key
- [[3-Mechanics/CLI/items/ink-xphb\|Ink]] (1 ounce bottle)
- [[3-Mechanics/CLI/items/ink-pen-xphb\|Ink Pen]]
- Neverwood - First Year Uniform
- [[3-Mechanics/CLI/items/quarterstaff-xphb\|Quarterstaff]]
- [[3-Mechanics/CLI/items/robe-xphb\|Robe]]
- Spell Scroll (Level 1)
- Spellbook
- 📖 "Goops, Goos and Gunk" – a book on magical slimes and oozes
  Likely written like a bestiary/field manual, with diagrams, descriptions, and alchemical notes.
  Length: Medium (200–250 pages equivalent).
  Reading time: ~6–8 hours for a skimming read, ~12+ hours for full study and cross-referencing spells.
- 📖 A notebook with handwritten notes on animating objects
  Being a notebook, this is much shorter but harder to parse (scribbles, shorthand, magical notation).
  Length: Short (40–60 pages equivalent).
  Reading time: ~2–3 hours to skim, ~5–6 hours to decode carefully.
- 📖 A book on Aganazzar of Neverwinter (Evocation specialist)
  A wizard biography mixed with spell theory. These tend to be highly technical in parts, so slower going.
  Length: Medium-long (250–300 pages equivalent).
  Reading time: ~8–10 hours casual read, ~15–18 hours for deep magical study.

### Backpack (7)
- [[3-Mechanics/CLI/items/book-xphb\|Book]]
- [[3-Mechanics/CLI/items/ink-xphb\|Ink]]
- [[3-Mechanics/CLI/items/ink-pen-xphb\|Ink Pen]]
- [[3-Mechanics/CLI/items/lamp-xphb\|Lamp]]
- [[3-Mechanics/CLI/items/oil-xphb\|Oil]]
- [[3-Mechanics/CLI/items/parchment-xphb\|Parchment]]
- [[3-Mechanics/CLI/items/tinderbox-xphb\|Tinderbox]]


#### Ring of Investigation
```consumable
label: ""
state_key: din_items__ring_of_investigation
uses: 3
```

_May the ability to see also provide you with a clear vision" Grants +1 to Investigation Roles_

# Connections
Is the person linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`
 

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`
 

# Relationships

List important relationships here. 

<pre class="dataview dataview-error">Evaluation Error: SyntaxError: Invalid or unexpected token
    at DataviewInlineApi.eval (plugin:dataview:19027:21)
    at evalInContext (plugin:dataview:19028:7)
    at asyncEvalInContext (plugin:dataview:19038:32)
    at DataviewJSRenderer.render (plugin:dataview:19064:19)
    at DataviewJSRenderer.onload (plugin:dataview:18606:14)
    at e.load (app://obsidian.md/app.js:1:1182416)
    at DataviewApi.executeJs (plugin:dataview:19607:18)
    at DataviewCompiler.eval (plugin:digitalgarden:10763:23)
    at Generator.next (&lt;anonymous&gt;)
    at eval (plugin:digitalgarden:90:61)</pre>mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```



> [!NOTE]- Relationship Config - Enter name of People Notes
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |



<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Faction</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Your Standing</span></th><th class="table-view-th"><span>Benefits</span></th><th class="table-view-th"><span>Primary Contact</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>