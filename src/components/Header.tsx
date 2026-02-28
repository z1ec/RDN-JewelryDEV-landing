import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#work" },
  { label: "Процесс", href: "#process" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let frameId = 0;
    const directionThreshold = 8;

    const updateHeaderState = () => {
      frameId = 0;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY <= 12) {
        setIsHidden(false);
      } else if (delta > directionThreshold) {
        setIsHidden(true);
      } else if (delta < -directionThreshold) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateHeaderState);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-20 border-b border-black/5 bg-ivory/80 backdrop-blur transition-transform duration-300 ease-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide">
          Vladimir Dev
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-eerie/75 transition duration-200 ease-out hover:text-eerie"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-eerie px-5 py-2.5 text-sm text-ivory transition duration-300 ease-out hover:bg-gold hover:text-eerie"
        >
          Обсудить проект
        </a>
      </div>
    </header>
  );
}
