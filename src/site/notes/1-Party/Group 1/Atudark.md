---
{"aliases":["Jacob"],"tags":["Category/Player"],"Player":"Jacob","Role":"Player","level":2,"hp":13,"max_hp":13,"ac":9,"modifier":-1,"pasperc":11,"Status":"Active","PlayerKnownLanguages":["Common","Draconic","Sylvan"],"faction_standing":{"Faction Name 1":1,"Faction Name 3":3},"char_race":"Yuan-Ti","char_class":"Warlock","char_gender":"Male","char_status":"Alive","char_age":"Young Adult","char_role":"Player","char_items":[],"Connected_Quests":["[[2-World/Quests/Whos goo.md|Whos goo]]","[[2-World/Quests/The Missing Professor.md|The Missing Professor]]","[[2-World/Quests/Heist the Records Room.md|Heist the Records Room]]","[[2-World/Quests/Miaukier Must Die!.md|Miaukier Must Die!]]"],"Connected_Groups":["[[2-World/Groups/Cohort of 1508.md|Cohort of 1508]]","[[1-Party/Group 1/Group 1.md|Group 1]]","[[2-World/Groups/Dead Language Society.md|Dead Language Society]]"],"parents":["Father","Mother"],"partner":["Partner"],"children":["Child"],"enemies":["Enemy"],"allies":["Friend"],"siblings":["Brother","Sister"],"obsidianUIMode":"preview","MyContainer":null,"MyCategory":null,"image":"Jacob.png","char_college":"Witherbloom","dg-publish":true,"dg-path":"Party/Group 1/Atudark.md","permalink":"/party/group-1/atudark/","dgPassFrontmatter":true,"updated":"2025-09-28T21:32:34.000+01:00"}
---


# General

# Description

This is the persons description. 

# Configure


| Stat     | Value       |
| -------- | ----------- |
| Status   | Alive       |
| Race     | Yuan-Ti     |
| Class    | Warlock     |
| Level    | 2           |
| Gender   | Male        |
| Age      | Young Adult |
| HP       | 13          |
| Max HP   | 13          |
| AC       | 9           |
| Modifier | -1          |
| College  | Witherbloom |

# GM Notes

Make notes of what you need to track in the town here. 

# Skills

![Pasted image 20250928212558.png](/img/user/z_Assets/Pasted%20image%2020250928212558.png)
# Traits

### Serpentine Spellcasting
*MotM, pg. 36*
You know the [[3-Mechanics/CLI/spells/poison-spray-xphb\|Poison Spray]] cantrip. You can cast [[3-Mechanics/CLI/spells/animal-friendship-xphb\|Animal Friendship]] an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast [[3-Mechanics/CLI/spells/suggestion-xphb\|Suggestion]] with this trait. Once you cast it, you can’t do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.

Intelligence is your spellcasting ability for these spells when you cast them with this trait.

[[3-Mechanics/CLI/spells/poison-spray-xphb\|Poison Spray]]
[[3-Mechanics/CLI/spells/animal-friendship-xphb\|Animal Friendship]] 

### Neverwood Initiate - Witherbloom
*Homebrew*

You have studied some magical theory and have learned a few spells associated with the Neverwood Academy.
Your spellcasting ability for this feat’s spells is Intelligence.

[[3-Mechanics/CLI/spells/chill-touch-xphb\|Chill Touch]] (Cantrip)
[[3-Mechanics/CLI/spells/spare-the-dying-xphb\|Spare the Dying]] (Cantrip)
[[3-Mechanics/CLI/spells/disguise-self-xphb\|Disguise Self]] (1st/Long Rest)
```consumable
label: "Disguise Self/Long Rest"
state_key: atudark_disguise_self
uses: 1
reset_on: long-rest
```

### Eldritch Invocations
*PHB-2024, pg. 153*
You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. If an invocation has a prerequisite, you must meet it to learn that invocation.
**Armor of Shadows**
You can cast [[3-Mechanics/CLI/spells/mage-armor-xphb\|Mage Armor]] on yourself without expending a spell slot.

# Spell Book

## Spell Slots
**Cantrips**
[[3-Mechanics/CLI/spells/chill-touch-xphb\|Chill Touch]]
[[3-Mechanics/CLI/spells/poison-spray-xphb\|Poison Spray]]
[[3-Mechanics/CLI/spells/spare-the-dying-xphb\|Spare the Dying]]
[[3-Mechanics/CLI/spells/toll-the-dead-xphb\|Toll the Dead]]

```consumable
items:
  - label: "Level 1"
    state_key: atudark_spells_1
    reset_on: long-rest
    uses: 2

```
[[3-Mechanics/CLI/spells/animal-friendship-xphb\|Animal Friendship]] *at will*
```spell-components
casting_time: 1 action
range: 30ft
components: V, S, M (a morsel of food)
duration: 24 hours
```
[[3-Mechanics/CLI/spells/cause-fear-xge\|Cause Fear]] 
```spell-components
casting_time: 1 action
range: 30ft
components: V
duration: Concentration, up to 1 minute
```
[[3-Mechanics/CLI/spells/hex-xphb\|Hex]]
```spell-components
casting_time: 1 bonus action
range: 90ft
components: V, S, M (the petrified eye of a newt)
duration: Concentration, up to 1 hour
```

### Neverwood Initiate - Witherbloom
```consumable
items:
  - label: "Disguise Self (1st)"
    state_key: din_disguise_self
    uses: 1
```

> [!NOTE]- Prepared
> Poison Spray(Cantrip)
  Toll the Dead(Cantrip)
  Cause Fear(1st)
  Hex(1st)

> [!NOTE]+ Known
> ** Cantrips **
> Blade Ward(Cantrip)
  Booming Blade(Cantrip)
  Chill Touch(Cantrip)
  Create Bonfire(Cantrip)
  Eldritch Blast(Cantrip)
  Friends(Cantrip)
  Frostbite(Cantrip)
  Green-Flame Blade(Cantrip)
  Infestation(Cantrip)
  Lightning Lure(Cantrip)
  Mage Hand(Cantrip)
  Magic Stone(Cantrip)
  Mind Sliver(Cantrip)
  Minor Illusion(Cantrip)
  Poison Spray(Cantrip)
  Prestidigitation(Cantrip)
  Sword Burst(Cantrip)
  Thunderclap(Cantrip)
  Toll the Dead(Cantrip)
  True Strike(Cantrip) 
  <br>
  ** Level 1 Spells **
  Armor of Agathys(1st)
  Arms of Hadar(1st)
  Bane(1st)
  Cause Fear(1st)
  Charm Person(1st)
  Comprehend Languages(1st)
  Detect Magic(1st)
  Expeditious Retreat(1st)
  Hellish Rebuke(1st)
  Hex(1st)
  Illusory Script(1st)
  Protection from Evil and Good(1st)
  Speak with Animals(1st)
  Tasha's Hideous Laughter(1st)
  Unseen Servant(1st)
  Witch Bolt(1st)

# Inventory

# Connections

**Quest:** [[2-World/Quests/Whos goo\|Whos goo]], [[2-World/Quests/The Missing Professor\|The Missing Professor]], [[2-World/Quests/Heist the Records Room\|Heist the Records Room]], [[2-World/Quests/Miaukier Must Die!\|Miaukier Must Die!]]

**Groups:** [[2-World/Groups/Cohort of 1508\|Cohort of 1508]], [[1-Party/Group 1/Group 1\|Group 1]], [[2-World/Groups/Dead Language Society\|Dead Language Society]]

# Relationships
::hidden
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
:::