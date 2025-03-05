import { Disclosure } from "@headlessui/react";
import { Facebook, Instagram, X } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "./ModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function Example() {
  const { theme } = useTheme();
  const [t] = useTranslation("global");
  const [currentLink, setCurrentLink] = useState('/');

  const navigation = [
    { name: t("navbar.tagh"), href: "/", current: currentLink === '/' },
    { name: t("navbar.taga"), href: "/about", current: currentLink === '/about' },
    { name: t("navbar.tagc"), href: "/contact", current: currentLink === '/contact' },
    { name: t("navbar.tags"), href: "/services", current: currentLink === '/services' },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 bg-zinc-100 dark:bg-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón de menú móvil y logo (móvil) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div className="flex items-center">
              <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset">
                <span className="sr-only">Open main menu</span>
                <MenuIcon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <X
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </Disclosure.Button>
              <img
                src="/img/logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full ml-2" // Ajusta el tamaño y la clase según sea necesario
              />
            </div>
          </div>

          {/* Contenido principal del navbar */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center hidden sm:flex"> {/* logo (escritorio) */}
              <img
                src="/img/logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full" // Ajusta el tamaño y la clase según sea necesario
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setCurrentLink(item.href)}
                    className={classNames(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-300",
                      "text-gray-800 dark:text-white rounded-md overflow-hidden",
                      item.current
                        ? "before:absolute before:inset-0 before:bg-gray-900/10 dark:before:bg-white/20"
                        : "hover:before:absolute hover:before:inset-0 hover:before:bg-gray-900/5 dark:hover:before:bg-white/10 before:transition-all before:duration-300",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300",
                      item.current
                        ? "after:w-full after:bg-gray-900 dark:after:bg-white"
                        : "after:w-0 hover:after:w-full after:bg-gray-900 dark:after:bg-white"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Iconos y toggles */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            <LanguageToggle />
            <Link
              to="https://m.facebook.com/61565389413373/"
              className="group hidden md:block"
            >
              <Facebook className="h-6 w-6 text-gray-800 dark:text-white transition-all duration-300 group-hover:text-gray-600 dark:group-hover:text-white/80 group-hover:scale-110" />
            </Link>
            <Link
              to="https://www.instagram.com/milantours_panajachel?igsh=MTRnZTE3ZHp4M3Z6NQ=="
              className="group hidden md:block"
            >
              <Instagram className="h-6 w-6 text-gray-800 dark:text-white transition-all duration-300 group-hover:text-gray-600 dark:group-hover:text-white/80 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>

      {/* Panel móvil */}
      <Disclosure.Panel
        className="sm:hidden bg-zinc-100 dark:bg-zinc-800 shadow-md rounded-b-lg"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              onClick={() => setCurrentLink(item.href)}
              className={classNames(
                "block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300",
                "text-gray-800 dark:text-white rounded-md relative overflow-hidden",
                item.current
                  ? "before:absolute before:inset-0 before:bg-gray-900/10 dark:before:bg-white/20"
                  : "hover:before:absolute hover:before:inset-0 hover:before:bg-gray-900/5 dark:hover:before:bg-white/10 before:transition-all before:duration-300",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300",
                item.current
                  ? "after:w-full after:bg-gray-900 dark:after:bg-white"
                  : "after:w-0 hover:after:w-full after:bg-gray-900 dark:after:bg-white"
              )}
            >
              <span className="relative z-10">{item.name}</span>
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}