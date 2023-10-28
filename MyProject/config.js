// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjzsKRCbV41CrWS10Iq7A547weepFLd3Q",
  authDomain: "react-native-a1cd6.firebaseapp.com",
  databaseURL:
    "https://react-native-a1cd6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-a1cd6",
  storageBucket: "react-native-a1cd6.appspot.com",
  messagingSenderId: "224001761138",
  appId: "1:224001761138:web:9dabf48cc76d87e0d887eb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
