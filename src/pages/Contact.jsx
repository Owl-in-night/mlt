import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Importamos el icono de ubicación

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white text-gray-900 dark:bg-stone-900 dark:text-white">
      {/* Sección superior con imagen de fondo */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img src="/img/about3.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Texto en modo Desktop (sobre la imagen) */}
        <div className="hidden md:flex absolute top-[30%] w-full text-center z-10 px-6 flex-col items-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-white">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Texto en modo Móvil (debajo de la imagen) */}
      <section className="block md:hidden text-center px-6 py-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("contact.title")}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("contact.subtitle")}
        </p>
      </section>

      {/* Sección de Cards */}
      <section className="relative -mt-[-3%] md:-mt-[2%] px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera tarjeta - Teléfono */}
          <div className="bg-white text-gray-900 dark:bg-stone-800 dark:text-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faPhone} className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t("contact.card1.title")}</h3>
            <p className="mb-4">{t("contact.card1.description")}</p>
            <a href="tel:+1234567890" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              +502 3354 3937
            </a>
          </div>

          {/* Segunda tarjeta - Ubicación */}
          <div className="bg-white text-gray-900 dark:bg-stone-800 dark:text-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 dark:text-red-400 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t("contact.card2.title")}</h3>
            <p className="mb-4">{t("contact.card2.description")}</p>
            <a
              href="https://maps.app.goo.gl/FNTqQd2W56QhGjgn6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-md bg-indigo-600 text-white hover:bg-indigo-500 rounded-md px-4 py-2 font-semibold shadow-sm"
            >
              {t("contact.card2.button")}
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Redes Sociales */}
      <section className="bg-white text-gray-900 dark:bg-stone-900 dark:text-white px-8 py-16 mt-12 rounded-lg shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("contact.socialMediaTitle")}</h2>
          <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com/people/Milan-Tours/61565389413373/#" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-4xl hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/milantours_panajachel/?igsh=MTRnZTE3ZHp4M3Z6NQ%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-4xl hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/+50233543937" target="_blank" rel="noopener noreferrer" className="text-green-600 text-4xl hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-4xl hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;