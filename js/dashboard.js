import { auth } from "./firebase/auth.js";

import { db } from "./firebase/firestore.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "../pages/login.html";

        return;

    }

    loadUser(user);

});

async function loadUser(user) {

    const userRef = doc(db, "users", user.uid);

    const snap = await getDoc(userRef);

    if (!snap.exists()) return;

    const data = snap.data();

    document.getElementById("userPhoto").src = data.photoURL;

    document.getElementById("userName").textContent = data.displayName;

    document.getElementById("userEmail").textContent = data.email;

    document.getElementById("storiesCount").textContent = data.stats.stories;

    document.getElementById("poemsCount").textContent = data.stats.poems;

    document.getElementById("likesCount").textContent = data.stats.likes;

}

document.getElementById("logoutBtn").addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "../index.html";

});