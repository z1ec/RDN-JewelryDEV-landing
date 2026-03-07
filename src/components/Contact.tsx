export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-black/10 bg-white p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-eerie/60">Контакты</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Обсудим ваш проект</h2>

          <form className="mt-8 grid gap-4">
            <input
              type="text"
              placeholder="Имя"
              className="rounded-xl border border-black/10 px-4 py-3 outline-none transition duration-200 ease-out focus:border-gold"
            />
            <input
              type="text"
              placeholder="Компания"
              className="rounded-xl border border-black/10 px-4 py-3 outline-none transition duration-200 ease-out focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-black/10 px-4 py-3 outline-none transition duration-200 ease-out focus:border-gold"
            />
            <textarea
              placeholder="Сообщение"
              rows={5}
              className="rounded-xl border border-black/10 px-4 py-3 outline-none transition duration-200 ease-out focus:border-gold"
            />
            <button
              type="submit"
              className="group mt-2 w-fit rounded-full bg-eerie px-6 py-3 text-sm text-ivory transition duration-300 ease-out hover:bg-gold hover:text-eerie"
            >
              Отправить заявку
              <span className="mt-1 block h-[1px] w-0 bg-eerie transition-all duration-300 group-hover:w-full" />
            </button>
          </form>
        </div>

        <aside className="rounded-2xl border border-black/10 bg-white p-7">
          <h3 className="font-serif text-2xl">Прямые контакты</h3>
          <div className="mt-5 space-y-3 text-sm">
            <a
              className="block text-eerie/75 transition hover:text-gold"
              href="mailto:vav3538@gmail.com"
            >
              Почта: vav3538@gmail.com
            </a>
            <a
              className="block text-eerie/75 transition hover:text-gold"
              href="https://fomin-vladimir.ru"
            >
              Портфолио: fomin-vladimir.ru
            </a>
            <a
              className="block text-eerie/75 transition hover:text-gold"
              href="https://t.me/f44gh"
            >
              Телеграм: @F44gh
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
