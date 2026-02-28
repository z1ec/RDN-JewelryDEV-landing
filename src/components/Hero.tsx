import heroImage from "../assets/hero_image.png";

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-5rem)] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="фон основной секции с примером работы"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-eerie/55" />

      <div className="relative h-full w-full">
        <div className="absolute bottom-6 left-2 max-w-2xl text-ivory md:bottom-48 md:left-16">
          <p className="text-sm uppercase tracking-[0.18em] text-white/75">
            Веб-разработчик для ювелирных компаний
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Премиальные сайты для ювелирных брендов
          </h1>
          <div className="mt-6 h-[2px] w-16 bg-gold" />
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Создаю элегантные сайты с фокусом на детали, которые усиливают
            онлайн-продажи и премиальное восприятие бренда.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gold px-6 py-3 text-sm text-eerie transition duration-300 ease-out hover:bg-white"
            >
              Обсудить проект
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm text-ivory transition duration-200 ease-out hover:border-gold hover:text-gold"
            >
              Получить аудит сайта
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
