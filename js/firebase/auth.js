import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { app } from "./config.js";

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();