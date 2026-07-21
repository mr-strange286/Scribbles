import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

import { app } from "./config.js";

export const storage = getStorage(app);