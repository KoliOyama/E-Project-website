//style
import "./home.scss";

//images
import Heroimg from "../../assets/hero-image.jpg";
import About from "../../assets/about-us-img.png";
import Trad from "../../assets/trad-calligraphy-img.jpg";
import Modern1 from "../../assets/modern-cal-img1.jpg";
import Modern2 from "../../assets/modern-cal-img2.jpg";
import Modern3 from "../../assets/modern calligraphy3.jpg";
import Hand from "../../assets/hand-lettering.jpg";
import Gcard1 from "../../assets/chinese calligraphy1.jpg";
import Gcard2 from "../../assets/samir-bouaked-MFvflDBZdyM-unsplash.jpg";
import Gcard3 from "../../assets/arabic-calligraphy.jpg";

//icons
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="home">
      {/*******Hero section*******/}
      <section className="home__hero-section px-large">
        <div className="home__top">
          <div className="home__hero-display">
            <h1>
              Discover, Learn, <br />
              and Explore <br />
              Calligraphy
            </h1>
          </div>
          <div className="hero__img-wrapper">
            <div className="home__img-container">
              <img className="hero__img" src={Heroimg} alt="" />
            </div>
          </div>
        </div>

        <div className="home__paragraphs">
          <p>
            The word calligraphy comes from the Greek Kallos and Graaphien,
            meaning beautiful and writing. However, before calligraphy became
            known as an art form, it was just considered writing;
          </p>
          <p>
            The very first known record of writing dates around 3500 years BC in
            Mesopotamia present-day Iraq. This is known as the Cuneiform script,
            which mainly consisted of making marks on wet clay tablets. 
          </p>
        </div>

        <button class="hero__scroll">
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
      <section className="about py-8">
        <div className="about__img-container">
          <img className="about__img" src={About} alt="" />
        </div>

        <div className="about__info-wrapper">
          <div className="about__info">
            <div className="about__heading">
              <h3 className="about__caption caption">About us</h3>
              <h1 className="about__title">Get to know us</h1>
            </div>

            <div className="about__body paragraph2">
              <p className="about__paragraph paragraph">
                At Scratchy Nib, we’re passionate about the art of writing.
                Whether you’re a seasoned calligrapher or just dipping your pen
                into the inkwell, we’re here to inspire and empower you on your
                creative journey
              </p>
              <p className="about__paragraph paragraph">
                Scratchy Nib was born out of a love for handwritten expression.
                We believe that every stroke of the nib carries a piece of your
                soul, and every ink spill tells a story. Our mission is to
                celebrate the imperfect beauty of handwritten words—the smudges,
                the quirks, and the unexpected flourishes.
              </p>
            </div>
            <button>Learn more</button>
          </div>
        </div>
      </section>

      {/*******Learn section*******/}
      <section className="learn px-large">
        <div className="learn__copy">
          <div className="heading">
            <h3 className="caption">Learn</h3>
            <h1 className="title">Forms and styles of Calligraphy</h1>
          </div>
          <p className="body">
            Explore various ways of writing beautifully. Delve into the timeless
            allure of traditional scripts, the creative freedom of modern
            styles, and the expressive beauty of hand-lettering and design.
          </p>
        </div>

        {/*traditional calligraphy*/}
        <section className="learn__item trad-calligraphy">
          <div className="learn-img-container">
            <img className="learn-img" src={Trad} alt="" />
          </div>

          <div className="learn__description">
            <div className="learn__style-copy">
              <h2 className="title">Traditional Calligraphy</h2>
              <div className="learn__style-paragraph">
                <p>
                  Traditional calligraphy is a timeless art form that transcends
                  mere writing; it's a delicate dance of ink on paper, embodying
                  centuries of cultural heritage and historical significance.
                  Rooted in rich traditions across diverse cultures, traditional
                  calligraphy encompasses a myriad of styles, each with its own
                  unique flair and elegance.
                </p>
              </div>
              <p>
                Subcategories of traditional calligraphy include - Arabic,
                Indic, Greek, Chineese, Japanese calligraphy, and many others
              </p>
            </div>
            <button>View more</button>
          </div>
        </section>

        {/*modern calligraphy*/}
        <section className="learn__item modern-calligraphy">
          <div className="learn__img-container">
            <img className="learn__img" src={Modern1} alt="" />
          </div>

          <div className="learn__description modern-description">
            <div className="learn__style-copy">
              <div className="learn__style-copy-wrapper">
                <h2 className="title">Modern Calligraphy</h2>
                <div className="learn__style-paragraph">
                  <p>
                    Modern calligraphy offers fresh perspectives on the age-old
                    art, blending tradition with innovation. Drawing from
                    classical techniques, modern calligraphers explore new
                    avenues through experimentation.
                  </p>
                </div>
              </div>
              <div className="learn__extra-imgs">
                <img src={Modern2} alt="" />
                <img src={Modern3} alt="" />
              </div>
            </div>
            <button>View more</button>
          </div>
        </section>

        {/*Hand-lettering and design*/}
        <section className="learn__item hand-lettering">
          <div className="learn__description">
            <div className="learn__style-copy">
              <h2 className="title">Hand-Lettering & Design</h2>
              <div className="learn__style-paragraph">
                <p>
                Hand-lettering and design involves crafting custom letterforms by hand, complemented by brush lettering's expressive strokes and digital calligraphy's precision. 
                </p>
              </div>
              <p>
              Brush lettering employs brush pens for fluid letters, while digital calligraphy merges traditional methods with digital tools, ideal for various design applications.
              </p>
            </div>
            <button>View more</button>
          </div>

          <div className="learn__img-container">
            <img className="learn__img" src={Hand} alt="" />
          </div>
        </section>
      </section>

      {/*******Gallery section*******/}
      <section className="gallery px-large">
        <div className="gallery__copy">
          <div className="heading">
            <h3 className="caption">Gallery</h3>
            <h1 className="title">Our Curated Collection</h1>
          </div>
          <p className="body">
            Explore our collection of calligraphic masterpieces. Browse through
            a variety of styles, scripts, and letterforms.
          </p>
        </div>

        <div className="gallery__cards">
          <div className="card">
            <img src={Gcard1} alt="" />
          </div>

          <div className="card">
            <img src={Gcard2} alt="" />
          </div>

          <div className="card">
            <img src={Gcard3} alt="" />
          </div>
        </div>

        <button>View more</button>
      </section>

      {/*******Contact section*******/}
      <section className="contact">
        <img src="" alt="" className="contact__img" />
        <div className="contact__info">
          <h1 className="contact__title title">Connect with us</h1>

          <div className="contact__items">
            <div className="contact__item">
              <HiOutlineMail />
              <p className="contact__body">thescratchynib@gmail.com</p>
            </div>
            <CiLocationOn />
            <div className="contact__item">
              <p className="contact__body">152 lane Mumbai</p>
            </div>

            <div className="contact__item">
              <HiOutlinePhone />
              <p className="contact__body">238 458 377</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
