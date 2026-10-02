importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
// Estos valores son públicos (mismos del config.js).
firebase.initializeApp({
  apiKey: "AIzaSyBwRW891dYSTQ61Y0Mg21699Vysds6JhyI",
  authDomain: "cerrada-cordoba.firebaseapp.com",
  projectId: "cerrada-cordoba",
  messagingSenderId: "571836457514",
  appId: "1:571836457514:web:e9aa175e0321fae6359953",
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(p => {
  self.registration.showNotification(p.notification?.title || 'Cerrada Córdoba', {
    body: p.notification?.body || '', icon: 'icons/icon-192.png',
  });
});
