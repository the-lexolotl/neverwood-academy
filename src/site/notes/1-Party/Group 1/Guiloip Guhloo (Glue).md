---
{"aliases":["Cameron","Glue"],"tags":["Category/Player"],"Player":"Cameron","Role":"Player","level":2,"hp":11,"max_hp":11,"ac":12,"modifier":1,"pasperc":13,"Status":"Active","PlayerKnownLanguages":["Common","Common Sign Language","Druidic","Infernal"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Triton","char_class":"Druid","char_gender":"Male","char_status":"Alive","char_age":"Young Adult","char_items":[],"char_role":"Player","Connected_Quests":["[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 1/Group 1.md|Group 1]]","[[2-World/Groups/Fantastical Horticulture Club.md|Fantastical Horticulture Club]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Cameron.png","char_college":"Witherbloom","dg-publish":true,"dg-path":"Party/Group 1/Guiloip Guhloo (Glue).md","permalink":"/party/group-1/guiloip-guhloo-glue/","dgPassFrontmatter":true,"updated":"2025-09-27T18:08:04.000+01:00"}
---


> [!NOTE|div-m] Player Name:  `Cameron`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![Cameron.png](/img/user/z_Assets/character_art/Players/Cameron.png)
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
    value: 'Triton'
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
state_key: glue_health
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
  dexterity: 13
  constitution: 8
  intelligence: 15
  wisdom: 17
  charisma: 12

proficiencies:
  - intelligence
  - wisdom
```

<br>

```skills
proficiencies:
  - medicine
  - nature
  - slight of hand
  - survival
```


# Traits

### Druidic
*PHB-2024, pg. 80*
You know Druidic and always have Speak with Animals prepared.

You can use Druidic to leave hidden message. You and others who know Druidic automatically spot such a message. Others spot the message’s presence with a successful DC 15 Intelligence (Investigation) check but can’t decipher it without magic.

Leave Druidic Message: (No Action)
[[3-Mechanics/CLI/spells/speak-with-animals-xphb\|Speak with Animals (1st)]]

### Control Air and Water
*MotM, pg. 35*
```consumable
label: ""
state_key: glue_control_air_and_water
uses: 1
reset_on: long-rest
```
You can cast fog cloud with this trait. At 3rd level you can cast gust of wind, and at 5th level you can cast water walk. Once you cast any of these spell, you can’t cast that spell again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level.

### Wild Shape
*PHB-2024, pg. 80*

The power of nature allows you to assume the form of an animal. As a Bonus Action, you shape-shift into a Beast form that you have learned for this feature (see “Known Forms” below). You stay in that form for a number of hours equal to half your Druid level or until you use Wild Shape again, have the Incapacitated condition, or die. You can also leave the form early as a Bonus Action.

**Number of Uses.** 
You can use Wild Shape twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.
You gain additional uses when you reach certain Druid levels, as shown in the Wild Shape column of the Druid Features table.

**Known Forms.**
You know four Beast forms for this feature, chosen from among Beast stat blocks that have a maximum Challenge Rating of 1/4 and that lack a Fly Speed. Whenever you finish a Long Rest, you can replace one of your known forms with another eligible form.

When you reach certain Druid levels, your number of known forms and the maximum Challenge Rating for those forms increases, as shown in the Beast Shapes table. In addition, starting at level 8, you can adopt a form that has a Fly Speed.

When choosing known forms, you may look in the Monster Manual or elsewhere for eligible Beasts if the Dungeon Master permits you to do so.
Wild Shape: 1 Bonus Action
Uses:2/Long Rest
```consumable
label: "Wild Shape/Long Rest"
state_key: glue_wild_shape
uses: 2
reset_on: long-rest
```

### Wild Companion
*PHB-2024, pg. 81*
As a Magic action, you can expend a spell slot or a use of Wild Shape to cast Find Familiar without Material components. When you cast the spell in this way, the familiar is Fey and disappears when you finish a Long Rest.

### Neverwood Initiate - Witherbloom
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Wisdom.

[[3-Mechanics/CLI/spells/druidcraft-xphb\|Druidcraft]] (Cantrip)
[[3-Mechanics/CLI/spells/spare-the-dying-xphb\|Spare the Dying]] (Cantrip)
[[3-Mechanics/CLI/spells/ice-knife-xphb\|Ice Knife]] (1st/Long Rest)
```consumable
label: "Ice Knife(1st)/Long Rest"
state_key: glue_ice_knife
uses: 1
reset_on: long-rest
```

# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: glue_spells_1
    reset_on: long-rest
    uses: 3
```

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Neverwood Initiate - Witherbloom
Spare the Dying (Cantrip)
Druidcraft (Cantrip)
```consumable
label: "Ice Knife (1st)"
state_key: glue_ice_knife
uses: 1
reset_on: long-rest
```
### Control Air and Water
```consumable
label: "Fog Cloud"
state_key: glue_control_air_and_water
uses: 1
reset_on: long-rest
```
### Wild Shape
```consumable
label: "Wild Shape/Long Rest"
state_key: glue_wild_shape
uses: 2
reset_on: long-rest
```

> [!NOTE]- Prepared
> Piss Yourself(Cantrip)
  Shillelagh(Cantrip)
  Charm Person(1st)
  Cure Wounds(1st)
  Ice Knife(1st)
  Thunderwave(1st)

> [!NOTE]+ Known
> ** Cantrips **
> Control Flames(Cantrip)
  Create Bonfire(Cantrip)
  Druidcraft(Cantrip)
  Elementalism(Cantrip)
  Frostbite(Cantrip)
  Guidance(Cantrip)
  Gust(Cantrip)
  Infestation(Cantrip)
  Magic Stone(Cantrip)
  Mending(Cantrip)
  Message(Cantrip)
  Mold Earth(Cantrip)
  Piss Yourself(Cantrip)
  Poison Spray(Cantrip)
  Primal Savagery(Cantrip)
  Produce Flame(Cantrip)
  Resistance(Cantrip)
  Shape Water(Cantrip)
  Shillelagh(Cantrip)
  Spare the Dying(Cantrip)
  Starry Wisp(Cantrip)
  Thorn Whip(Cantrip)
  Thunderclap(Cantrip)
   <br>
  **First Level Spells**
  Absorb Elements(1st)
  Animal Friendship(1st)
  Beast Bond(1st)
  Charm Person(1st)
  Create or Destroy Water(1st)
  Cure Wounds(1st)
  Detect Magic(1st)
  Detect Poison and Disease(1st)
  Earth Tremor(1st)
  Entangle(1st)
  Faerie Fire(1st)
  Fog Cloud(1st)
  Goodberry(1st)
  Healing Word(1st)
  Ice Knife(1st)
  Jump(1st)
  Longstrider(1st)
  Protection from Evil and Good(1st)
  Purify Food and Drink(1st)
  Snare(1st)
  Speak with Animals(1st)
  Thunderwave(1st)


# Inventory

The following items belong to Guiloip Guhloo (Glue).

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
 

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