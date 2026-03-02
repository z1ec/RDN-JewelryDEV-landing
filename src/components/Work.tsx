import { useState } from "react";
import avroraLanding10 from "../assets/gallery/avrora_landing_1.0.png";
import avroraLanding11 from "../assets/gallery/avrora_landing_1.1.png";
import avroraLanding12 from "../assets/gallery/avrora_landing_1.2.png";
import avroraLanding13 from "../assets/gallery/avrora_landing_1.3.png";
import avroraLanding20 from "../assets/gallery/avrora_landing_2.0.png";
import avroraLanding21 from "../assets/gallery/avrora_landing_2.1.png";
import avroraLanding22 from "../assets/gallery/avrora_landing_2.2.png";
import avroraLanding23 from "../assets/gallery/avrora_landing_2.3.png";
import insales0 from "../assets/gallery/insales_0.png";
import insales1 from "../assets/gallery/insales_1.png";

const portfolioItems = [
  {
    title: "Avrora Landing 1",
    description:
      "Имиджевый лендинг с крупными фотоблоками, точечной типографикой и акцентом на историю бренда.",
    link: "https://z1ec.github.io/RDN-example-avrora",
    images: [avroraLanding10, avroraLanding11, avroraLanding12, avroraLanding13],
  },
  {
    title: "Avrora Landing 2",
    description:
      "Вариант лендинга с упором на визуальные коллекции, видео контента и последовательный сценарий просмотра.",
    link: "https://z1ec.github.io/RDN-example-avrora-2",
    images: [avroraLanding20, avroraLanding21, avroraLanding22, avroraLanding23],
  },
  {
    title: "InSales",
    description:
      "E-commerce сайты, для бизнеса на базе InSales. Удобный вариант для быстрого старта продаж.",
    link: "https://www.insales.ru",
    images: [insales0, insales1],
  },
];

export default function Work() {
  const [slideIndexes, setSlideIndexes] = useState(() => portfolioItems.map(() => 0));

  const showPrev = (cardIndex: number) => {
    setSlideIndexes((prev) =>
      prev.map((value, index) => {
        if (index !== cardIndex) return value;
        const imagesCount = portfolioItems[index].images.length;
        return (value - 1 + imagesCount) % imagesCount;
      })
    );
  };

  const showNext = (cardIndex: number) => {
    setSlideIndexes((prev) =>
      prev.map((value, index) => {
        if (index !== cardIndex) return value;
        const imagesCount = portfolioItems[index].images.length;
        return (value + 1) % imagesCount;
      })
    );
  };

  return (
    <section id="work" className="pb-20">
      <div
        data-sync-black-block
        data-sync-corners="bottom"
        className="bg-eerie py-20 will-change-[clip-path]"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-ivory/60">Кейсы</p>
          <h2 className="mt-4 font-serif text-ivory text-3xl md:text-4xl">Примеры реализованных работ</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolioItems.map((item, cardIndex) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-black/10 bg-ivory transition duration-300 ease-out hover:border-gold/35"
              >
                <div className="relative h-60 w-full bg-black/10 md:h-72">
                  <img
                    src={item.images[slideIndexes[cardIndex]]}
                    alt={`${item.title} экран ${slideIndexes[cardIndex] + 1}`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    onClick={() => showPrev(cardIndex)}
                    aria-label={`Предыдущий скриншот ${item.title}`}
                    className="absolute left-3 bottom-1 -translate-y-1/2 rounded-full border border-white/35 bg-black/35 px-3 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-black/50"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => showNext(cardIndex)}
                    aria-label={`Следующий скриншот ${item.title}`}
                    className="absolute right-3 bottom-1 -translate-y-1/2 rounded-full border border-white/35 bg-black/35 px-3 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-black/50"
                  >
                    →
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-eerie">{item.title}</h3>
                  <p className="mt-3 text-sm text-eerie/75">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-eerie/20 px-4 py-2 text-sm text-eerie transition duration-200 ease-out hover:border-gold hover:text-gold"
                  >
                    Перейти
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
