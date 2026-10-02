/* Config pública del cliente (NO lleva secretos del Worker ni de Shelly).
   Valores del proyecto Firebase cerrada-cordoba. */
const CONFIG = {
  firebase: {
    apiKey: "AIzaSyBwRW891dYSTQ61Y0Mg21699Vysds6JhyI",       // RESTRINGIR a racosta123.github.io en Google Cloud Console
    authDomain: "cerrada-cordoba.firebaseapp.com",
    projectId: "cerrada-cordoba",
    storageBucket: "cerrada-cordoba.firebasestorage.app",
    messagingSenderId: "571836457514",
    appId: "1:571836457514:web:e9aa175e0321fae6359953",
  },
  workerUrl: "https://cordoba-proxy.acosta4770.workers.dev",
  appCheckSiteKey: "",  // App Check — pendiente
  vapidKey: "",         // FCM Web Push — pendiente
};
