import Link from "next/link";
import { awards, experience, skills } from "../lib/data";

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
                {experience.map((work) => {
                  return (
                    <li key={work.position}>
                      {work.position}
                      <span>
                        {work.company} <br />
                        {work.date}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Awards</h4>

              <ul className="s-about__list">
                {awards.map((award) => {
                  return (
                    <li key={award.title}>
                      <Link href={award.href}>
                        {award.title}
                        <span>
                          {award.institution} — {award.year}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid-list-items__item s-about__block">
              <h4 className="s-about__block-title">Skills</h4>
              <ul className="s-about__list">
                {skills.map((skill) => {
                  return (
                    <li key={skill.name}>
                      {skill.name}
                      {skill.description && <span>{skill.description}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
