```dataview
TABLE WITHOUT ID
file.link AS "Character Name",
Player, 
level AS Level, 
char_class AS Class, 
char_gender AS Gender, 
char_college AS College
FROM "1-Party"
WHERE Role = "Player", 
SORT Player ASC, file.name ASC
```