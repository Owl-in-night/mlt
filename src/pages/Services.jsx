import { useNavigate } from "react-router-dom";
import { CirclePlus, Plane, Pyramid, Sailboat } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const stats = [
    { name: t("services.header.subtitle1"), value: "+10" },
    { name: t("services.header.subtitle2"), value: "+15" },
    { name: t("services.header.subtitle3"), value: "+8" },
    { name: t("services.header.subtitle4"), value: "6" },
  ];

  const services = [
    {
      id: 4,
      name: t("services.title4"),
      imageSrc: "/img/S4.png",
      subname: t("services.subtitle4"),
    },
    {
      id: 22,
      name: t("services.title22"),
      imageSrc: "/img/SS1.png",
      subname: t("services.subtitle22"),
    },
    {
      id: 15,
      name: t("services.title15"),
      imageSrc: "/img/S14.png",
      subname: t("services.subtitle15"),
    },
    {
      id: 19,
      name: t("services.title19"),
      imageSrc: "/img/S18.png",
      subname: t("services.subtitle19"),
    },
    {
      id: 16,
      name: t("services.title16"),
      imageSrc: "/img/S15.png",
      subname: t("services.subtitle16"),
    },
    {
      id: 17,
      name: t("services.title17"),
      imageSrc: "/img/S16.png",
      subname: t("services.subtitle17"),
    },
    {
      id: 23,
      name: t("services.title23"),
      imageSrc: "/img/SS2.png",
      subname: t("services.subtitle23"),
    },
    {
      id: 21,
      name: t("services.title21"),
      imageSrc: "/img/S20.png",
      subname: t("services.subtitle21"),
    },
    {
      id: 14,
      name: t("services.title14"),
      imageSrc: "/img/S13.png",
      subname: t("services.subtitle14"),
    },
    {
      id: 1,
      name: t("services.title1"),
      imageSrc: "/img/S1.png",
      subname: t("services.subtitle1"),
    },
    {
      id: 2,
      name: t("services.title2"),
      imageSrc: "/img/S2.png",
      subname: t("services.subtitle2"),
    },
    {
      id: 3,
      name: t("services.title3"),
      imageSrc: "/img/S3.png",
      subname: t("services.subtitle3"),
    },
    {
      id: 24,
      name: t("services.title24"),
      imageSrc: "/img/S24.png",
      subname: t("services.subtitle24"),
    },
    {
      id: 5,
      name: t("services.title5"),
      imageSrc: "/img/S5.png",
      subname: t("services.subtitle5"),
    },
    {
      id: 6,
      name: t("services.title6"),
      imageSrc: "/img/SE.png",
      subname: t("services.subtitle6"),
    },
    {
      id: 7,
      name: t("services.title7"),
      imageSrc: "/img/S6.png",
      subname: t("services.subtitle7"),
    },
    {
      id: 8,
      name: t("services.title8"),
      imageSrc: "/img/S7.png",
      subname: t("services.subtitle8"),
    },
    {
      id: 9,
      name: t("services.title9"),
      imageSrc: "/img/S8.png",
      subname: t("services.subtitle9"),
    },
    {
      id: 10,
      name: t("services.title10"),
      imageSrc: "/img/S9.png",
      subname: t("services.subtitle10"),
    },
    {
      id: 11,
      name: t("services.title11"),
      imageSrc: "/img/S10.png",
      subname: t("services.subtitle11"),
    },
    {
      id: 12,
      name: t("services.title12"),
      imageSrc: "/img/S11.png",
      subname: t("services.subtitle12"),
    },
    {
      id: 13,
      name: t("services.title13"),
      imageSrc: "/img/S12.png",
      subname: t("services.subtitle13"),
    },

    {
      id: 18,
      name: t("services.title18"),
      imageSrc: "/img/S17.png",
      subname: t("services.subtitle18"),
    },
    {
      id: 20,
      name: t("services.title20"),
      imageSrc: "/img/S19.png",
      subname: t("services.subtitle20"),
    },
  ];

  const selectedServices = [17, 8, 11].map((id) =>
    services.find((service) => service.id === id)
  );

  // Íconos asociados a los servicios seleccionados
  const icons = [
    <Plane className="h-5 w-5 block" />, // Ícono para el primer servicio (ID 17)
    <Pyramid className="h-5 w-5 block" />, // Ícono para el segundo servicio (ID 8)
    <Sailboat className="h-5 w-5 block" />, // Ícono para el tercer servicio (ID 11)
  ];

  // Generar los enlaces dinámicamente
  const links = selectedServices.map((service, index) => ({
    name: t(`services.header.title${index + 1}`), // Traducción dinámica basada en el índice
    href: `/services/${service.id}`, // Redirección dinámica al servicio según su ID
    icon: icons[index] || null, // Asignar el ícono correspondiente según el índice
  }));

  // Añade la opción "ver más"
  links.push({
    name: t("services.header.title4"), // Traducción para el enlace "ver más"
    href: "#more", // Redirige a la sección "more"
    icon: <CirclePlus className="h-5 w-5 block" />, // Ícono para "ver más"
  });
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const serviceChunks = chunkArray(services, 3);

  const handleCardClick = (id) => {
    navigate(`/services/${id}`); // Navegar al detalle del servicio
  };

  return (
    <div id="services" className="my-10 bg-background">
      <section>
        <div className="relative isolate h-screen overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            alt=""
            src="/img/services.png"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                {t("services.title")}
              </h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                {t("services.subtitle")}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name}{" "}
                    <div className="inline-block ml-2">{link.icon}</div>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse gap-1">
                    <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* List services */}
      <div id="services" className="my-10 bg-background">
        {serviceChunks.map((chunk, index) => (
          <section
            key={index}
            id="more" // Esto genera ids dinámicos: services1, services2, etc.
            className="mx-auto max-w-7xl px-6 py-1 sm:px-8 lg:px-12"
          >
            <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
              {chunk.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleCardClick(service.id)}
                  className="group relative cursor-pointer rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-stone-800 p-4 shadow-md hover:shadow-lg dark:hover:shadow-blue-500/50"
                >
                  <img
                    src={service.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-90"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {service.subname}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
