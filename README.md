#2d-physics-lib

2d physics

First, download the zip into your project's root directory

Then, copy and paste into index.html, above the other script tags:  
<script src="2d-physics-lib-master/linear-lib-master/library.js" type="module"></script>
<script src="2d-physics-lib-master/library.js" type="module"></script>  

The script tags this is used in must also have type="module"  

Finally, in the top of the file where this  is used, add this line:
import * as physics from './2d-physics-lib-master/library.js';
