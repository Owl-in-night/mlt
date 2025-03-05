import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Earth } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function LanguageToggle() {
  const { i18n, t } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLang(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem("userLanguage", lang);
      setSelectedLang(lang);
    });
  };
  

  const languages = [
    { code: "en", label: t("language.en"), flag: "us" },
    { code: "es", label: t("language.es"), flag: "gt" },
    { code: "fr", label: t("language.fr"), flag: "fr" },
    { code: "hi", label: t("language.hi"), flag: "in" },
    { code: "ch", label: t("language.ch"), flag: "cn" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-zinc-600 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Earth className="h-6 w-6 dark:text-gray-200 " />
        {/* <span>{t(`page.${selectedLang}`)}</span> */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 dark:text-white border border-gray-200 dark:border-stone-800 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-800 ${
                  selectedLang === lang.code ? "font-semibold" : ""
                }`}
              >
                <img
                  src={`https://flagcdn.com/${lang.flag}.svg`}
                  alt={`Flag of ${lang.label}`}
                  className="w-6 h-6 rounded-full mr-3"
                />
                <span>{lang.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
