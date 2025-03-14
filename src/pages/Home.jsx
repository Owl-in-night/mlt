import { Book, BookOpen, Telescope } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Componente reutilizable para botones
const ActionButton = ({ to, onClick, text, Icon, className = "" }) => (
  <div className="flex justify-center">
    {to ? (
      <Link
        to={to}
        className={`inline-flex items-center justify-center text-md bg-white text-black hover:bg-gray-200 rounded-md px-4 py-2 font-semibold shadow-sm ${className}`}
      >
        {text}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </Link>
    ) : (
      <a
        onClick={onClick}
        className={`flex items-center text-xs bg-indigo-600 text-white hover:bg-indigo-500 rounded-md px-3.5 py-2.5 md:text-lg font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      >
        {text}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </a>
    )}
  </div>
);

// Componente para tarjetas
const Card = ({ imgSrc, title, description }) => (
  <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg w-80 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-slide-up">
    <img
      src={imgSrc}
      alt={title}
      className="mb-4 h-auto max-w-full rounded-lg"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default function Home() {
  const { t } = useTranslation("global");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Sección principal */}
      <section className="h-screen relative">
        {isMobile ? (
          // 🖼️ Carrusel de imágenes en móviles (sin cambios)
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            className="h-full w-full"
            showStatus={false}
            showArrows={false}
            showIndicators={false}
          >
            <div>
              <img src="/img/h1.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="/img/h2.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="/img/h3.jpg" alt="Slide 3" />
            </div>
          </Carousel>
        ) : (
          // 🌟 Mostrar primero la imagen y luego el video en pantallas grandes
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={5000} // 5 segundos entre imagen y video
            className="h-full w-full"
            showStatus={false}
            showArrows={false}
            showIndicators={false}
          >
            {/* Imagen de inicio */}
            <div className="relative h-screen">
              <img
                src="/img/HOME12.JPG"
                className="w-full h-full object-cover"
                alt="Home"
              />
            </div>

            {/* Video de fondo */}
            <div className="relative h-screen">
              <video
                src="/videos/homev.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Carousel>
        )}

        {/* Capa oscura y contenido */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t("home.welcome")}
          </h1>
          <p className="mt-8 text-lg text-gray-200 sm:text-3xl">
            <i>{t("home.eslogan")}</i>
          </p>
          <div className="mt-10">
            <ActionButton to="/services" text={t("home.button1")} Icon={BookOpen} />
          </div>
        </div>
      </section>

      {/* Sección de tarjetas */}
      <section id="section1" className="md:py-24 px-6">
        <h2 className="text-3xl font-bold text-center hidden md:block text-gray-900 dark:text-white mb-16">
          {t("home.title")}
        </h2>
        <div className="relative flex flex-wrap justify-center gap-6 px-6 hidden md:flex">
          {["card2", "card5", "card3"].map((cardKey, index) => (
            <Card
              key={index}
              imgSrc={`/img/${cardKey}.png`}
              title={t(`home.${cardKey}`)}
              description={t(`home.description${cardKey.replace("card", "")}`)}
            />
          ))}
        </div>
        <ActionButton
          onClick={(e) => scrollToSection(e, "section2")}
          text={t("home.vermas")}
          Icon={Telescope}
          className="hidden my-8 md:flex"
        />
      </section>

      {/* Secciones adicionales */}
      {["section2", "section3"].map((sectionId, index) => (
        <section key={index} id={sectionId} className="py-5 md:py-24 w-full">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4 lg:max-w-lg">
                <p className="text-sm text-center md:text-left md:text-base/7 font-semibold text-indigo-600">
                  {t(`home.header${index + 1}`)}
                </p>
                <h1 className="mt-2 text-pretty text-xl text-center md:text-left md:text-4xl font-semibold tracking-tight dark:text-slate-100 sm:text-5xl">
                  {t(`home.title${index + 2}`)}
                </h1>
                <p className="mt-6 text-sm text-justify px-4 md:text-xl/8 dark:text-slate-300">
                  {t(`home.subtitle${index + 2}`)}
                </p>
              </div>
            </div>
            <div className="order-second mb-16 lg:order-none lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src={`/img/${sectionId}.png`}
                className="w-full max-w-none md:rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:order-last"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
