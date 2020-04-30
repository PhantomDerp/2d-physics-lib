#2d-physics-lib

2d physics

1. download the zip

2.  copy and paste into index.html, above the other script tags:  
<script src="2d-physics-lib-master/linear-lib-master/library.js" type="module"></script>
<script src="2d-physics-lib-master/library.js" type="module"></script>  

The script tags this is used in must also have type="module"  

3.  in the top of the file where this  is used, add this line:
import * as physics from './2d-physics-lib-master/library.js';
