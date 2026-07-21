import { auth, googleProvider } from "./firebase/auth.js";

import {
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { db } from "./firebase/firestore.js";

import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const btn = document.getElementById("googleLogin");

btn.addEventListener("click", async () => {

    try {

        btn.disabled = true;

        btn.textContent = "Signing in...";

        const result = await signInWithPopup(auth, googleProvider);

        const user = result.user;

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {

            await setDoc(userRef, {

                displayName: user.displayName,

                email: user.email,

                photoURL: user.photoURL,

                role: "student",

                joinedAt: serverTimestamp(),

                lastLogin: serverTimestamp(),

                stats: {

                    stories: 0,

                    poems: 0,

                    likes: 0

                }


            });

        }else {

            await updateDoc(userRef, {

                lastLogin: serverTimestamp()

            });

        }

        window.location.href = "../pages/dashboard.html";

    }

    catch (err) {

        alert(err.message);

    }

});