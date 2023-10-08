import Image from "next/image";
import { socialNetworks } from "../lib/data";
import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row s-intro__content width-sixteen-col">
        <div className="column lg-12 s-intro__content-inner grid-block grid-16">
          <div className="s-intro__content-text">
            <div className="s-intro__content-pretitle text-pretitle">Hello</div>
            <h1 className="s-intro__content-title">
              I&apos;m Adrien. <br />
              A Fullstack Developer <br />
              based in Panama.
            </h1>

            <div className="s-intro__content-btns">
              <a className="smoothscroll btn" href="#about">
                More About Me
              </a>
              <a className="smoothscroll btn btn--stroke" href="#footer">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul className="s-intro__social social-list">
        {socialNetworks.map((socialNet) => {
          return (
            <li key={socialNet.name}>
              <Link href={socialNet.href} target="_blank">
                <Image
                  src={socialNet.path}
                  width={24}
                  height={24}
                  alt={socialNet.name}
                  style={{ marginBottom: 0 }}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="s-intro__content-media">
        <Image src="/images/intro-bg.jpg" width={674.5} height={864} alt="" />
      </div>

      <div className="s-intro__btn-download">
        <Link
          target="_blank"
          href="/resume.pdf"
          className="btn btn--stroke btn--large u-fullwidth"
          style={{ marginBottom: 5 }}
        >
          Get My CV
        </Link>
      </div>

      <div className="s-intro__scroll-down">
        <a href="#about" className="smoothscroll">
          <div className="scroll-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "",
                msFilter: "",
              }}
            >
              <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
            </svg>
          </div>
          <span className="scroll-text u-screen-reader-text">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
