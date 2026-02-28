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
  return (
    <section id="services" className="bg-ivory py-20">
      <div className="bg-eerie py-20 rounded-tl-3xl rounded-tr-3xl">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-ivory/60">Услуги</p>
          <h2 className="mt-4 font-serif text-ivory text-3xl md:text-4xl">
            Мои услуги для ювелирного бизнеса
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition duration-300 ease-out hover:border-gold/35"
              >
                <div className="mb-4 h-[2px] w-10 bg-gold" />
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
