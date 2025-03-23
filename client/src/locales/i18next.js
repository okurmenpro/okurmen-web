import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                logo: "OKURMEN",
            },
        },
        ru: {
            translation: {
                logo: "ОКУРМЕН",
            },
        },
        kg: {
            translation: {
                logo: "ОКУРМЕН",
            },
        },
    },
    lng: "kg",
    fallbackLng: "kg",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
