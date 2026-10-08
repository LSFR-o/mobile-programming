import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    push
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDWWQ6WARUVH7TfpNRvfS-DqtW52W4hNhK",
    authDomain: "mobileprogramming-860f7.firebaseapp.com",
    projectId: "mobileprogramming-860f7",
    storageBucket: "mobileprogramming-860f7.firebasestorage.app",
    messagingSenderId: "320440239689",
    appId: "1:85482426604:web:101fc310f117a198",
    measurementId: "G-03L3RBVSWD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function sendMessage(name, email, message) {

    const contactRef = ref(db, "contacts");
    const newContactRef = push(contactRef);

    set(newContactRef, {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        console.log("Message sent successfully");
    })
    .catch((error) => {
        console.error("Error sending message:", error);
    });
}


window.sendMessage = sendMessage;