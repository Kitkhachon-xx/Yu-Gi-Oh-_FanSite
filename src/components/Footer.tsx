import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl gold-text">{site.name}</p>
            <p className="mt-2 text-sm text-muted">{site.tagline}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-sm text-muted">
            <p>
              Contact:{" "}
              <a href={`mailto:${site.email}`} className="text-gold-soft hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                GitHub profile
              </a>
            </p>
          </div>
        </div>
        <div className="divider-gold my-8" />
        <p className="text-xs leading-relaxed text-muted/80">
          © {new Date().getFullYear()} Yu-Gi-Oh! Fan Site. This is an unofficial fan project and is
          not affiliated with, endorsed by, or sponsored by Konami. Yu-Gi-Oh! and all related
          names, characters and card images are trademarks and property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
