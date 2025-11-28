```dataview
TABLE handout-cat AS Category, Connected_Quests AS "Connected Quests", Connected_Groups AS "Connected Groups", ingameDate AS "In-game Date"
From "2-Player Handouts"
Where 
SORT sessionDate DESC
```