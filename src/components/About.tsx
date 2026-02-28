const stats = [
  { label: "От идеи до финальной версии", value: "Полный цикл" },
  { label: "Проектов в ювелирной нише", value: "10+" },
  { label: "Рост конверсии после редизайна", value: "+30-70%" },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-[1200px] rounded-2xl border border-black/10 bg-white px-6 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <p className="text-sm uppercase tracking-[0.18em] text-eerie/60">Обо мне</p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          Я создаю готовые решения для бизнеса
        </h2>
        <p className="mt-4 max-w-3xl text-eerie/75 max-w-[600px]">
          «Знаю, как важно передать ощущение ценности и доверия через визуал, и при этом сделать сайт быстрым, удобным и понятным для клиента — <b>чтобы он не просто смотрел, а покупал</b>.»
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-black/10 p-5">
              <p className="font-serif text-center text-3xl text-eerie">{stat.value}</p>
              <p className="mt-1 text-sm text-center text-eerie/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
