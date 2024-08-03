const conf = {
  firebase_apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  firebase_authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  firebase_projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  firebase_storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  firebase_messagingSenderId: String(
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
  ),
  firebase_appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
  firebase_measurementId: String(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID),
  firebase_databaseURL: String(import.meta.env.VITE_FIREBASE_DATABASE_URL),
};

export default conf;
