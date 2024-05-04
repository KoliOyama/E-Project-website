import "./about.scss";
import aboutImg from "../../assets/about-hero-image.png";
import teamImg from "../../assets/team-image.png";
import getInvolvedImg from "../../assets/get-involved-img.png";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <section className="about__hero-section">
        <div>
          <h1>About us</h1>
          <div>
            <p>
              At Scratchy Nib, we’re passionate about the art of writing.
              Whether you’re a seasoned calligrapher or just dipping your pen
              into the inkwell, we’re here to inspire and empower you on your
              creative journey
            </p>
            <p>
              Scratchy Nib was born out of a love for handwritten expression. We
              believe that every stroke of the nib carries a piece of your soul,
              and every ink spill tells a story. Our mission is to celebrate the
              imperfect beauty of handwritten words—the smudges, the quirks, and
              the unexpected flourishes.
            </p>
          </div>
        </div>
        <div>
          <img
            src={aboutImg}
            alt="A group of jovial women laughing together. One of the women holds a book with one hand."
          />
        </div>
      </section>
      <section className="about__team-section">
        <div>
          <img
            src={teamImg}
            alt="A group of people smiling and posing for a group photo."
          />
        </div>
        <div>
          <h2>Our Team</h2>
          <p>
            Behind Calligraphy Hub is a dedicated team of calligraphy
            enthusiasts, artists, and educators who are committed to sharing
            their passion for the art form. With a diverse range of backgrounds
            and expertise, our team brings together a wealth of knowledge and
            experience to guide you on your calligraphic journey.
          </p>
        </div>
      </section>
      <section className="about__get-involved-section">
        <div>
          <h2>Get Involved</h2>
          <p>
            Join our community of like-minded individuals and connect with
            fellow calligraphy enthusiasts from around the world. Share your
            work, ask questions, and learn from others in a supportive and
            encouraging environment.
          </p>
          <button>
            <span>Contact Us</span>
            <FaArrowRight size={20} className="about__arrow-icon" />
          </button>
        </div>
        <div>
          <img
            src={getInvolvedImg}
            alt="A person drawing on a piece of paper"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
