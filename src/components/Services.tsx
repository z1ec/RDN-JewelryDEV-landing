import { useEffect, useRef } from "react";

const services = [
  {
    title: "Каталожные сайты для ювелирных брендов",
    bullets: [
      "Структура страниц вокруг коллекций",
      "Премиальная подача карточек товаров",
      "Кастомные фильтры и логика категорий",
    ],
  },
  {
    title: "Конверсионные карточки товаров",
    bullets: [
      "Макеты с акцентом на важные детали",
      "Блоки доверия и преимущества материалов",
      "Удобный мобильный сценарий покупки",
    ],
  },
  {
    title: "Интеграции и автоматизация",
    bullets: [
      "Интеграции с CRM и формами лидогенерации",
      "Настройка аналитики и отслеживания событий",
      "Подключение e-commerce инфраструктуры",
    ],
  },
  {
    title: "SEO и производительность",
    bullets: [
      "Техническая база для SEO",
      "Оптимизация Core Web Vitals",
      "Семантичный и масштабируемый фронтенд-код",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const servicesSection = section;
      const workSection = document.getElementById("work");
      const blocks = Array.from(
        document.querySelectorAll<HTMLElement>("[data-sync-black-block]")
      );
      if (!workSection || blocks.length === 0) return;

      const viewportHeight = window.innerHeight || 1;
      const startLine = viewportHeight * 0.3;
      const endLine = viewportHeight * 0.7;
      const servicesRect = servicesSection.getBoundingClientRect();
      const workRect = workSection.getBoundingClientRect();
      const maxInset = Math.max(24, Math.min(120, window.innerWidth * 0.12));
      const baseRadius = 24;
      let inset = 0;

      // Before the blocks reach the start line: inset decreases to zero.
      if (servicesRect.top > startLine) {
        const distanceToMid = servicesRect.top - startLine;
        const startDistance = Math.max(1, viewportHeight - startLine);
        inset = Math.min(1, distanceToMid / startDistance) * maxInset;
      }

      // After the blocks are above the end line: inset increases again.
      if (workRect.bottom < endLine) {
        const distanceAboveMid = endLine - workRect.bottom;
        const endDistance = Math.max(1, endLine);
        inset = Math.min(1, distanceAboveMid / endDistance) * maxInset;
      }

      blocks.forEach((block) => {
        const corners = block.dataset.syncCorners;
        block.style.marginInline = `${inset.toFixed(2)}px`;

        if (corners === "top") {
          block.style.borderTopLeftRadius = `${baseRadius}px`;
          block.style.borderTopRightRadius = `${baseRadius}px`;
        }

        if (corners === "bottom") {
          block.style.borderBottomLeftRadius = `${baseRadius}px`;
          block.style.borderBottomRightRadius = `${baseRadius}px`;
        }
      });
    };

    const onScrollOrResize = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    update();

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-ivory pt-20">
      <div
        data-sync-black-block
        data-sync-corners="top"
        className="bg-eerie py-20 will-change-[margin,border-radius]"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-ivory/60">Услуги</p>
          <h2 className="mt-4 font-serif text-ivory text-3xl md:text-4xl">
            Мои услуги для ювелирного бизнеса
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-black/10 bg-ivory p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition duration-300 ease-out hover:border-gold/35"
              >
                <div className="mb-4 h-[2px] w-14 bg-gold" />
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-eerie/75">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
