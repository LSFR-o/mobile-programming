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

function writeUserData(userId, firstname, lastname, age, height, weight, gender, city, email, phone, occupation) {

    set(ref(db, "users/" + userId), {
        fname: firstname,
        lname: lastname,
        age: age,
        height: height,
        weight: weight,
        gender: gender,
        city: city,
        email: email,
        phone: phone,
        occupation: occupation
    });

    console.log("User " + userId + " added");
}

window.writeUserData = writeUserData;


function readUser() {

    let userId = document.getElementById("userId").value;

    get(ref(db, "users/" + userId)).then((snapshot) => {

        if (snapshot.exists()) {
            console.log("User " + userId + ":", snapshot.val());
        } else {
            console.log("User not found");
        }

    });
}

window.readUser = readUser;