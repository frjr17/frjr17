import Image from "next/image";
import { projects } from "../lib/data";
import Link from "next/link";

export default function Works() {
  return (
    <section id="works" className="s-works target-section">
      <div className="row">
        <div className="column xl-12">
          <div className="section-header" data-num="02">
            <h2 className="text-display-title">Selected Works.</h2>
          </div>
        </div>
      </div>

      <div className="row folio-entries">
        {projects.map((project, i) => {
          // To mantain DRY
          const j = i < 10 ? i : "0" + i;
          return (
            <div key={project.name} className="column entry">
              <a
                href={project.imgUrl}
                className="entry__link glightbox"
                data-glightbox={`title: ${project.name}; description: .entry__desc-${j}`}
              >
                <div className="entry__thumb">
                  <Image
                    width={553.59}
                    height={553.59}
                    style={{
                      objectFit: "cover",
                      width: "553.59px",
                      height: "553.59px",
                    }}
                    src={project.imgUrl}
                    alt={project.name}
                  />
                </div>
                <div className="entry__info">
                  <h1 className="entry__title">{project.name}</h1>
                  <div className="entry__cat">{project.description}</div>
                </div>
              </a>

              <div className={`glightbox-desc entry__desc-${j}`}>
                <p>{project.description}</p>
                <Link href={project.projectUrl}>Project Link</Link>.
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonials, Sooon... */}
      {/* <div className="row s-testimonials">
        <div className="column xl-12">
          <h3 className="s-testimonials__header">
            Hear it from My Happy Clients
          </h3>

          <div className="swiper-container s-testimonials__slider">
            <div className="swiper-wrapper">
              <div className="s-testimonials__slide swiper-slide">
                <div className="s-testimonials__author">
                  <Image
                    width={553.59}
                    height={553.59}
                    src="/images/avatars/user-02.jpg"
                    className="s-testimonials__avatar"
                    alt="testimonials__avatar"
                  />
                  <cite className="s-testimonials__cite">
                    <strong>John Rockefeller</strong>
                    <span>Standard Oil Co.</span>
                  </cite>
                </div>
                <p>
                  Molestiae incidunt consequatur quis ipsa autem nam sit enim
                  magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                  dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                  rem nihil nostrum. Laudantium quia consequatur molestias.
                </p>
              </div>

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-testimonials__author">
                  <Image
                    width={553.59}
                    height={553.59}
                    src="/images/avatars/user-03.jpg"
                    className="s-testimonials__avatar"
                    alt="testimonials__avatar"
                  />
                  <cite className="s-testimonials__cite">
                    <strong>Andrew Carnegie</strong>
                    <span>Carnegie Steel Co.</span>
                  </cite>
                </div>
                <p>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Voluptatem dignissimos ut ducimus accusantium
                  perspiciatis. Quasi voluptas eius distinctio. Atque eos
                  maxime.
                </p>
              </div>

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-testimonials__author">
                  <Image
                    width={56}
                    height={56}
                    src="/images/avatars/user-01.jpg"
                    className="s-testimonials__avatar"
                    alt="testimonials__avatar"
                  />
                  <cite className="s-testimonials__cite">
                    <strong>John Morgan</strong>
                    <span>JP Morgan & Co.</span>
                  </cite>
                </div>
                <p>
                  Repellat dignissimos libero. Qui sed at corrupti expedita
                  voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum
                  accusamus. Quasi voluptas eius distinctio. Voluptatem
                  dignissimos ut.
                </p>
              </div>

              <div className="s-testimonials__slide swiper-slide">
                <div className="s-testimonials__author">
                  <Image
                    width={56}
                    height={56}
                    src="/images/avatars/user-06.jpg"
                    className="s-testimonials__avatar"
                    alt="testimonials__avatar"
                  />
                  <cite className="s-testimonials__cite">
                    <strong>Henry Ford</strong>
                    <span>Ford Motor Co.</span>
                  </cite>
                </div>
                <p>
                  Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac
                  augue. Fusce vel dui. In ac felis quis tortor malesuada
                  pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti
                  expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut
                  sed ipsam.
                </p>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
