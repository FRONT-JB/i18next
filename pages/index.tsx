import i18next from "i18next";
import type { NextPage } from "next";
import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    i18next.changeLanguage(e.currentTarget.name);
  };
  return (
    <div className={styles.container}>
      <p>{t("test")}</p>
      <button
        type="button"
        name="ko-KR"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChange(e)}
      >
        KR
      </button>
      <button
        type="button"
        name="en-US"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChange(e)}
      >
        US
      </button>
      <button
        type="button"
        name="ja-JP"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChange(e)}
      >
        JP
      </button>
      <button
        type="button"
        name="zh-CN"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChange(e)}
      >
        CN
      </button>
    </div>
  );
};

export default Home;
