---
{"aliases":["Catarina"],"tags":["Category/Player"],"Player":"Catarina","Role":"Player","level":2,"hp":11,"max_hp":11,"ac":11,"modifier":1,"pasperc":13,"Status":"Active","PlayerKnownLanguages":["Aarakocra","Common","Common Sign Language","Deep Speech","Undercommon"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Aarakocra","char_class":"Artificer","char_gender":"Female","char_status":"Alive","char_age":"Young Adult","char_items":[],"Connected_Quests":["[[2-World/Quests/The Missing Professor.md|The Missing Professor]]","[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]","[[2-World/Quests/Miaukier Must Die!.md|Miaukier Must Die!]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 2/Group 2.md|Group 2]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Cyinth.png","char_role":"Player","char_college":"Lorehold","dg-publish":true,"dg-path":"Party/Group 2/Cyinth Agora.md","permalink":"/party/group-2/cyinth-agora/","dgPassFrontmatter":true,"updated":"2025-09-27T18:28:46.000+01:00"}
---


> [!NOTE|div-m] Player Name:  `Catarina`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![Cyinth.png](/img/user/z_Assets/character_art/Players/Cyinth.png)
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
    value: 'Aarakocra'
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
state_key: cyinth_health
health: '{{ frontmatter.hp }}'
reset_on: long-rest
hitdice:
  dice: d8
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
  strength: 10
  dexterity: 12
  constitution: 8
  intelligence: 17
  wisdom: 15
  charisma: 13

proficiencies:
  - intelligence
  - constitution
```

<br>

```skills
proficiencies:
  - arcana
  - history
  - perception
  - religion
```


# Traits

### Magical Tinkering
*TCoE, pg. 11*
Imbue a Tiny nonmagical object with a magical property of your choice: 5ft. radius light, up to 6 second long recorded message, emits odour or nonverbal sound, static visual effect including up to 25 words of text. You can affect a maximum of 3 objects at a time.

Magical Tinkering: 1 Action
Uses: 
```consumable
label: ""
state_key: cyinth_magical_tinkering
uses: 3
reset_on: special
```

### Neverwood Initiate - Lorehold
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Intelligence.

[[3-Mechanics/CLI/spells/light-xphb\|Light]] (Cantrip)
[[3-Mechanics/CLI/spells/thaumaturgy-xphb\|Thaumaturgy]] (Cantrip)
[[3-Mechanics/CLI/spells/guiding-bolt-xphb\|Guiding Bolt]] (1st/Long Rest)
```consumable
label: "Guiding Bolt/Long Rest"
state_key: cyinth_guiding_bolt
uses: 1
reset_on: long-rest
```

### Infuse Item
*TCoE, pg. 12*
Whenever you finish a long rest, you can touch up to 2 nonmagical objects, imbuing each of them with one of your artificer infusions, turning it into a magic item. You can attune yourself to the item the instant you infuse it, or you can forgo attunement so that someone else can attune to the item.
Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after 3 days. The infusion also vanishes if you give up your knowledge of the infusion or you exceed your maximum number of infusions.

Infuse Item: (No Action)
Uses: 2/Special
```consumable
label: ""
state_key: cyinth_infuse_item
uses: 2
reset_on: special
```

### Artificer Infusions
*TCoE, pg. 12*
You have invented numerous magical infusions that rapidly create magic items. Each infusion tells you the type of item that can receive it and if the resulting magic item requires attunement.

Some infusions specify a minimum artificer level, and unless an infusion’s description says otherwise, you can’t learn it more than once.

# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: cyinth_spells_1
    reset_on: long-rest
    uses: 2
```

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Neverwood Initiate - Lorehold

```consumable
label: "Guiding Bolt/Long Rest"
state_key: cyinth_guiding_bolt
uses: 1
reset_on: long-rest
```

> [!NOTE]- Prepared
> Fire Bolt(Cantrip)
  Thunderclap(Cantrip)
  Cure Wounds(1st)
  False Life(1st)
  Tasha's Caustic Brew(1st)

> [!NOTE]+ Known
> ** Cantrips **
> Acid Splash(Cantrip)
  Booming Blade(Cantrip)
  Create Bonfire(Cantrip)
  Dancing Lights(Cantrip)
  Fire Bolt(Cantrip)
  Frostbite(Cantrip)
  Green-Flame Blade(Cantrip)
  Guidance(Cantrip)
  Light(Cantrip)
  Lightning Lure(Cantrip)
  Mage Hand(Cantrip)
  Magic Stone(Cantrip)
  Mending(Cantrip)
  Message(Cantrip)
  Poison Spray(Cantrip)
  Prestidigitation(Cantrip)
  Ray of Frost(Cantrip)
  Resistance(Cantrip)
  Shocking Grasp(Cantrip)
  Spare the Dying(Cantrip)
  Sword Burst(Cantrip)
  Thorn Whip(Cantrip)
  Thunderclap(Cantrip)
  <br>
  **1st Level Spells**
  Absorb Elements(1st)
  Alarm(1st)
  Catapult(1st)
  Cure Wounds(1st)
  Detect Magic(1st)
  Disguise Self(1st)
  Expeditious Retreat(1st)
  Faerie Fire(1st)
  False Life(1st)
  Feather Fall(1st)
  Grease(1st)
  Identify(1st)
  Jump(1st)
  Longstrider(1st)
  Purify Food and Drink(1st)
  Sanctuary(1st)
  Snare(1st)
  Tasha's Caustic Brew(1st)

# Inventory

The following items belong to Cyinth Agora.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
 
[[3-Mechanics/CLI/items/driftglobe-xdmg\|Driftglobe]] - Wondrous item
[[3-Mechanics/CLI/items/alchemists-supplies-xphb\|Alchemist's Supplies]] - Gear
Crossbow [[3-Mechanics/CLI/items/bolts-20-xphb\|Bolts (20)]] - Ammunition
[[3-Mechanics/CLI/items/light-crossbow-xphb\|Light Crossbow]]
Cuddly Neverwood Mascot*
Cyinth's Dorm Room Key
[[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
[[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
Hammer
[[3-Mechanics/CLI/items/hooded-lantern-xphb\|Hooded Lantern]]
Ink (1 ounce bottle)
Ink Pen
Lantern, Hooded
Neverwood - First Year Uniform
[[3-Mechanics/CLI/items/strixhaven-pennant-scc\|Neverwood Pennant]]* -Wondrous item
[[3-Mechanics/CLI/items/potion-of-healing-xdmg\|Potion of Healing]] - Potion
[[3-Mechanics/CLI/items/rope-xphb\|Rope]], Hempen (50 feet)
Spell Scroll: [[3-Mechanics/CLI/spells/identify-xphb\|Identify]]
Syllabus Pages - Book
The Joy of Extradimensional Spaces - Book
The head of a broken statue that houses the consciousness of a snarky sage - Trinket
Shiny rocks
[[3-Mechanics/CLI/items/thieves-tools-xphb\|Thieves' Tools]]
[[3-Mechanics/CLI/items/tinderbox-xphb\|Tinderbox]]
[[3-Mechanics/CLI/items/tinkers-tools-xphb\|Tinker's Tools]]
Whalebucks Free Meal Ticket
### Backpack (6)
[[3-Mechanics/CLI/items/crowbar-xphb\|Crowbar]]
Hammer
Piton
[[3-Mechanics/CLI/items/tinderbox-xphb\|Tinderbox]]
[[3-Mechanics/CLI/items/torch-xphb\|Torch]]
[[3-Mechanics/CLI/items/waterskin-xphb\|Waterskin]]


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