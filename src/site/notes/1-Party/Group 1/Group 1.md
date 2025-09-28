---
{"tags":["Category/Group"],"MyContainer":"[[Neverwood Academy|Neverwood Academy]]","MyCategory":"Group Cup","image":"group 1.png","obsidianUIMode":"preview","leader":null,"officers":null,"members":null,"initiates":null,"faction":null,"primary_contact":null,"dg-publish":true,"dg-path":"Party/Group 1/Group 1.md","permalink":"/party/group-1/group-1/","dgPassFrontmatter":true,"updated":"2025-09-27T18:08:30.000+01:00"}
---









> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Place)):MyContainer]`

> [!column|no-i no-t]
>> [!note|no-title]
>> ![group 1.png](/img/user/z_Assets/character_art/Players/Group%201.png)
>
>> [!note|div-m] Group 1
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, ⁉️Goals),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!note|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Goals|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 



> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🔗People),
> option(2, 🔗Hierarchy),
> option(3, ⚡Enemies/Allies),
> option(4, 🛠️Services),
> option(5,➕Membership),
> option(6, 🛡️Ranks),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box]
> > >[!div-m|no-title]
> > > ![[#People|no-h clean]]
> > 
> > >[!div-m|no-title]
> > > ![[#Hierarchy|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Enemies/Allies|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Services|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Membership|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Ranks|no-h clean]]



---

# General

**Select Parent:** `INPUT[suggester(optionQuery(#Category/Hub),optionQuery(#Category/Region),optionQuery(#Category/Place)):MyContainer]`
 

**Select Category:** `INPUT[template-group-type][:MyCategory]`
 


# Goals

> [!NOTE]+ Public Goals
> - [ ] Achieve This
> - [ ] Achieve That

> [!NOTE]- Private Goals
> - [ ] Achieve This
> - [ ] Achieve That

# Membership
Students are allocated groups at the beginning of their academic journey

# GM Notes

Make notes of what you need to track in the group here. 

# Hierarchy

`BUTTON[button_person]` List important relationships here. 

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

  // Leader node
  (leader
    ? `L[${leader}]:::internal-link\n`
    : "") +

  // Officers group
  (officers.length > 0
    ? `OG[Officers]\nL --> OG\n` +
      officers.map((o,i) =>
        `O${i+1}[${o}]:::internal-link\nOG --> O${i+1}\n`
      ).join("")
    : "") +

  // Members group
  (members.length > 0
    ? `MG[Members]\n${officers.length ? "OG" : "L"} --> MG\n` +
      members.map((m,i) =>
        `M${i+1}[${m}]:::internal-link\nMG --> M${i+1}\n`
      ).join("")
    : "") +

  // Initiates group
  (initiates.length > 0
    ? `IG[Initiates]\n${members.length ? "MG" : (officers.length ? "OG" : "L")} --> IG\n` +
      initiates.map((n,i) =>
        `I${i+1}[${n}]:::internal-link\nIG --> I${i+1}\n`
      ).join("")
    : "") +

  "```"
)
```


> [!NOTE]- Relationship Config - Enter name of People Notes
> | Leader    | Officers    | 
> | --- | --- | 
> | `INPUT[list:leader]`    | `INPUT[list:officers]`    | 
> 
> | Members    | Initiates    | 
> | --- | --- | 
> | `INPUT[list:members]`    | `INPUT[list:initiates]`    |

# Enemies/Allies
**Enemies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyEnemies]`
 

**Allies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyAllies]`
 

# People

The following people are members of this group.  

```base
properties:
  file.name:
    displayName: Star Systems Name
  note.MyCategory:
    displayName: Type of Star System
  note.char_race:
    displayName: Race
  note.char_gender:
    displayName: Gender
  note.char_age:
    displayName: Age
views:
  - type: cards
    name: Group Members - Cards
    filters:
      and:
        - file.folder == "1-Party/Group 1"
        - list(Connected_Groups).contains(this)
    order:
      - file.name
      - char_age
      - char_gender
      - char_race
    image: note.image
  - type: table
    name: Group Members - Table
    filters:
      and:
        - file.folder == "1-Party/Group 1"
        - list(Connected_Groups).contains(this)
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC
    columnSize:
      file.name: 182

```

