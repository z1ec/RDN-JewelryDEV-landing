const steps = [
  "Созвон и бриф",
  "Исследование ниши и аудитории",
  "Структура и вайрфреймы",
  "Реализация UI на React",
  "Оптимизация скорости и SEO",
  "Запуск и сопровождение",
];

export default function Process() {
  return (
    <section id="process" className="bg-ivory py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm uppercase tracking-[0.18em] text-eerie/60">Процесс</p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          Понятный процесс из 6 этапов
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative rounded-2xl border border-black/10 bg-white p-5 text-center"
            >
              {index < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-[1px] w-4 bg-gold lg:block" />
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
