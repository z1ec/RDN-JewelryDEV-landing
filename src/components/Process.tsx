import { useEffect, useRef } from "react";

const steps = [
  "Созвон и составление ТЗ",
  "Исследование ниши и аудитории",
  "Создание и утверждение макета",
  "Реализация UX & UI, тестирование",
  "Оптимизация скорости и SEO",
  "Запуск и сопровождение",
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-step-card]"));
    if (!cards.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm uppercase tracking-[0.18em] text-eerie/60">Процесс</p>
        <div className="relative md:max-w-[700px]">
          <div className="absolute -left-4 -bottom-4 mt-6 h-6 w-8 border-l-2 border-b-2 border-gold" />
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Принцип работы над вашим проектом
          </h2>
          <div className="absolute right-4 md:right-2 -top-8 mt-6 h-6 w-8 border-r-2 border-t-2 border-gold" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              data-step-card
              style={{ transitionDelay: `${index * 140}ms` }}
              className="relative rounded-2xl border border-black/10 bg-white p-5 text-center opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-500 ease-out will-change-transform [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
            >
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-[1px] w-4 bg-gold lg:block" />
              )}
              <p className="text-xs uppercase tracking-[0.14em] text-gold">
                Этап {index + 1}
              </p>
              <p className="mt-2 text-sm text-eerie/80">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
