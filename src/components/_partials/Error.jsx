import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Error() {
const { t } = useTranslation("global");
    return (
      <>
        <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{t("error.title")}</h1>
            <p className="mt-6 text-base leading-7 text-gray-900 dark:text-white">{t("error.subtitle")}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                 to={`/`}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("error.home")}
              </Link>
              <Link to={`/Soporte/Contacto`} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                {t("error.contact")} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }