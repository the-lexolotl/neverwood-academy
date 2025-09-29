---
{"tags":["Category/Group"],"MyContainer":"[[Neverwood Academy|Neverwood Academy]]","MyCategory":"College","image":"map-1.2-lorehold-campus.jpg","obsidianUIMode":"preview","faction":null,"primary_contact":null,"founder":["Velomachus Lorehold"],"deans":["Augusta Tullus","Plargg"],"staff":["Hofri Ghostforge","Losheel","Hazkire Ravenfang","Lianna Flametongue","Marrick Deepfindee","Riri Brighteye","Tervis Sharpwing","Xyla Langning"],"dg-publish":true,"dg-path":"World/Groups/Lorehold College.md","permalink":"/world/groups/lorehold-college/","dgPassFrontmatter":true,"updated":"2025-09-29T13:19:58.000+01:00"}
---


# General
hidden
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
    at fulfilled (plugin:digitalgarden:77:24)</pre>mermaid\nflowchart LR\n" +

  // Founder node
  (founder
    ? `L[${founder}]:::internal-link\n`
    : "") +

  // Officers group
  (deans.length > 0
    ? `OG[Deans]\nL --> OG\n` +
      deans.map((o,i) =>
        `O${i+1}[${o}]:::internal-link\nOG --> O${i+1}\n`
      ).join("")
    : "") +

  // Members group
  (staff.length > 0
    ? `MG[Staff]\n${deans.length ? "OG" : "L"} --> MG\n` +
      staff.map((m,i) =>
        `M${i+1}[${m}]:::internal-link\nMG --> M${i+1}\n`
      ).join("")
    : "") +

  // Initiates group
  (students.length > 0
    ? `IG[Students]\n${staff.length ? "MG" : (deans.length ? "OG" : "L")} --> IG\n` +
      students.map((n,i) =>
        `I${i+1}[${n}]:::internal-link\nIG --> I${i+1}\n`
      ).join("")
    : "") +

  "```"
)
```


> [!NOTE]- Relationship Config - Enter name of People Notes
> | Founder    | Deans    | 
> | --- | --- | 
> | `INPUT[list:founder]`    | `INPUT[list:deans]`    | 
> 
> | Staff    | Students    | 
> | --- | --- | 
> | `INPUT[list:staff]`    | `INPUT[list:students]`    |

# Enemies/Allies
**Enemies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyEnemies]`
 

**Allies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyAllies]`
 
:::
# People

The following people are members of this group.  


| File                                                                               | Race     | Gender     | Role               |
| ---------------------------------------------------------------------------------- | -------- | ---------- | ------------------ |
| [[2-World/People/Adriel Kevadirtinu\|Adriel Kevadirtinu]]                       | Firbolg  | Female     | Student            |
| [[2-World/People/Augusta Tullus\|Augusta Tullus]]                               | Human    | Female     | College Dean       |
| [[2-World/People/Enitix Traziver Salben Xalbis\|Enitix Traziver Salben Xalbis]] | Gnome    | Male       | Student            |
| [[2-World/People/Gilmirie Runlithmae\|Gilmirie Runlithmae]]                     | Human    | Female     | Student            |
| [[2-World/People/Hazkira Ravenfang\|Hazkira Ravenfang]]                         | Halfling | Female     | Professor of Order |
| [[2-World/People/Hofri Ghostforge\|Hofri Ghostforge]]                           | Dwarf    | Male       | Professor of Order |
| [[2-World/People/Inding Kithollal\|Inding Kithollal]]                           | Half-Elf | Female     | Student            |
| [[2-World/People/Javenesh Stoutclaw\|Javenesh Stoutclaw]]                       | Owlin    | Male       | Student            |
| [[2-World/People/Lianna Flametongue\|Lianna Flametongue]]                       | Elf      | Female     | Professor of Chaos |
| [[2-World/People/Losheel\|Losheel]]                                             | Loxodon  | Female     | Professor of Chaos |
| [[2-World/People/Marrick Deepfindee\|Marrick Deepfindee]]                       | Halfling | Male       | Professor of Chaos |
| [[2-World/People/Matreous\|Matreous]]                                           | Human    | Male       | Professor of Chaos |
| [[2-World/People/Osgir, the Reconstructor\|Osgir, the Reconstructor]]           | Giant    | Male       | Professor of Order |
| [[2-World/People/Plargg\|Plargg]]                                               | Orc      | Male       | College Dean       |
| [[2-World/People/Rhys Oakhollow\|Rhys Oakhollow]]                               | Firbolg  | Non-binary | Student            |
| [[2-World/People/Riri Brighteye\|Riri Brighteye]]                               | Owlin    | Female     | Professor of Order |
| [[2-World/People/Tervis Sharpwing\|Tervis Sharpwing]]                           | Owlin    | Male       | Professor of Chaos |
| [[2-World/People/Valka Runeclaw\|Valka Runeclaw]]                               | Leonin   | Female     | Student            |
| [[2-World/People/Velomachus Lorehold\|Velomachus Lorehold]]                     | Dragon   | Female     | Founder Dragon     |
| [[2-World/People/Xyla Langning\|Xyla Langning]]                                 | Gnome    | Female     | Professor of Order |
| [[2-World/People/Raymous Dapplewing\|Raymous Dapplewing]]                       | Owlin    | Male       | Veteran            |

{ .block-language-dataview}
