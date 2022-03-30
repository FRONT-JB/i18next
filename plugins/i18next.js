import i18next from "i18next";
import ko_KR from "~/i18n/locales/ko-KR/translation.json";
import en_US from "~/i18n/locales/en-US/translation.json";
import ja_JP from "~/i18n/locales/ja-JP/translation.json";
import zh_CN from "~/i18n/locales/zh-CN/translation.json";

const loadResource = (lng) => {
  switch (true) {
    case lng === LANGUAGES.KR: {
      return ko_KR;
    }
    case lng === LANGUAGES.US: {
      return en_US;
    }
    case lng === LANGUAGES.JP: {
      return ja_JP;
    }
    case lng === LANGUAGES.CN: {
      return zh_CN;
    }
    default:
      return ko_KR;
  }
};

function getResources(lngs) {
  const resources = {};

  lngs.forEach((lng) => {
    resources[lng] = {
      translation: loadResource(lng),
    };
  });

  return resources;
}

export function initializeI18next(lng = LANGUAGES.KR) {
  i18next.init({
    lng,
    fallbackLng: false,
    returnEmptyString: false,
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      prefix: "%{",
      suffix: "}",
    },
    parseMissingKeyHandler(key) {
      const keySeparator = "~~";
      const value = key.includes(keySeparator)
        ? key.split(keySeparator)[1]
        : key;

      return value;
    },
    resources: getResources(lngs),
  });
}

export function changeLanguage(lng) {
  return i18next.changeLanguage(lng);
}

export const i18n = i18next;
