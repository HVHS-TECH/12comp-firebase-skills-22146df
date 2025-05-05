//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Dylan Figliola, Term 2 2025?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	 
const COL_B = '#CD7F32';
console.log('%c fb_io.mjs', 'color: blue; background-color: white;');

//**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js"; 
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

//**************************************************************/
// Firebase Configuration
/**************************************************************/
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

// Initialize Firebase app globally
const FB_GAMEAPP = initializeApp(firebaseConfig); 
const analytics = getAnalytics(FB_GAMEAPP); 

//**************************************************************/
// EXPORT FUNCTIONS
/**************************************************************/
export { 
  fb_initialise, 
  fb_login 
};

//**************************************************************/
// fb_initialise function
/**************************************************************/
function fb_initialise() {
  console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
  const FB_GAMEDB = getDatabase(FB_GAMEAPP);
  console.info(FB_GAMEDB); 
}

//**************************************************************/
// fb_login function
/**************************************************************/
function fb_login(){
  const AUTH = getAuth();
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      console.log("User is logged in", user.displayName);
    } else {
      console.log("User is not logged in.", user.displayName);
    }
  }, (error) => {
    console.error("Auth state error:", error);
  });

  const PROVIDER = new GoogleAuthProvider();
  PROVIDER.setCustomParameters({
    prompt: 'select_account' 
  });

  signInWithPopup(AUTH, PROVIDER).then((result) => {
    console.log("User Signed in", result.user);
    document.getElementById('p_fbLogin').innerText = result.user.displayName;
  })
  .catch((error) => {
    console.error("Login error:", error);
    document.getElementById('p_fbLogin').innerText = "The Login has failed";
  });
}
