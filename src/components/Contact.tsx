export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-2xl border border-black/10 bg-white p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-eerie/60">Контакты</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Информация по проектам</h2>

          <div className="mt-8 grid gap-6">
            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="font-serif text-2xl">Контакты</h3>
              <div className="mt-4 space-y-2 text-sm text-eerie/75">
                <a className="block transition hover:text-gold" href="mailto:vav3538@gmail.com">
                  Почта: vav3538@gmail.com
                </a>
                <a className="block transition hover:text-gold" href="https://t.me/f44gh">
                  Телеграм: @F44gh
                </a>
                <a className="block transition hover:text-gold" href="https://fomin-vladimir.ru">
                  Портфолио: fomin-vladimir.ru
                </a>
              </div>
            </article>

            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="font-serif text-2xl">Сроки выполнения</h3>
              <ul className="mt-4 space-y-2 text-sm text-eerie/75">
                <li>Лендинг или сайт-визитка: от 3 до 10 рабочих дней.</li>
                <li>Сайт с каталогом: от 10 до 20 рабочих дней.</li>
                <li>Полноценный интернет-магазин: от 14 рабочих дней.</li>
              </ul>
            </article>

            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="font-serif text-2xl">Стоимость</h3>
              <ul className="mt-4 space-y-2 text-sm text-eerie/75">
                <li>Лендинг или сайт-визитка: от 20 000 ₽.</li>
                <li>Сайт с каталогом: от 30 000 ₽.</li>
                <li>Полноценный интернет-магазин: от 50 000 ₽.</li>
                <li>Точная цена формируется после обсуждения задач.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
