import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function GemIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 9.5 7.5 4h9L21 9.5 12 20 3 9.5Z" />
      <path d="M7.5 4 12 20 16.5 4" />
      <path d="M3 9.5h18" />
    </svg>
  );
}

function GaugeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="M12 14 16.5 9.5" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6 9h12l-1 11H7L6 9Z" />
      <path d="M9 9V7a3 3 0 1 1 6 0v2" />
    </svg>
  );
}

const valueProps = [
  {
    title: "Внимание к деталям",
    description:
      "Прорабатываю сайт как ювелирное изделие! Создаю утонченный и интуитивно понятный дизайн для всех групп клиентов.",
    icon: GemIcon,
  },
  {
    title: "Опыт в ювелирной нише",
    description:
      "Понимаю специфику ювелирного производства и ожидания клиентов, поэтому сайт не просто красивый, а точно передает ценность украшений.",
    icon: BagIcon,
  },
  {
    title: "Современные технологии",
    description:
      "Использую актуальный стек разработки, чтобы сайт был быстрым, стабильным и удобным в поддержке и развитии.",
    icon: GaugeIcon,
  },
];

export default function WhyChooseMe() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-value-card]"));
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
    <section ref={sectionRef} className="bg-ivory py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm uppercase tracking-[0.18em] text-black/60">Почему я</p>
        <div className="relative max-w-[300px] md:max-w-[500px]">
          <h2 className="mt-4 font-serif text-3xl text-black md:text-3xl">
            Почему бренды выбирают меня?
          </h2>
          <div className="absolute right-10 -top-8 md:-right-0 md:-top-8 mt-6 h-6 w-8 border-r-2 border-t-2 border-gold" />
          <div className="absolute -left-4 -bottom-4 mt-6 h-6 w-8 border-l-2 border-b-2 border-gold" />
        </div>


        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                data-value-card
                style={{ transitionDelay: `${index * 350}ms` }}
                className="rounded-2xl border border-white/10 bg-eerie p-6 opacity-0 translate-y-6 transition-[opacity,transform,border-color] duration-700 ease-out will-change-transform hover:border-gold/40 [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
              >
                <Icon className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
