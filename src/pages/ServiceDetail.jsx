import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function ProductDetail() {
  const { t } = useTranslation("global");
  const products = [
    {
      id: 1,
      name: t("serviceD.title1"),
      especify: [t("serviceD.esp1.d1")],
      images: [
        {
          src: "/img/img1.png",
        },
        {
          src: "/img/img2.png",
        },
        {
          src: "/img/img3.png",
        },
        {
          src: "/img/img4.png",
        },
      ],
      description: t("serviceD.description1"),
      highlights: [
        t("serviceD.listB.b1"),
        t("serviceD.listB.b2"),
        t("serviceD.listB.b3"),
        t("serviceD.listB.b4"),
      ],
      details: t("serviceD.d1"),
    },
    {
      id: 2,
      name: t("serviceD.title2"),
      especify: [
        t("serviceD.esp2.d1"),
        t("serviceD.esp2.d2"),
        t("serviceD.esp2.d3"),
        t("serviceD.esp2.d4"),
        t("serviceD.esp2.d5"),
        t("serviceD.esp2.d6"),
        t("serviceD.esp2.d7"),
        t("serviceD.esp2.d8"),
        t("serviceD.esp2.d9"),
        t("serviceD.esp2.d10"),
        t("serviceD.esp2.d11"),
        t("serviceD.esp2.d12"),
        t("serviceD.esp2.d13"),
        t("serviceD.esp2.d14"),
        t("serviceD.esp2.d15"),
        t("serviceD.esp2.d16"),
        t("serviceD.esp2.d17"),
        t("serviceD.esp2.d18"),
      ],
      images: [
        {
          src: "/img/img5.png",
        },
        {
          src: "/img/img6.png",
        },
        {
          src: "/img/img7.png",
        },
        {
          src: "/img/img8.png",
        },
      ],
      description: t("serviceD.description2"),
      highlights: [
        t("serviceD.listB2.b1"),
        t("serviceD.listB2.b2"),
        t("serviceD.listB2.b3"),
        t("serviceD.listB2.b4"),
      ],
      details: t("serviceD.d2"),
    },
    {
      id: 3,
      name: t("serviceD.title3"),
      especify: [
        t("serviceD.esp3.d1"),
        t("serviceD.esp3.d2"),
        t("serviceD.esp3.d3"),
        t("serviceD.esp3.d4"),
        t("serviceD.esp3.d5"),
        t("serviceD.esp3.d6"),
      ],
      images: [
        {
          src: "/img/img99.png",
        },
        {
          src: "/img/img10.png",
        },
        {
          src: "/img/img11.png",
        },
        {
          src: "/img/img12.png",
        },
      ],
      description: t("serviceD.description3"),
      highlights: [
        t("serviceD.listB3.b1"),
        t("serviceD.listB3.b2"),
        t("serviceD.listB3.b3"),
        t("serviceD.listB3.b4"),
      ],
      details: t("serviceD.d3"),
    },
    {
      id: 4,
      name: t("serviceD.title4"),
      especify: [
        t("serviceD.esp4.d1"),
        t("serviceD.esp4.d2"),
        t("serviceD.esp4.d3"),
        t("serviceD.esp4.d4"),
        t("serviceD.esp4.d5"),
        t("serviceD.esp4.d6"),
      ],
      images: [
        {
          src: "/img/img13.png",
        },
        {
          src: "/img/img14.png",
        },
        {
          src: "/img/img15.png",
        },
        {
          src: "/img/img16.png",
        },
      ],
      description: t("serviceD.description4"),
      highlights: [
        t("serviceD.listB4.b1"),
        t("serviceD.listB4.b2"),
        t("serviceD.listB4.b3"),
        t("serviceD.listB4.b4"),
      ],
      details: t("serviceD.d4"),
    },
    {
      id: 5,
      name: t("serviceD.title5"),
      especify: [
        t("serviceD.esp5.d1"),
        t("serviceD.esp5.d2"),
        t("serviceD.esp5.d3"),
        t("serviceD.esp5.d4"),
        t("serviceD.esp5.d5"),
        t("serviceD.esp5.d6"),
      ],
      images: [
        {
          src: "/img/img17.png",
        },
        {
          src: "/img/img18.png",
        },
        {
          src: "/img/img19.png",
        },
        {
          src: "/img/img20.png",
        },
      ],
      description: t("serviceD.description5"),
      highlights: [
        t("serviceD.listB5.b1"),
        t("serviceD.listB5.b2"),
        t("serviceD.listB5.b3"),
        t("serviceD.listB5.b4"),
      ],
      details: t("serviceD.d5"),
    },
    {
      id: 6,
      name: t("serviceD.title6"),
      especify: [
        t("serviceD.esp6.d1"),
        t("serviceD.esp6.d2"),
        t("serviceD.esp6.d3"),
        t("serviceD.esp6.d4"),
      ],
      images: [
        {
          src: "/img/img21.png",
        },
        {
          src: "/img/img22.png",
        },
        {
          src: "/img/img23.png",
        },
        {
          src: "/img/img24.png",
        },
      ],
      description: t("serviceD.description6"),
      highlights: [
        t("serviceD.listB6.b1"),
        t("serviceD.listB6.b2"),
        t("serviceD.listB6.b3"),
        t("serviceD.listB6.b4"),
      ],
      details: t("serviceD.d6"),
    },
    {
      id: 7,
      name: t("serviceD.title7"),
      especify: [
        t("serviceD.esp7.d1"),
        t("serviceD.esp7.d2"),
        t("serviceD.esp7.d3"),
        t("serviceD.esp7.d4"),
        t("serviceD.esp7.d5"),
      ],
      images: [
        {
          src: "/img/img25.png",
        },
        {
          src: "/img/img26.png",
        },
        {
          src: "/img/img27.png",
        },
        {
          src: "/img/img28.png",
        },
      ],
      description: t("serviceD.description7"),
      highlights: [
        t("serviceD.listB7.b1"),
        t("serviceD.listB7.b2"),
        t("serviceD.listB7.b3"),
        t("serviceD.listB7.b4"),
      ],
      details: t("serviceD.d7"),
    },
    {
      id: 8,
      name: t("serviceD.title8"),
      especify: [
        t("serviceD.esp8.d1"),
        t("serviceD.esp8.d2"),
        t("serviceD.esp8.d3"),
        t("serviceD.esp8.d4"),
      ],
      images: [
        {
          src: "/img/img29.png",
        },
        {
          src: "/img/img30.png",
        },
        {
          src: "/img/img31.png",
        },
        {
          src: "/img/img32.png",
        },
      ],
      description: t("serviceD.description8"),
      highlights: [
        t("serviceD.listB8.b1"),
        t("serviceD.listB8.b2"),
        t("serviceD.listB8.b3"),
        t("serviceD.listB8.b4"),
      ],
      details: t("serviceD.d8"),
    },
    {
      id: 9,
      name: t("serviceD.title9"),
      especify: [
        t("serviceD.esp9.d1"),
        t("serviceD.esp9.d2"),
        t("serviceD.esp9.d3"),
        t("serviceD.esp9.d4"),
      ],
      images: [
        {
          src: "/img/img33.png",
        },
        {
          src: "/img/img34.png",
        },
        {
          src: "/img/img35.png",
        },
        {
          src: "/img/img36.png",
        },
      ],
      description: t("serviceD.description9"),
      highlights: [
        t("serviceD.listB9.b1"),
        t("serviceD.listB9.b2"),
        t("serviceD.listB9.b3"),
        t("serviceD.listB9.b4"),
      ],
      details: t("serviceD.d9"),
    },
    {
      id: 10,
      name: t("serviceD.title10"),
      especify: [
        t("serviceD.esp10.d1"),
        t("serviceD.esp10.d2"),
        t("serviceD.esp10.d3"),
        t("serviceD.esp10.d4"),
      ],
      images: [
        {
          src: "/img/img37.png",
        },
        {
          src: "/img/img38.png",
        },
        {
          src: "/img/img39.png",
        },
        {
          src: "/img/img40.png",
        },
      ],
      description: t("serviceD.description10"),
      highlights: [
        t("serviceD.listB10.b1"),
        t("serviceD.listB10.b2"),
        t("serviceD.listB10.b3"),
        t("serviceD.listB10.b4"),
      ],
      details: t("serviceD.d10"),
    },
    {
      id: 11,
      name: t("serviceD.title11"),
      especify: [t("serviceD.esp11.d1"), t("serviceD.esp11.d2")],
      images: [
        {
          src: "/img/img41.png",
        },
        {
          src: "/img/img42.png",
        },
        {
          src: "/img/img43.png",
        },
        {
          src: "/img/img44.png",
        },
      ],
      description: t("serviceD.description11"),
      highlights: [
        t("serviceD.listB11.b1"),
        t("serviceD.listB11.b2"),
        t("serviceD.listB11.b3"),
        t("serviceD.listB11.b4"),
      ],
      details: t("serviceD.d11"),
    },
    {
      id: 12,
      name: t("serviceD.title12"),
      especify: [
        t("serviceD.esp12.d1"),
        t("serviceD.esp12.d2"),
        t("serviceD.esp12.d3"),
      ],
      images: [
        {
          src: "/img/img45.png",
        },
        {
          src: "/img/img46.png",
        },
        {
          src: "/img/img47.png",
        },
        {
          src: "/img/img48.png",
        },
      ],
      description: t("serviceD.description12"),
      highlights: [
        t("serviceD.listB12.b1"),
        t("serviceD.listB12.b2"),
        t("serviceD.listB12.b3"),
        t("serviceD.listB12.b4"),
      ],
      details: t("serviceD.d12"),
    },
    {
      id: 13,
      name: t("serviceD.title13"),
      especify: [
        t("serviceD.esp13.d1"),
        t("serviceD.esp13.d2"),
        t("serviceD.esp13.d3"),
      ],
      images: [
        {
          src: "/img/img49.png",
        },
        {
          src: "/img/img50.png",
        },
        {
          src: "/img/img51.png",
        },
        {
          src: "/img/img52.png",
        },
      ],
      description: t("serviceD.description13"),
      highlights: [
        t("serviceD.listB13.b1"),
        t("serviceD.listB13.b2"),
        t("serviceD.listB13.b3"),
        t("serviceD.listB13.b4"),
      ],
      details: t("serviceD.d13"),
    },
    {
      id: 14,
      name: t("serviceD.title14"),
      especify: [
        t("serviceD.esp13.d1"),
        t("serviceD.esp13.d2"),
        t("serviceD.esp13.d3"),
      ],
      images: [
        {
          src: "/img/img53.png",
        },
        {
          src: "/img/img54.png",
        },
        {
          src: "/img/img55.png",
        },
        {
          src: "/img/img56.png",
        },
      ],
      description: t("serviceD.description14"),
      highlights: [
        t("serviceD.listB14.b1"),
        t("serviceD.listB14.b2"),
        t("serviceD.listB14.b3"),
        t("serviceD.listB14.b4"),
      ],
      details: t("serviceD.d14"),
    },
    {
      id: 15,
      name: t("serviceD.title15"),
      especify: [
        t("serviceD.esp15.d1"),
        t("serviceD.esp15.d2"),
        t("serviceD.esp15.d3"),
        t("serviceD.esp15.d4"),
      ],
      images: [
        {
          src: "/img/img57.png",
        },
        {
          src: "/img/img58.png",
        },
        {
          src: "/img/img59.png",
        },
        {
          src: "/img/img60.png",
        },
      ],
      description: t("serviceD.description15"),
      highlights: [
        t("serviceD.listB15.b1"),
        t("serviceD.listB15.b2"),
        t("serviceD.listB15.b3"),
        t("serviceD.listB15.b4"),
      ],
      details: t("serviceD.d15"),
    },
    {
      id: 16,
      name: t("serviceD.title16"),
      especify: [t("serviceD.esp16.d1")],
      images: [
        {
          src: "/img/img61.png",
        },
        {
          src: "/img/img62.png",
        },
        {
          src: "/img/img63.png",
        },
        {
          src: "/img/img64.png",
        },
      ],
      description: t("serviceD.description16"),
      highlights: [
        t("serviceD.listB16.b1"),
        t("serviceD.listB16.b2"),
        t("serviceD.listB16.b3"),
        t("serviceD.listB16.b4"),
      ],
      details: t("serviceD.d16"),
    },
    {
      id: 17,
      name: t("serviceD.title17"),
      especify: [
        t("serviceD.esp17.d1"),
        t("serviceD.esp17.d2"),
        t("serviceD.esp17.d3"),
        t("serviceD.esp17.d4"),
        t("serviceD.esp17.d5"),
        t("serviceD.esp17.d6"),
        t("serviceD.esp17.d7"),
        t("serviceD.esp17.d8"),
        t("serviceD.esp17.d9"),
        t("serviceD.esp17.d10"),
        t("serviceD.esp17.d11"),
      ],
      images: [
        {
          src: "/img/img65.png",
        },
        {
          src: "/img/img66.png",
        },
        {
          src: "/img/img67.png",
        },
        {
          src: "/img/img68.png",
        },
      ],
      description: t("serviceD.description17"),
      highlights: [
        t("serviceD.listB17.b1"),
        t("serviceD.listB17.b2"),
        t("serviceD.listB17.b3"),
        t("serviceD.listB17.b4"),
      ],
      details: t("serviceD.d17"),
    },
    {
      id: 18,
      name: t("serviceD.title18"),
      especify: [t("serviceD.esp18.d1"), t("serviceD.esp18.d2")],
      images: [
        {
          src: "/img/img69.png",
        },
        {
          src: "/img/img70.png",
        },
        {
          src: "/img/img71.png",
        },
        {
          src: "/img/img72.png",
        },
      ],
      description: t("serviceD.description18"),
      highlights: [
        t("serviceD.listB18.b1"),
        t("serviceD.listB18.b2"),
        t("serviceD.listB18.b3"),
        t("serviceD.listB18.b4"),
      ],
      details: t("serviceD.d18"),
    },
    {
      id: 19,
      name: t("serviceD.title19"),
      especify: [t("serviceD.esp19.d1"), t("serviceD.esp19.d2")],
      images: [
        {
          src: "/img/img73.png",
        },
        {
          src: "/img/img74.png",
        },
        {
          src: "/img/img75.png",
        },
        {
          src: "/img/img76.png",
        },
      ],
      description: t("serviceD.description19"),
      highlights: [
        t("serviceD.listB19.b1"),
        t("serviceD.listB19.b2"),
        t("serviceD.listB19.b3"),
        t("serviceD.listB19.b4"),
      ],
      details: t("serviceD.d19"),
    },
    {
      id: 20,
      name: t("serviceD.title20"),
      especify: [t("serviceD.esp20.d1"), t("serviceD.esp20.d2")],
      images: [
        {
          src: "/img/img77.png",
        },
        {
          src: "/img/img78.png",
        },
        {
          src: "/img/img79.png",
        },
        {
          src: "/img/img80.png",
        },
      ],
      description: t("serviceD.description20"),
      highlights: [
        t("serviceD.listB20.b1"),
        t("serviceD.listB20.b2"),
        t("serviceD.listB20.b3"),
        t("serviceD.listB20.b4"),
      ],
      details: t("serviceD.d20"),
    },
    {
      id: 21,
      name: t("serviceD.title21"),
      especify: [
        t("serviceD.esp21.d1"),
        t("serviceD.esp21.d2"),
        t("serviceD.esp21.d3"),
      ],
      images: [
        {
          src: "/img/img81.png",
        },
        {
          src: "/img/img82.png",
        },
        {
          src: "/img/img83.png",
        },
        {
          src: "/img/img84.png",
        },
      ],
      description: t("serviceD.description21"),
      highlights: [
        t("serviceD.listB21.b1"),
        t("serviceD.listB21.b2"),
        t("serviceD.listB21.b3"),
        t("serviceD.listB21.b4"),
      ],
      details: t("serviceD.d21"),
    },
    {
      id: 22,
      name: t("serviceD.title22"),
      especify: [
        t("serviceD.esp22.d1"),
        t("serviceD.esp22.d2"),
        t("serviceD.esp22.d3"),
        t("serviceD.esp22.d4"),
        t("serviceD.esp22.d5"),
        t("serviceD.esp22.d6"),
      ],
      images: [
        {
          src: "/img/barco3.png",
        },
        {
          src: "/img/barco4.png",
        },
        {
          src: "/img/barco2.png",
        },
        {
          src: "/img/barco1.png",
        },
      ],
      description: t("serviceD.description22"),
      highlights: [
        t("serviceD.listB22.b1"),
        t("serviceD.listB22.b2"),
        t("serviceD.listB22.b3"),
        t("serviceD.listB22.b4"),
      ],
      details: t("serviceD.d22"),
    },
    {
      id: 23,
      name: t("serviceD.title23"),
      especify: [
        t("serviceD.esp23.d1"),
        t("serviceD.esp23.d2"),
        t("serviceD.esp23.d3"),
      ],
      images: [
        {
          src: "/img/casa3.png",
        },
        {
          src: "/img/casa2.png",
        },
        {
          src: "/img/casa1.png",
        },
        {
          src: "/img/casa4.png",
        },
      ],
      description: t("serviceD.description23"),
      highlights: [
        t("serviceD.listB23.b1"),
        t("serviceD.listB23.b2"),
        t("serviceD.listB23.b3"),
        t("serviceD.listB23.b4"),
      ],
      details: t("serviceD.d23"),
    },
    // Otros productos...
  ];
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Carrusel para móvil */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:hidden">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt=""
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Image gallery */}
        <div className="hidden lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            src={product.images[0].src}
            className="size-full rounded-lg object-cover"
          />
          <div className="grid grid-cols-1 gap-y-8">
            <img
              src={product.images[1].src}
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              src={product.images[2].src}
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            src={product.images[3].src}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        {/* Product info with conditional card */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Card de información adicional condicional */}
          <div className="bg-gray-100 dark:bg-stone-800 rounded-lg mt-4 lg:row-span-3 lg:mt-0 p-6 shadow-lg lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              {t("serviceD.espe")}
            </h2>
            <div className="mt-4">
              <ul
                role="list"
                className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400"
              >
                {product.especify.map((especify, index) => (
                  <li key={index} className="py-1">
                    <span className="text-gray-600 dark:text-gray-300">
                      {especify}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900 dark:text-gray-300">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {t("serviceD.beneficios")}
              </h3>
              <div className="mt-4">
                <ul
                  role="list"
                  className="list-disc space-y-2 pl-4 text-sm text-gray-600 dark:text-gray-400"
                >
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="text-gray-600 dark:text-gray-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {t("serviceD.detalles")}
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
