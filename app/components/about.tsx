import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content">
        <div className="column xl-12">
          <div className="section-header" data-num="01">
            <h2 className="text-display-title">About Me.</h2>
          </div>

          <p className="attention-getter">
            Hey there, I&apos;m Hernan Dominguez, a fullstack web developer
            based in Panama. Currently studying System Engineering at
            Universidad Interamericana de Panama, my journey into the tech world
            started with my love for chess, fostering strategic thinking and
            problem-solving.
          </p>

          <p className="attention-getter">
            My expertise lies in creating seamless digital experiences. From
            mastering Next.js and Redux for dynamic web applications, to
            utilizing Bootstrap, tailwind & ChakraUI for stylish interfaces,
            I&apos;m all about blending function with aesthetics. Beyond coding,
            you&apos;ll find me at the chessboard, applying the same strategic
            mindset to my work. Join me in exploring the limitless possibilities
            at the intersection of technology and creativity.
          </p>

          <div className="grid-list-items s-about__blocks">
            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Experience</h4>
              <ul className="s-about__list">
                <li>
                  Solusoft
                  <span>Practitioner</span>
                </li>
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Awards</h4>

              <ul className="s-about__list">
                <li>
                  <Link href="https://www.freecodecamp.org/certification/frjr17/responsive-web-design">
                    Responsive Web Design
                    <span>freeCodeCamp — 2023</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.freecodecamp.org/certification/frjr17/javascript-algorithms-and-data-structures">
                    JavaScript Algorithms and Data Structures
                    <span>freeCodeCamp - 2023</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.freecodecamp.org/certification/frjr17/front-end-development-libraries">
                    Frontend Development Libraries
                    <span>freeCodeCamp - 2023</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>
              <ul className="s-about__list">
                <li>Front End Development</li>
                <li>Back End Development</li>
                <li>Graphic Design</li>
                <li>UI/UX</li>
                <li>DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}