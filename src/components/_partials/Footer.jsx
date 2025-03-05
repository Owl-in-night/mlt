import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation("global");

  const links = [
    { href: "https://www.facebook.com/gallinasdos21/", icon: <Facebook className="h-5 w-5" /> },
    { href: "https://www.instagram.com/milantours_panajachel?igsh=MTRnZTE3ZHp4M3Z6NQ==", icon: <Instagram className="h-5 w-5" /> },
    { href: "mailto:milantourspanajachel@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <footer className="w-full text-gray-500 dark:text-gray-400 mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-center">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Milan Tours™
          </Link>
          . {t("footer.copy")}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {links.map((link, index) => (
            <li key={index} className="me-4 md:me-6">
              <a
                href={link.href}
                className="hover:underline flex items-center"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
