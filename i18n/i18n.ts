import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useRouter } from "next/router";

import ko from "./locales/ko-KR/translation.json";
import en from "./locales/en-US/translation.json";
import ja from "./locales/ja-JP/translation.json";
import cn from "./locales/zh-CN/translation.json";

const useIntenationalLanguageInit = () => {
  const { locale } = useRouter();

  i18n.use(initReactI18next).init({
    resources: {
      "ko-KR": {
        translation: ko,
      },
      "ja-JP": {
        translation: ja,
      },
      "en-US": {
        translation: en,
      },
      "zh-CN": {
        translation: cn,
      },
    },
    lng: locale ?? "ko",
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
  });
};

export default useIntenationalLanguageInit;
