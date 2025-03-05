import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      {/* Primera sección */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="../../public/img/about33.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenido en modo desktop */}
        <div className="hidden md:flex relative z-10 flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 md:px-40 h-full">
          <div className="md:w-1/2 text-center md:text-left text-white">
            <p className="text-sm uppercase font-semibold mb-4">
              {t("about.subtitle")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 pt-5">
              {t("about.title")}
            </h2>
            <p className="text-lg md:text-xl mb-6">{t("about.description")}</p>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Botón Inicio (Desktop) */}
              <a
                href="/"
                className="inline-flex items-center justify-center text-md bg-white text-black hover:bg-gray-200 rounded-md px-4 py-2 font-semibold shadow-sm"
              >
                {t("about.button1")}
              </a>
              {/* Botón Servicios (Desktop) */}
              <a
                href="/services"
                className="inline-flex items-center justify-center text-md border border-white text-white hover:bg-white hover:text-black rounded-md px-4 py-2 font-semibold shadow-sm"
              >
                {t("about.button2")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Texto adicional para modo móvil */}
      <section className="flex md:hidden flex-col items-center justify-center px-8 py-8 text-center">
        <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400 mb-4">
          {t("about.subtitle")}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t("about.description")}
        </p>
        <div className="flex flex-col gap-4">
          {/* Botón Inicio (móvil) - Ahora en morado */}
          <a
            href="/"
            className="inline-flex items-center justify-center text-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 rounded-md px-4 py-2 font-semibold shadow-sm"
          >
            {t("about.button1")}
          </a>
          {/* Botón Servicios (móvil) - Ahora en morado */}
          <a
            href="/services"
            className="inline-flex items-center justify-center text-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 rounded-md px-4 py-2 font-semibold shadow-sm"
          >
            {t("about.button2")}
          </a>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-12">
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="../../public/img/about22.JPG"
            alt="Platform Overview"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover aspect-video"
          />
        </div>

        {/* Contenido de texto */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("about.titlePlatform")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {t("about.descriptionPlatform")}
          </p>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
            {t("about.extraInfoPlatform")}
          </p>
          {/* Botón Servicios (Desktop) */}
          <a
            href="/services"
            className="inline-flex items-center text-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 rounded-lg px-5 py-3 font-semibold shadow-md"
          >
            {t("about.buttonPlatform")}
          </a>
        </div>
      </section>

      {/* Nueva sección con imagen a la derecha y fondo blanco */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-12">
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="../../public/img/img21.png"
            alt="Innovation"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover aspect-video"
          />
        </div>

        {/* Contenido de texto */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("about.titleHistory")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {t("about.descriptionHistory")}
          </p>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
            {t("about.extraInfoHistory")}
          </p>
          {/* Botón Contacto (Desktop) */}
          <a
            href="/contact"
            className="inline-flex items-center text-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 rounded-lg px-5 py-3 font-semibold shadow-md"
          >
            {t("about.button3")}
          </a>
        </div>
      </section>

      {/* Nueva sección de valores */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t("about.coreValuesTitle")}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          {t("about.coreValuesDescription")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((value) => (
            <div key={value} className="text-center space-y-4">
              <img
                src={`../../public/img/value${value}.jpg`}
                className="w-64 h-48 mx-auto rounded-xl shadow-lg object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t(`about.value${value}Title`)}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(`about.value${value}Description`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;