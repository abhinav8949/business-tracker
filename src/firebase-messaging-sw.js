importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

// Initialize Firebase inside the service worker
firebase.initializeApp({
  apiKey: "AIzaSyArJM7RZ5Vm98ytPdg99j6IvVenYnbjlQA",
  authDomain: "business-tracker-c5f17.firebaseapp.com",
  projectId: "business-tracker-c5f17",
  storageBucket: "business-tracker-c5f17.firebasestorage.app",
  messagingSenderId: "330102036962",
  appId: "1:330102036962:web:b591fee2f2339a529641bb",
  vapidKey: "BBJ8r6-63T2Evzv94QsP3Nvi_EhwpOpW2aoFKADxU-lqCoap_LaNEC9EWHWgJwOzYqSmb2DLOxAydC4LQz1MzSw"
});

// Retrieve Firebase Messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
