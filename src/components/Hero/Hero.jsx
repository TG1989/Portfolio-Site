import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="hero-content">
        <h2>Creating Inspirational Digital Experiences</h2>
        <p>Enthusiastic Frontend Developer | Crafting Visually Stunning Web Solutions Seamlessly from Conceptualization to Realization</p>
      </div>

      <div className="hero-image">
        <div>
          <img className='profile-img' src="./assets/img11.png" alt="" />
        </div>


        <div>
          <div className="tech-icon">
            <img src="./assets/atom.png" alt="t-img" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/html.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/social.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/js.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero