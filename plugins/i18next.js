import i18next from "i18next";
import ko_KR from "../translate/assets/locales/ko-KR/translation.json";
import en_US from "../translate/assets/locales/en-US/translation.json";
import ja_JP from "../translate/assets/locales/ja-JP/translation.json";
import zh_CN from "../translate/assets/locales/zh-CN/translation.json";
import { LANGUAGES } from "../translate/constants";

/**
 * Must add new language here
 * @param lng {Language} language
 * @returns {Object} json resource
 */
function loadResource(lng) {
  let module;

  switch (lng) {
    case LANGUAGES.KR: {
      module = ko_KR;
      break;
    }
    case LANGUAGES.US: {
      module = en_US;
      break;
    }
    case LANGUAGES.JP: {
      module = ja_JP;
      break;
    }
    case LANGUAGES.CN: {
      module = zh_CN;
      break;
    }
    default:
      break;
  }

  return module;
}

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
      /* eslint-disable-next-line no-console */
      console.warn("parseMissingKeyHandler", `'key': '${key}'`);
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
