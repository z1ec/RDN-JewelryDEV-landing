const portfolioItems = [
  {
    title: "Aurielle Fine Jewelry (демо)",
    stack: "React, TypeScript, Shopify API",
    done: "Собран премиальный UI каталога, фильтры и конверсионные карточки товаров.",
    result: "Концепт / демо: +22% к добавлению в корзину (модельный результат).",
  },
  {
    title: "Maison Lume (демо)",
    stack: "React, Tailwind, Headless CMS",
    done: "Разработана имиджевая главная страница с фокусом на коллекции.",
    result: "Концепт / демо: улучшена навигация и поиск по коллекциям.",
  },
  {
    title: "Noir Atelier (демо)",
    stack: "React, Vite, SEO schema",
    done: "Реализованы быстрые лендинговые сценарии и SEO-архитектура контента.",
    result: "Концепт / демо: производительность Lighthouse до 95+.",
  },
];

export default function Work() {
  return (
    <section id="work" className="pb-20">
      <div
        data-sync-black-block
        data-sync-corners="bottom"
        className="bg-eerie py-20 will-change-[clip-path]"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-ivory/60">Кейсы</p>
          <h2 className="mt-4 font-serif text-ivory text-3xl md:text-4xl">Кейсы и концепты</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-6 transition duration-300 ease-out hover:border-gold/35"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-gold">
                  {item.stack}
                </p>
                <p className="mt-4 text-sm text-eerie/75">{item.done}</p>
                <p className="mt-3 text-sm text-eerie/60">{item.result}</p>
                <button className="mt-6 rounded-full border border-eerie/20 px-4 py-2 text-sm transition duration-200 ease-out hover:border-gold hover:text-gold">
                  Смотреть детали
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
