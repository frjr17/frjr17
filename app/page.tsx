"use client";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Numbers from "./components/numbers";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="page" className="s-pagewrap">
        <Header />
        <Intro />
        <About />
        <Works />
        <Numbers />
        <Footer />
      </div>
      <script src="/js/plugins.js" async></script>
      <script src="/js/main.js" async></script>
    </>
  );
}
