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


import { fb_initialise, fb_login, fb_AuthStateHandle, fb_logout, fb_WriteRec, fb_ReadRec, fb_ReadAll, fb_UpdateRec, fb_WreakHavoc, fb_ReadSorted, fb_ReadOn, fb_DeleteRec}
    from './fb_io.mjs'; 
    window.fb_initialise   = fb_initialise;
    window.fb_login = fb_login;
    window.fb_AuthStateHandle = fb_AuthStateHandle;
    window.fb_logout = fb_logout;
    window.fb_WriteRec = fb_WriteRec;
    window.fb_ReadRec = fb_ReadRec;
    window.fb_ReadAll = fb_ReadAll;
    window.fb_UpdateRec = fb_UpdateRec;
    window.fb_WreakHavoc = fb_WreakHavoc;
    window.fb_ReadSorted = fb_ReadSorted;
    window.fb_ReadOn = fb_ReadOn;
    window.fb_DeleteRec = fb_DeleteRec;
 
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
