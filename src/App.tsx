/**
 * README (быстро):
 * 1) Запуск: npm install && npm run dev
 * 2) Тексты: редактируйте массивы контента в src/components/
 * 3) Цвета и шрифты: tailwind.config.js (ivory/eerie/gold/darkCard)
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-ivory text-eerie">
      <Header />
      <main>
        <Hero />
        <WhyChooseMe />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
