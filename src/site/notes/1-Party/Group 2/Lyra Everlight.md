---
{"aliases":["Megan"],"tags":["Category/Player"],"Player":"Megan","Role":"Player","level":2,"hp":13,"max_hp":13,"ac":11,"modifier":1,"pasperc":12,"Status":"Active","PlayerKnownLanguages":["Celestial","Common","Elvish","Primordial"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Variant Aasimar","char_class":"Cleric","char_gender":"Female","char_status":"Alive","char_age":"Young Adult","char_items":[],"Connected_Quests":["[[2-World/Quests/The Missing Professor.md|The Missing Professor]]","[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]","[[2-World/Quests/Miaukier Must Die!.md|Miaukier Must Die!]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 2/Group 2.md|Group 2]]","[[2-World/Groups/Play Actors Drama Guild.md|Play Actors Drama Guild]]","[[2-World/Groups/Mage Tower Cheer Squad.md|Mage Tower Cheer Squad]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"megan.png","char_role":"Player","char_college":"Silverquill","dg-publish":true,"dg-path":"Party/Group 2/Lyra Everlight.md","permalink":"/party/group-2/lyra-everlight/","dgPassFrontmatter":true,"updated":"2025-09-27T18:29:18.000+01:00"}
---


> [!NOTE|div-m] Player Name:  `Megan`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![megan.png](/img/user/z_Assets/character_art/Players/megan.png)
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
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
> ~~~meta-bind
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
    value: 'Variant Aasimar'
  - label: Level
    value: '{{frontmatter.level}}'
  - label: Initiative
    value: '{{frontmatter.modifier}}'
```
<br>

```badges
items:
  - label: Spell Save
    value: 12
  - label: AC
    value: '{{frontmatter.ac}}'
  - label: AC (Mage Armor)
    value: 14
```

<br>

```healthpoints
state_key: lyra_health
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
  strength: 8
  dexterity: 13
  constitution: 10
  intelligence: 12
  wisdom: 15
  charisma: 17

proficiencies:
  - wisdom
  - charisma
```

<br>

```skills
proficiencies:
  - insight
  - intimidation
  - medicine
  - persuasion
```


# Traits

### Channel Divinity
*PHB-2024, pg. 70*
You can channel energy directly from the Outer Planes to fuel magical effects. When you use this class’s Channel Divinity, you can choose which effect to create. You can use this class’s Channel Divinity 2 times per Long Rest, but can regain one expended use after finishing a Short Rest.

If your Channel Divinity requires a saving throw, the DC equals your Cleric spell save DC (DC 12).

Channel Divinity: 1 Action
Uses: 2/Long Rest
```consumable
label: ""
state_key: lyra_channel_divinity
uses: 2
reset_on: long-rest
```
Channel Divinity: Divine Spark: 1 Action
Channel Divinity: Turn Undead: 1 Action


### Healing Hands
*VGtM*

Once per long rest as an action, touch a creature and restore 1 hit points.

Healing Hands: 1 Action (1/ Long Rest)
```consumable
label: ""
state_key: lyra_healing_hands
uses: 1
reset_on: long-rest
```

### Celestial Legacy
*DMG*

You know the light cantrip. Once you reach 3rd level, you can cast the lesser restoration spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the daylight spell once with this trait as a 3rd-level spell, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.

[[3-Mechanics/CLI/spells/light-xphb\|Light]] (Cantrip)

### Trust Fund Kid
*Homebrew*

You've never really had to work for gold like everyone else—why start now? You have connections, and more importantly, a family that still pays your way.

**Benefits:**
-  Once per week, you can attempt to contact one of your wealthy relatives to ask for a financial allowance. Roll 1d100 and gain that amount of gold pieces.
-  This call takes the form of a Sending spell (requiring no spell slot or components), a letter via magical courier, or a nostalgic family heirloom that functions like a sending stone—your choice, flavoured to fit your background.
-  After each use, roll a DC 10 Charisma (Deception or Persuasion) check. On a failure, your relative is annoyed by your request. You still receive the gold, but next week’s DC increases by +2. On a success, the DC resets to 10.
-  If you fail this check three weeks in a row, your relative cuts you off—no allowance for the next 1d4 weeks. After this period, the DC resets to 10.

### Neverwood Initiate - Silverquill
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Charisma.

[[3-Mechanics/CLI/spells/sacred-flame-xphb\|Sacred Flame]] (Cantrip)
[[3-Mechanics/CLI/spells/thaumaturgy-xphb\|Thaumaturgy]] (Cantrip)
[[3-Mechanics/CLI/spells/detect-poison-and-disease-xphb\|Detect Poison and Disease]] (1st/Long Rest)
```consumable
label: "Detect Poison and Disease/Long Rest"
state_key: lyra_detect_poison_and_disease
uses: 1
reset_on: long-rest
```

# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: lyra_spells_1
    reset_on: long-rest
    uses: 3
```

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Channel Divinity
Divine Spark: 1 Action
Turn Undead: 1 Action
```consumable
label: ""
state_key: lyra_channel_divinity
uses: 2
reset_on: long-rest
```
### Healing Hands
```consumable
label: "Healing Hands/Long Rest"
state_key: lyra_healing_hands
uses: 1
reset_on: long-rest
```
### Neverwood Initiate - Silverquill
```consumable
label: "Detect Poison and Disease/Long Rest"
state_key: lyra_detect_poison_and_disease
uses: 1
reset_on: long-rest
```



> [!NOTE]- Prepared
> Spare the Dying(Cantrip)
Toll the Dead(Cantrip)
Word of Radiance(Cantrip)
Cure Wounds(1st)
Guiding Bolt(1st)
Healing Word(1st)
Inflict Wounds(1st)

> [!NOTE]+ Known
> **Cantrips**
> Guidance(Cantrip)
Light(Cantrip)
Mending(Cantrip)
Resistance(Cantrip)
Sacred Flame(Cantrip)
Spare the Dying(Cantrip)
Thaumaturgy(Cantrip)
Toll the Dead(Cantrip)
Word of Radiance(Cantrip)
  <br>
  **1st Level Spells**
Bane(1st)
Bless(1st)
Ceremony(1st)
Command(1st)
Create or Destroy Water(1st)
Cure Wounds(1st)
Detect Evil and Good(1st)
Detect Magic(1st)
Detect Poison and Disease(1st)
Guiding Bolt(1st)
Healing Word(1st)
Inflict Wounds(1st)
Protection from Evil and Good(1st)
Purify Food and Drink(1st)
Sanctuary(1st)
Shield of Faith(1st)

# Inventory

The following items belong to Lyra Everlight.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
 

[[3-Mechanics/CLI/items/driftglobe-xdmg\|Driftglobe]] - Wondrous item
[[3-Mechanics/CLI/items/blanket-xphb\|Blanket]]
[[3-Mechanics/CLI/items/chain-shirt-xphb\|Chain Shirt]]
[[3-Mechanics/CLI/items/holy-symbol-xphb\|Holy Symbol]]
[[3-Mechanics/CLI/items/ink-xphb\|Ink]] (1 ounce bottle)
[[3-Mechanics/CLI/items/ink-pen-xphb\|Ink Pen]]
Lyra's Dorm Room Key
[[3-Mechanics/CLI/items/mace-xphb\|Mace]]
Murgaxor, Daniel - Student Records
Murgaxor, Grenshel - Student Records
Murgaxor, Veyra - Student Records
Neverwood - First Year Uniform
[[3-Mechanics/CLI/items/shield-xphb\|Shield]]
Two-Person [[3-Mechanics/CLI/items/tent-xphb\|Tent]]
[[3-Mechanics/CLI/items/weavers-tools-xphb\|Weaver's Tools]]
Whalebucks Free Meal Ticket
Book of Poetry
### Backpack (5)
[[3-Mechanics/CLI/items/blanket-xphb\|Blanket]]
[[3-Mechanics/CLI/items/holy-water-xphb\|Holy Water]]
[[3-Mechanics/CLI/items/lamp-xphb\|Lamp]]
[[3-Mechanics/CLI/items/robe-xphb\|Robe]]
[[3-Mechanics/CLI/items/tinderbox-xphb\|Tinderbox]]

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