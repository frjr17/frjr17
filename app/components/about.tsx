export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-12">
          <div className="section-header" data-num="01">
            <h2 className="text-display-title">About Me.</h2>
          </div>

          <p className="attention-getter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            explicabo id debitis cupiditate cumque, error quia! Debitis
            cupiditate ipsa nihil labore, earum atque dolor quos saepe vero
            inventore, odit nam deleniti accusantium omnis mollitia consequatur
            harum incidunt! Ex modi aut repudiandae doloremque commodi
            recusandae labore sit. Perspiciatis omnis dolor dolores fuga iusto,
            recusandae animi nisi consequuntur exercitationem id maxime earum
            pariatur voluptas! Porro non quos quae tempora fuga quis sequi minus
            sed sint debitis reiciendis, nostrum natus suscipit iusto odio.
          </p>

          <p className="attention-getter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit. Ut enim ad minim
          </p>

          <div className="grid-list-items s-about__blocks">
            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Experience</h4>
              <ul className="s-about__list">
                <li>
                  Spotify
                  <span>Product Designer</span>
                </li>
                <li>
                  Dropbox
                  <span>Interface Developer</span>
                </li>
                <li>
                  Google
                  <span>Lead UI Designer</span>
                </li>
                <li>
                  Figma
                  <span>UI Designer</span>
                </li>
                <li>
                  Microsoft
                  <span>UI Designer</span>
                </li>
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Awards</h4>

              <ul className="s-about__list">
                <li>
                  <a href="#0">
                    Site Of The Month
                    <span>Awwwards — 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Site Of The Day
                    <span>Awwwards — 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Agency of The Year
                    <span>Awwwards — 2022</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    FWA of The Month
                    <span>FWA — 2022</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    Site Of The Month
                    <span>Awwwards — 2022</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>

              <ul className="s-about__list">
                <li>Product Design</li>
                <li>UI/UX Design</li>
                <li>Prototyping</li>
                <li>Frontend Development</li>
                <li>Illustration</li>
                <li>Visual Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
