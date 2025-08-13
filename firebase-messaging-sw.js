importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

// Replace these Firebase configuration values with your actual configuration
// from your Firebase project settings
firebase.initializeApp({
     apiKey: 'AIzaSyAR2IRs9H130ISg-wGTJ6bVO6wA2wqiaI4',
     appId: '1:1083151029392:web:dee6302476894d8cc67415',
     messagingSenderId: '1083151029392',
     projectId: 'glc-echo',
     authDomain: 'glc-echo.firebaseapp.com',
     storageBucket: 'glc-echo.firebasestorage.app',
     measurementId: 'G-DJKKNCNST3',
});

const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);

  const notificationTitle = payload.notification.title || 'GLC Echo Notification';
  const notificationOptions = {
    body: payload.notification.body || 'New notification',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
