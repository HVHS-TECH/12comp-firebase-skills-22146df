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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";



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
const FB_GAMEDB = getDatabase(FB_GAMEAPP);

//**************************************************************/
// EXPORT FUNCTIONS
/**************************************************************/
export {
  fb_initialise,
  fb_login,
  fb_AuthStateHandle,
  fb_logout,
  fb_WriteRec,
  fb_ReadRec,
  fb_ReadAll,
};

/******************************************************/
// fb_initialise()
// Called by index.html on page load
// Initialise Firebase app
// Input: n/a
// Return: n/a
/******************************************************/
function fb_initialise() {
  console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
  console.info(FB_GAMEDB);
}
/******************************************************/
// fb_login()
// Called by index.html on page load
// Log in to Firebase app
// Input: n/a
// Return: n/a
/******************************************************/
function fb_login() {
  const AUTH = getAuth();
  const PROVIDER = new GoogleAuthProvider();
  PROVIDER.setCustomParameters({
    prompt: 'select_account'
  });
  signInWithPopup(AUTH, PROVIDER)
    .then((result) => {
      const user = result.user;
      if (user) {
        console.log("User Signed In", user);
        document.getElementById('p_fbLogin').innerText = user.displayName || "Unknown User";
      } else {
        console.warn("No user returned after sign-in.");
        document.getElementById('p_fbLogin').innerText = "Login worked with no data available";
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      document.getElementById('p_fbLogin').innerText = "The Login has failed";
    });
}

/******************************************************/
// fb_AuthStateHandle()
// Called by index.html on page load
// Detect for changes in the User's Authentication
// Input: n/a
// Return: n/a
/******************************************************/
function fb_AuthStateHandle() {
  const AUTH = getAuth();
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      console.log("User is logged in", user.displayName);
    } else {
      console.log("User is currently logged out");
    }
  }, (error) => {
    console.error("Auth state error:", error);
  });


}

/******************************************************/
// fb_logout()
// Called by index.html on page load
// Log out of Firebase App
// Input: n/a
// Return: n/a
/******************************************************/
function fb_logout() {
  const AUTH = getAuth();
  signOut(AUTH)
    .then(() => {
      console.log("User signed out successfully.");
      document.getElementById('p_fbLogin').innerText = "No User Currently";
    })
    .catch((error) => {
      console.error("Logout error:", error);
      document.getElementById('p_fbLogin').innerText = "The logout has failed";
    });
}


/******************************************************/
// fb_WriteRec
// Called by index.html on page load
// Write a record to the realtime database
// Input: n/a
// Return: n/a
/******************************************************/
function fb_WriteRec() {

  const recordPath = "Tree/Branches/newBranch";
  const data = {
    fruit: "Peach",
    colour: "Purple",
    size: "Large"
  };
  const DATAREF = ref(FB_GAMEDB, recordPath); // Create the reference



  set(DATAREF, data)
    .then(() => {
      console.log("Data Successfully written");
      document.getElementById("p_fbWriteRec").innerText = "Data written to " + recordPath;

    })
    .catch((error) => {
      console.error("Error writing data:", error);
      document.getElementById("p_fbWriteRec").innerText = "Failed to write to " + recordPath;

    });

}

/******************************************************/
// fb__ReadRec
// Called by index.html on page load
// Write a record to the realtime database
// Input: n/a
// Return: n/a
/******************************************************/
function fb_ReadRec() {

  const READPATH = "Tree/leaves/Colour";
  const DATAREF = ref(FB_GAMEDB, READPATH);

  get(DATAREF).then((snapshot) => {
    const fb_data = snapshot.val();

    if (fb_data != null) {
      console.log("Data successfully read:", fb_data);
      document.getElementById("p_fbReadRec").innerText = "Read: " + fb_data;
    } else {
      console.warn("No data found at", READPATH);
      document.getElementById("p_fbReadRec").innerText = "No data at " + READPATH;
    }
  }).catch((error) => {
    console.error("Error reading data:", error);
    document.getElementById("p_fbReadRec").innerText = "Failed to read from " + READPATH;
  });

}
/******************************************************/
// fb_ReadAll
// Called by index.html on page load
// Read Path from realtime database
// Input: n/a
// Return: n/a
/******************************************************/

function fb_ReadAll(){



  const READPATH = "Tree";
    const DATAREF = ref(FB_GAMEDB, READPATH);
  const dbReference = ref(DATAREF);

  get(dbReference).then((snapshot) => {

    var fb_data = snapshot.val();
    if (fb_data != null) {
      console.log("Data successfully read:", fb_data);
      document.getElementById("p_fbReadAll").innerText = "Read: " + fb_data;
    } else {

    }

  }).catch((error) => {

  });

}
/**************************************************************/
//   END OF CODE
/**************************************************************/
