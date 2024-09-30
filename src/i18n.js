import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "english",
    resources:{
        english:{
            translation:{
                greeting: "Hello,Welcome!",
            }
        },
        french:{
            translation:{
                greeting: "Bonjour, bienvenue!",
            }
        },
        hindi:{
            translation:{
                greeting: "नमस्ते, स्वागत है!",
            }
        }
    }
})