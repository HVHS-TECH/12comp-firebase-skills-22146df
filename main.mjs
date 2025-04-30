/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by Dylan Figliola, Term 2 2025?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module

/******************************************************/
// fb_initialise()
// Called by index.html on page load
// Initialise Firebase app
// Input: n/a
// Return: n/a
/******************************************************/
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;
 
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
