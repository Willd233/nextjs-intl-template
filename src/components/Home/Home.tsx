"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { setUserLocale } from "@/i18n/locales";

import styles from "./styles/Home.module.scss";

type TLocale = "en" | "es";

export function Home() {
  const [locale, setLocale] = useState<TLocale>("en");

  const t = useTranslations("Page.Home");

  const handleLocaleButton = () => {
    const newLocale = locale === "en" ? "es" : "en";
    setUserLocale({ name: "locale", value: newLocale });
    setLocale(newLocale);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("Title")}</h1>

      <p className={styles.text}>{t("Text")}</p>

      <button onClick={handleLocaleButton} className={styles.button}>
        {locale === "en" ? "EN" : "ES"}
      </button>
    </div>
  );
}
