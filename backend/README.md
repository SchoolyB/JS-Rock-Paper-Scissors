# This is a simple guide to the modules this program uses.


### "../backend/modules/hideImagesOnTimer.js" - This module contains two functions.
When call the first function within this module changes the visibility of three images to "hidden".
Those images are the PNGs of cartoonish rock,paper, and scissors hand signs.

When called the second function within this module changes the visibility of the container  that houses the previously<br>
mentioned rock,paper,and scissors PNGs to "hidden" 

Both of these functions are exported and called in "../backend/modules/main.js" 

### "../backend/modules/hideOnLoad.js" - This module contains one function.
There is only one function within this module.<br>
When called the function changes the visibility of every asset within the program<br>
to "hidden". This function is called in "../frontend/index.html"

### "../backend/modules/hideUnusedChoice.js" - This module contains one function.
There is only one function within this module.<br>
When called that function changes the visibility<br>
of both the user or computer choices after they are made to "hidden"
This function is called in...... 
<!-- TODO: export to "../backend/modules/main.js -->
<!-- TODO: finish documentation for this module -->

### "../backend/modules/main.js" - This module contains the main function and its required imports.
The main function is the only function in this module<br>
The main.js module imports data from every file within the "../backend/modules" directory<br>
When called the main function executes the functionality of the webapp.
This function is called when the user clicks the "start" button on "../frontend/index.html"  

### "../backend/modules/scoreKeeper.js" - This module contains one function.
There is only on function within this module<br>
This module imports data from "../backend/modules/userAndCompChoices.js"<br>
When called it will update the onscreen user and computer scores<br>
as the web session continues as well as console.log() the scores.
This function is called in......
<!-- TODO: export to "../backend/modules/main.js -->
<!-- TODO: finish documentation for this module -->

### "../backend/modules/showImages.js" - This module contains seven functions.