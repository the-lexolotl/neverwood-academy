---
{"aliases":["Rain"],"tags":["Category/Player"],"Player":"Rain","Role":"Player","level":2,"hp":10,"max_hp":10,"ac":11,"modifier":1,"pasperc":11,"Status":"Active","PlayerKnownLanguages":["Common","Draconic","Giant","Infernal"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Tiefling","char_class":"Sorcerer","char_gender":"Female","char_status":"Alive","char_age":"Young Adult","char_items":[],"Connected_Quests":["[[2-World/Quests/Whos goo.md|Whos goo]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 2/Group 2.md|Group 2]]","[[2-World/Groups/Distinguished Society of Fine Artists.md|Distinguished Society of Fine Artists]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Rain.png","char_role":"Player","char_college":"Prismari","dg-publish":true,"dg-path":"Party/Group 2/H'er.md","permalink":"/party/group-2/h-er/","dgPassFrontmatter":true,"updated":"2025-09-27T18:28:58.000+01:00"}
---


> [!NOTE|div-m] Player Name:  `Rain`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![Rain.png](/img/user/z_Assets/character_art/Players/Rain.png)
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
    value: 'Teifling'
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
state_key: her_health
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
  dexterity: 12
  constitution: 11
  intelligence: 14
  wisdom: 13
  charisma: 17

proficiencies:
  - constitution
  - charisma
```

<br>

```skills
proficiencies:
  - acrobatics
  - deception
  - performance
  - persuasion
```


# Traits

### Innate Sorcery
*PHB-2024, pg. 140*
Twice per Long Rest, you can take a Bonus Action to unleash the simmering magic within you for 1 minute.

Activate this effect by clicking on this feature and selecting Activate Innate Sorcery. Deselect it to stop this effect.

Activate Innate Sorcery
During your Innate Sorcery, you gain the following benefits:
• The spell save DC of your Sorcerer spells increases by 1.
• You have Advantage on the attack rolls of Sorcerer spells you cast.

Innate Sorcery: 1 Bonus Action
Uses: 2/Long Rest
```consumable
label: ""
state_key: her_innate_sorcery
uses: 2
reset_on: long-rest
```

### Font of Magic
*PHB-2024, pg. 140*
You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.

You have 2 Sorcery Points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer Features table. You can’t have more Sorcery Points than the number shown in the table for your level. You regain all expended Sorcery Points when you finish a Long Rest.

You can use your Sorcery Points to fuel the options below, along with other features, such as Metamagic, that use those points.

**Converting Spell Slots to Sorcery Points**. You can expend a spell slot to gain a number of Sorcery Points equal to the slot’s level (no action required).

**Creating Spell Slots**. As a Bonus Action, you can transform unexpended Sorcery Points into one spell slot. The Creating Spell Slots table shows the cost of creating a spell slot of a given level, and it lists the minimum Sorcerer level you must be to create a slot. You can create a spell slot no higher than level 5.

Any spell slot you create with this feature vanishes when you finish a Long Rest.

```consumable
label: "Sorcery Points"
state_key: her_sorcery_points
uses: 2
reset_on: long-rest
```

### Metamagic
*PHB-2024, pg. 141*
You can alter spells to suit your needs; you know 2 Metamagic options which can be used to temporarily modify spells you cast.

#### Metamagic Options - Distant Spell

When you cast a spell with a range of at least 5 ft., you can spend 1 Sorcery Point to double its range. Or when you cast a spell that has a range of Touch, you can spend 1 Sorcery Point to make the spell’s range 30 ft.

#### Metamagic Options - Subtle Spell
When you cast a spell, you can spend 1 Sorcery Point to cast it without any Verbal, Somatic, or Material components, except Material components that are consumed by the spell or that have a cost specified in the spell.

Metamagic: Subtle Spell: Special
### Fiendish Legacy
*PHB-2024, pg. 197*

You have resistance to Necrotic damage and you gain the spells outlined in the Fiendish Legacies table.

**Fiendish Legacy Spells**
[[3-Mechanics/CLI/spells/chill-touch-xphb\|Chill Touch]](Cantrip)

### Otherworldly Presence
*PHB-2024, pg. 197*

You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses Charisma.

[[3-Mechanics/CLI/spells/thaumaturgy-xphb\|Thaumaturgy]](Cantrip)

### Neverwood Initiate - Prismari
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Charisma.

[[3-Mechanics/CLI/spells/prestidigitation-xphb\|Prestidigitation]] (Cantrip)
[[3-Mechanics/CLI/spells/spare-the-dying-xphb\|Spare the Dying]] (Cantrip)
[[3-Mechanics/CLI/spells/color-spray-xphb\|Colour Spray]] (1st/Long Rest)
```consumable
label: "Colour Spray/Long Rest"
state_key: her_colour_spray
uses: 1
reset_on: long-rest
```


# Spell Book

## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: her_spells_1
    reset_on: long-rest
    uses: 3
```
```consumable
label: "Sorcery Points"
state_key: her_sorcery_points
uses: 2
reset_on: long-rest
```

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Innate Sorcery

```consumable
items:
  - label: "Innate Sorcery"
    state_key: her_innate_sorcery
    uses: 2
```

> [!NOTE]- Prepared
> Acid Splash(Cantrip)
   Light(Cantrip)
  Mending(Cantrip)
  Sorcerous Burst(Cantrip)
  Chromatic Orb(1st)
  Magic Missile(1st)

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
Sorcerous Burst(Cantrip)
Sword Burst(Cantrip)
Thunderclap(Cantrip)
True Strike(Cantrip)
  <br>
  **1st Level Spells**
Absorb Elements(1st) 
Burning Hands(1st) 
Catapult(1st)
Chaos Bolt(1st)
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
Fog Cloud(1st)
Grease(1st)
Ice Knife(1st)
Jump(1st)
Mage Armor(1st)
Magic Missile(1st)
Ray of Sickness(1st)
Shield(1st)
Silent Image(1st)
Silvery Barbs(1st)
  Sleep(1st)
  Tasha's Caustic Brew(1st)
  Thunderwave(1st)
  Witch Bolt(1st)

# Inventory

The following items belong to H'er.

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