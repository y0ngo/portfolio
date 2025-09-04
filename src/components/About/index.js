import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import vinlandVideo from '../../assets/videos/Untitled video - Made with Clipchamp (12).mp4'

const About = () => {
  return (
    <div className="about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm an ambitious videographer who specialises in cinematography,
          colour grading, and video editing whilst being able to do much more.
        </p>
        <p>
          Whether it’s sports, fashion, street, or restaurants, I know how to
          capture the right mood and tell a story that resonates.
        </p>

        <section className="portfolio-snippets">
        
          <div className="snippets-grid">
            <div className="snippet">
              <video controls>
                <source src={vinlandVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
