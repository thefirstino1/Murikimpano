```js
// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.appspot.com",
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth kugira ngo ikoreshwe ahandi
export const auth = getAuth(app);
```

Ubwo noneho muri `auth.js` uzajya ukoresha:

```js
import { auth } from './firebase.js';
```
