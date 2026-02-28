const links = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#work" },
  { label: "Процесс", href: "#process" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];
const socials = ["LinkedIn", "Dribbble", "GitHub"];

export default function Footer() {
  return (
    <footer className="bg-eerie py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Vladimir Dev. Все права защищены.</p>

        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition duration-200 ease-out hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a key={social} href="#" className="transition duration-200 ease-out hover:text-gold">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
