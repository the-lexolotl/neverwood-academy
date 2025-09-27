---
{"aliases":["Kristy"],"tags":["Category/Player"],"Player":"Kristy","Role":"Player","level":2,"hp":13,"max_hp":13,"ac":15,"modifier":2,"pasperc":13,"Status":"Active","PlayerKnownLanguages":["Common","Common Sign Language","Draconic","Primordial"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Dragonborn","char_class":"Monk","char_gender":"Male","char_status":"Alive","char_age":"Young Adult","char_items":[],"Connected_Quests":["[[2-World/Quests/The Missing Professor.md|The Missing Professor]]","[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]","[[2-World/Quests/Miaukier Must Die!.md|Miaukier Must Die!]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 1/Group 1.md|Group 1]]","[[2-World/Groups/Dragonsguard Historical Society.md|Dragonsguard Historical Society]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Kristy.png","char_role":"Player","char_college":"Quandrix","dg-publish":true,"permalink":"/1-party/group-1/vigilius-palamas/","dgPassFrontmatter":true}
---


> [!NOTE|div-m] Player Name:  `Kristy`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![Kristy.png](/img/user/z_Assets/character_art/Players/Kristy.png)
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
    value: 'Dragonborn'
  - label: Level
    value: '{{frontmatter.level}}'
  - label: Initiative
    value: '{{frontmatter.modifier}}'
```
<br>

```badges
items:
  - label: Spell Save
    value: 
  - label: AC
    value: '{{frontmatter.ac}}'
  - label: AC (Mage Armor)
    value: 15
```

<br>

```healthpoints
state_key: vigilius_health
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
  dexterity: 10
  constitution: 10
  intelligence: 10
  wisdom: 10
  charisma: 10

proficiencies:
  - intelligence
  - wisdom
```

<br>

```skills
proficiencies:
  - arcana
  - history
  - insight
  - investigation
```


# Traits

### Martial Arts
*PHB-2024, pg. 101*

You gain the following benefits when unarmed or wielding only Monk weapons, provided you aren’t wearing armor or wielding a Shield.

-  You can make an Unarmed Strike as a Bonus Action.
-  You can roll 1d6 in place of the normal damage from your Unarmed Strikes or Monk weapons.
-  You can use Dex. instead of Str. for the attack and damage rolls of your Unarmed Strikes and Monk Weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use Dex. instead of Str. to determine the save DC.

[[3-Mechanics/CLI/variant-rules/unarmed-strike-xphb\|Unarmed Strike]]: 1 Bonus Action

### Breath Weapon
*PHB-2024, pg. 187*

When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy. You can use your Breath Weapon 2 times per Long Rest.

#### Breath Weapon (Fire)
When you take the Attack action on your turn, you can replace one attack with a breath weapon that is a 15-ft. Cone or a 30-ft. Line that’s 5 ft. wide (choose the shape each time). Each creature must make a DC 10 Dex. saving throw taking 1d10 Fire damage on a failed save or half as much damage on a success.

Breath Weapon (Fire): 1 Action
Uses: 2/Long Rest
```consumable
label: ""
state_key: vigilius_breath_weapon 
uses: 2
reset_on: long-rest
```

### Step of the Wind.
*PHB-2024, pg. 101*
 You can take the Dash action as a Bonus Action or expend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn.

Features that use Focus Points may require your target to make a saving throw. The save DC equals 8 + Wis. modifier + Prof. Bonus.

Focus Points: (No Action)
Uses: 2/Short Rest
Flurry of Blows: 1 Bonus Action
Patient Defence: 1 Bonus Action
Step of the Wind: 1 Bonus Action
```consumable
label: ""
state_key: vigilius_step_of_the_wind 
uses: 2
reset_on: short-rest
```

### Uncanny Metabolism
*PHB-2024, pg. 102*
Once per Long Rest, when you roll Initiative you can regain all expended Focus Points, and regain 1d6+2 HP.

Uncanny Metabolism: (No Action) 1/Long Rest
```consumable
label: ""
state_key: vigilius_uncanny_metabolism 
uses: 1
reset_on: long-rest
```

### Neverwood Initiate - Quandrix
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Intelligence.

[[3-Mechanics/CLI/spells/guidance-xphb\|Guidance]] (Cantrip)
[[3-Mechanics/CLI/spells/mage-hand-xphb\|Mage Hand]] (Cantrip)
[[3-Mechanics/CLI/spells/shield-xphb\|Shield]] (1st/Long Rest)
```consumable
label: "Shield/Long Rest"
state_key: vigilius_shield
uses: 1
reset_on: long-rest
```


# Spell Book

```spell-components
casting_time: 1 bonus action
range: Self
duration: Concentration, up to 1 minute
```

### Breath Weapon
```consumable
label: "Breath Weapon (Fire)/Long Rest"
state_key: vigilius_breath_weapon 
uses: 2
reset_on: long-rest
```

### Step of the Wind.
Flurry of Blows: 1 Bonus Action
Patient Defence: 1 Bonus Action
Step of the Wind: 1 Bonus Action
```consumable
label: "Focus Points/Short Rest"
state_key: vigilius_step_of_the_wind 
uses: 2
reset_on: short-rest
```

### Uncanny Metabolism
```consumable
label: "Uncanny Metabolism/Long Rest"
state_key: vigilius_uncanny_metabolism 
uses: 1
reset_on: long-rest
```

### Neverwood Initiate - Quandrix
```consumable
label: "Shield/Long Rest"
state_key: vigilius_shield
uses: 1
reset_on: long-rest
```

> [!NOTE]- Prepared
> List Spells Here

> [!NOTE]+ Known
> List Spells Here

# Inventory

The following items belong to Vigilius Palamas.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
 

- A blue knit hat that looks a bit like a bottle folding in on itself
- Abacus
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/dagger-xphb\|Dagger]]
- [[3-Mechanics/CLI/items/hooded-lantern-xphb\|Hooded Lantern]]
- [[3-Mechanics/CLI/items/horn-xphb\|Horn]]
- [[3-Mechanics/CLI/items/ink-xphb\|Ink]](1 ounce bottle)
- [[3-Mechanics/CLI/items/ink-pen-xphb\|Ink Pen]]
- Neverwood - First Year Uniform
- [[3-Mechanics/CLI/items/strixhaven-pennant-scc\|Neverwood Pennant]]* - Wondrous item
- [[3-Mechanics/CLI/items/potion-of-healing-xdmg\|Potion of Healing]]
- [[3-Mechanics/CLI/items/rope-xphb\|Rope]]
- [[3-Mechanics/CLI/items/spear-xphb\|Spear]]
- Spell Scroll: [[3-Mechanics/CLI/spells/detect-magic-xphb\|Detect Magic]]
- [[3-Mechanics/CLI/items/tinkers-tools-xphb\|Tinker's Tools]]
- Vigilius's Dorm Room Key
- Whalebucks Free Meal Ticket
- 📖 A history of Dragonborn tribes in Tymanther
  Dense cultural history text, probably a scholarly work with lots of dates, lineage, and politics.
  Length: Long (300–400 pages equivalent).
  Reading time: ~10–12 hours to skim, ~20+ hours if read thoroughly for detail.

### Backpack (5)
- [[3-Mechanics/CLI/items/bedroll-xphb\|Bedroll]]
- [[3-Mechanics/CLI/items/oil-xphb\|Oil]]
- [[3-Mechanics/CLI/items/tinderbox-xphb\|Tinderbox]]
- [[3-Mechanics/CLI/items/torch-xphb\|Torch]]
- [[3-Mechanics/CLI/items/waterskin-xphb\|Waterskin]]

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