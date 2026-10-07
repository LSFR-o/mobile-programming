
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDWWQ6WARUVH7TfpNRvfS-DqtW52W4hNhK",
    authDomain: "mobileprogramming-860f7.firebaseapp.com",
    projectId: "mobileprogramming-860f7",
    storageBucket: "mobileprogramming-860f7.firebasestorage.app",
    messagingSenderId: "320440239689",
    appId: "1:320440239689:web:6ebd0a101fc310f117a198",
    measurementId: "G-03L3RBVSWD"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// Add users
function addUsers() {

    for (let i = 1; i <= 5; i++) {

        set(ref(db, "users/" + i), {
            fname: document.getElementById("fname" + i).value,
            lname: document.getElementById("lname" + i).value,
            age: document.getElementById("age" + i).value,
            height: document.getElementById("height" + i).value,
            weight: document.getElementById("weight" + i).value,
            gender: document.getElementById("gender" + i).value,
            city: document.getElementById("city" + i).value,
            email: document.getElementById("email" + i).value,
            phone: document.getElementById("phone" + i).value,
            occupation: document.getElementById("occupation" + i).value
        });

    }

    console.log("5 users added");
}

window.addUsers = addUsers;


// Read one user
function readUser() {

    let userId = document.getElementById("userId").value;

    const userRef = ref(db, "users/" + userId);

    get(userRef).then((data) => {

        if (data.exists()) {
            console.log("User " + userId + ":", data.val());
        } else {
            console.log("User not found");
        }

    });
}

window.readUser = readUser;