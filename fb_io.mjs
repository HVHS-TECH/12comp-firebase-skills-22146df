//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Dylan Figliola, Term 2 2025?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
  // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js"; 
    import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8viBZ-gKBknRREyTiDinnugjj6Rjrog0",
    authDomain: "comp-2025-dylan-f.firebaseapp.com",
    databaseURL: "https://comp-2025-dylan-f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-2025-dylan-f",
    storageBucket: "comp-2025-dylan-f.firebasestorage.app",
    messagingSenderId: "133223974410",
    appId: "1:133223974410:web:d1cde3ac980749bde601f3",
    measurementId: "G-WHVZ7GW4CF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise 
    fb_login
};


function fb_initialise() {
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const FB_GAMEAPP = initializeApp(firebaseConfig);
}


function fb_login(){
   
    const AUTH = getAuth();

    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({

        prompt: 'select_account' });

        signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log ("User Signed in", result.user)
        })
    
        .catch((error) => {
        
        });
}

/**************************************************************/
// END OF CODE
/**************************************************************/