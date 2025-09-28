```dataview
table fc-category AS Category, 
from "2-World/People"
where MyContainer.file.name = this.file.name
```