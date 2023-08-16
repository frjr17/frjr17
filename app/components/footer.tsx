import Link from "next/link";
import { socialNetworks } from "../lib/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="s-footer target-section">
      <div className="row">
        <div className="column lg-12">
          <div className="section-header light-on-dark" data-num="03">
            <h2 className="text-display-title">Get In Touch.</h2>
          </div>
        </div>
      </div>

      <div className="row s-footer__content">
        <div className="column xl-6 md-12 s-footer__block s-footer__about">
          <p className="attention-getter">
            I&apos;m excited to connect with you! Whether you&apos;re interested
            in collaborating on a project, have questions about my services, or
            just want to say hello, I&apos;m here and ready to engage. Your
            ideas and inquiries are important to me, and I&apos;m eager to
            discuss how I can assist you in achieving your goals. Feel free to
            reach out through the provided contact information, and I&apos;ll
            make sure to respond as soon as possible. Let&apos;s start a
            conversation and explore the possibilities together!
          </p>
        </div>

        <div className="column xl-6 md-12 s-footer__block s-footer__site-links">
          <div className="row">
            <div className="column xl-4 lg-5 md-6 tab-12">
              <h5>Follow Me</h5>
              <ul className="link-list">
                {socialNetworks.map((network) => {
                  return (
                    <li key={network.name}>
                      <Image
                        src={network.path}
                        height={15}
                        width={15}
                        alt={network.name}
                        style={{ marginBottom: 0, marginRight: 15 }}
                      />
                      <Link href={network.href}>{network.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="column xl-6 md-6 tab-12">
              <h5>Contact Me</h5>
              <ul className="link-list">
                <li>
                  <a href="mailto:hernanadrianv17@gmail.com">
                    hernanadrianv17@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+50768159323">+507 68159323</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row s-footer__buttons">
        <div className="column xl-6 tab-12">
          <Link
            target="_blank"
            href="mailto:hernanadrianv17@gmail.com"
            className="btn btn--primary btn--large u-fullwidth"
          >
            Message Me
          </Link>
        </div>

        <div className="column xl-6 tab-12">
          <Link
            target="_blank"
            href="/resume.pdf"
            className="btn btn--stroke btn--large u-fullwidth"
          >
            Get My CV
          </Link>
        </div>
      </div>

      <div className="row s-footer__bottom">
        <div className="column xl-6 lg-12">
          <ul className="s-footer__social social-list">
            {socialNetworks.map((network) => {
              return (
                <li key={network.name}>
                  <Link href={network.href}>
                    <Image
                      src={network.path}
                      height={15}
                      width={15}
                      alt={network.name}
                      style={{ marginBottom: 0 }}
                    />
                    <span className="u-screen-reader-text">{network.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="column xl-6 lg-12">
          <p className="ss-copyright">
            <span>© Copyright frjr17 2023</span>
            <span>
              Coded by <a href="https://github.com/frjr17">Frjr17</a>
            </span>
          </p>
        </div>
      </div>

      <div className="ss-go-top">
        <Link className="smoothscroll" title="Back to Top" href="#intro">
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
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
          </svg>
        </Link>
        <span>Back To Top</span>
      </div>
    </footer>
  );
}
