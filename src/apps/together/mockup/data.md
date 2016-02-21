
---
layout: layout.hbs
---

# Data Models

* Each team will share a same firebase account to store the data.
* The structure of the firebase data is organized as Day-->Time-->Place, Address, Website, Transpotation, etc... from root to leaves. (Place, Address, Website, Transpotation are under same level)
* Everyone can add a new schedule by the popout modal. If the specify branch "Day" is already added, then push the Time-->Place, Address, Website, Transpotation, etc... to the "day" branch you specify. Else, create a new branch Day-->Time-->Place, Address, Website, Transpotation, etc... to the firebase root.
* Everyone can modify the data by clicking the modify button besides the Time, the modify data will push to the firebase, and there will have a record to record the last modifier.
* While someone is adding data by the modal form, his name will turn into red, while others are grey. 


