import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { app } from "./config.js";

export const db = getFirestore(app);