//style
import "./home.scss";

//images
import Heroimg from "../../assets/hero-image.jpg";
import Aboutimg from "../../assets/about-us-img.png";
import Trad from "../../assets/trad-calligraphy-img.jpg";
import Modern1 from "../../assets/modern-cal-img1.jpg";
import Hand from "../../assets/hand-lettering.jpg";
import Gcard1 from "../../assets/chinese calligraphy1.jpg";
import Gcard2 from "../../assets/samir-bouaked-MFvflDBZdyM-unsplash.jpg";
import Gcard3 from "../../assets/arabic-calligraphy.jpg";
import Contactimg from "../../assets/contact-section-img.jpg";

//icons
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home">
      {/*******Hero section*******/}
      <section className="home__hero-section container">
        <div className="hero-content">
          <div className="hero-top">
            <div className="hero-display">
              <h1>Discover, Learn, and Explore Calligraphy</h1>
            </div>
            <div className="hero-img-wrapper">
              <div className="hero-img-container">
                <img className="hero-img" src={Heroimg} alt="" />
              </div>
            </div>
          </div>

          <div className="hero-paragraphs">
            <p>
              The word calligraphy comes from the Greek Kallos and Graaphien,
              meaning beautiful and writing. However, before calligraphy became
              known as an art form, it was just considered writing;
            </p>
            <p>
              The very first known record of writing dates around 3500 years BC
              in Mesopotamia present-day Iraq. This is known as the Cuneiform
              script, which mainly consisted of making marks on wet clay
              tablets. 
            </p>
          </div>
        </div>

        <button class="hero-scroll">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white chevron"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="32"
            fill="none"
            viewBox="0 0 14 8"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2"
          >
            <path d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"></path>
          </svg>
        </button>
      </section>

      {/*******About section*******/}
      <section className="home__about-section">
        <div className="about-img-container">
          <img className="about-img" src={Aboutimg} alt="" />
        </div>

        <div className="about-info-wrapper ">
          <div className="about-info">
            <div className="about-heading">
              <h3 className="about-caption caption">About us</h3>
              <h1 className="about-title title">Get to know us</h1>
            </div>

            <div className="about-body paragraph2">
              <p className="about-paragraph paragraph">
                At Scratchy Nib, we’re passionate about the art of writing.
                Whether you’re a seasoned calligrapher or just dipping your pen
                into the inkwell, we’re here to inspire and empower you on your
                creative journey.
              </p>
            </div>
            <button className="btn-light">
              Learn more <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/*******Learn section*******/}
      <section className="home__learn-section container section-py">
        <div className="learn-copy">
          <div className="learn-heading">
            <h3 className="caption">Learn</h3>
            <h1 className="title">Forms and styles of Calligraphy</h1>
          </div>
          <p className="body paragraph">
            Explore various ways of writing beautifully. Delve into the timeless
            allure of traditional scripts, the creative freedom of modern
            styles, and the expressive beauty of hand-lettering and design.
          </p>
        </div>

        {/*traditional calligraphy*/}
        <div className="learn-item trad-calligraphy">
          <div className="learn-img-container">
            <img className="learn-img" src={Trad} alt="" />
          </div>

          <div className="learn-description">
            <div className="learn-style-copy">
              <h2 className="title">Traditional Calligraphy</h2>
              <div className="learn-style-paragraph">
                <p>
                  Traditional calligraphy is a timeless art form that transcends
                  mere writing; it's a delicate dance of ink on paper, embodying
                  centuries of cultural heritage and historical significance.
                  Rooted in rich traditions across diverse cultures, traditional
                  calligraphy encompasses a myriad of styles, each with its own
                  unique flair and elegance.
                </p>
                <p>
                  Subcategories of traditional calligraphy include - Arabic,
                  Indic, Greek, Chineese, Japanese calligraphy, and many others
                </p>
              </div>
            </div>
            <button className="btn-dark">
              View more <FaArrowRight />
            </button>
          </div>
        </div>

        {/*modern calligraphy*/}
        <div className="learn-item modern-calligraphy">
          <div className="learn-img-container">
            <img className="learn-img" src={Modern1} alt="" />
          </div>

          <div className="learn-description modern-description">
            <div className="modern-style-wrapper">
              <h2 className="title">Modern Calligraphy</h2>
              <div className="learn-style-paragraph">
                <p>
                  Modern calligraphy offers fresh perspectives on the age-old
                  art, blending tradition with innovation. Drawing from
                  classical techniques, modern calligraphers explore new avenues
                  through experimentation.
                </p>
                <p>
                  In the realm of modern calligraphy, boundaries are meant to be
                  pushed, conventions challenged, and creativity unleashed. As
                  practitioners experiment with new tools, techniques, and
                  mediums, modern calligraphy becomes a playground for
                  innovation and self-expression.
                </p>
              </div>
            </div>

            <button className="btn-dark">
              View more
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/*Hand-lettering and design*/}
        <div className="learn-item hand-lettering">
          <div className="learn-description">
            <div className="learn-style-copy">
              <h2 className="title">Hand-Lettering & Design</h2>
              <div className="learn-style-paragraph">
                <p>
                  Hand-lettering and design involves crafting custom letterforms
                  by hand, complemented by brush lettering's expressive strokes
                  and digital calligraphy's precision.
                </p>
              </div>
              <p>
                Brush lettering employs brush pens for fluid letters, while
                digital calligraphy merges traditional methods with digital
                tools, ideal for various design applications.
              </p>
            </div>
            <button className="btn-dark">
              View more <FaArrowRight />
            </button>
          </div>

          <div className="learn-img-container">
            <img className="learn-img" src={Hand} alt="" />
          </div>
        </div>
      </section>

      {/*******Gallery section*******/}
      <section className="home__gallery section-py">
        <div className="gallery-content container">
          <div className="gallery-copy">
            <div className="gallery-heading">
              <h3 className="gallery-caption caption">Gallery</h3>
              <h1 className="gallery-title title">Our Curated Collection</h1>
            </div>
            <p className="body paragraph">
              Explore our collection of calligraphic masterpieces. Browse
              through a variety of styles, scripts, and letterforms.
            </p>
          </div>

          <div className="gallery-cards">
            <div className="gallery-card">
              <img src={Gcard1} alt="" />
            </div>

            <div className="gallery-card">
              <img src={Gcard2} alt="" />
            </div>

            <div className="gallery-card">
              <img src={Gcard3} alt="" />
            </div>
          </div>

          <button className="btn-light">
            View more <FaArrowRight />
          </button>
        </div>
      </section>

      {/*******Contact section*******/}
      <section className="home__contact-section">
        <div className="contact-img-container">
          <img src={Contactimg} alt="" className="contact-img" />
        </div>

        <div className="contact-info-wrapper container">
          <div className="contact-info">
            <h1 className="contact-title title">Connect with us</h1>

            <div className="contact-items">
              <div className="contact-item">
                <MdOutlineEmail />
                <p className="contact-body">152 lane Mumbai</p>
              </div>

              <div className="contact-item">
                <IoLocationOutline />
                <p className="contact-body">152 lane Mumbai</p>
              </div>

              <div className="contact-item">
                <IoCallOutline />
                <p className="contact-body">238 458 377</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
