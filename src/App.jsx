import './App.css'
import Navbar from './components/Navbar'
import { gsap } from "gsap";

// Styles
import './css/landing.css';

// Image imports
import heroImage from './assets/hero.webp';
import about from './assets/about.jpg';
import electronics from './assets/electronics.jpg';
import gallery from './assets/gallery.jpg';
import project from './assets/porject1.jpg';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Hero section animations
    gsap.timeline()
    .fromTo(".hero img", { scale: 1.2 }, { scale: 1, duration: 1, ease: 'power1.inOut' })
    .fromTo(".hero h1", { opacity: 0, translateX: -30 }, {opacity: 1, translateX: 0, duration: 0.5})
    .fromTo(".hero button", { opacity: 0, translateX: -30 }, {opacity: 1, translateX: 0, duration: 0.5, position: 0.5})
    .fromTo(".hero p", { opacity: 0 }, {opacity: 1, duration: 0.5, position: 0.5})

    // Explore programs animations
    gsap.fromTo("#exploreprogram h2, p", { opacity: 0, translateX: -30 }, {opacity: 1, translateX: 0, duration: 0.5, scrollTrigger: "#exploreprogram p"})
    gsap.fromTo("#exploreprogram .card", 
      {opacity: 0, scale: 1.1}, 
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, scrollTrigger: {
        trigger: "#exploreprogram .card",
        start: 'top center'
      } })

      // Gallery animations
    gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        scrub: 1,
        start: "top bottom",
        end: 'top top',
      }
    })
    .fromTo(".gallery__heading", { backgroundImage: "linear-gradient(180deg, rgba(18, 21, 23, 0) 0%, rgba(18, 21, 23, 0) 100%)" }, { backgroundImage: "linear-gradient(180deg, rgba(18, 21, 23, 1) 0%, rgba(18, 21, 23, 1) 100%)", duration: 1, ease: 'power1.inOut' })
    .fromTo(".gallery__heading", { backgroundImage: "linear-gradient(180deg, rgba(18, 21, 23, 1) 0%, rgba(18, 21, 23, 1) 100%)" }, { backgroundImage: "linear-gradient(180deg, rgba(18, 21, 23, 0.50) 0%, rgba(18, 21, 23, 0.05) 100%)", duration: 1, ease: 'power1.inOut' })
    gsap.fromTo(".gallery__image-wrapper img", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: '.gallery__image-wrapper', start: 'top 90%' }, })
  }, [])

  return (
    <>
      <div>
        <Navbar />

        {/* Hero section */}
        <div className="hero">
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="Robocek" className="hero__image" />
            <div className="hero__overlay">
              <div className="row mb-4">
                <div className="col-md-12 col-lg-6">
                  <h1 className='h1'>Unleash your <span className="gradient-text">inner innovator</span> with Robocek</h1>
                  <a href="#exploreprogram" className='d-none d-lg-block'>
                    <button className="btn btn-light">Explore Robocek!</button>
                  </a>
                </div>
                <div className="col-md-12 col-lg-6">
                  <p className="fs-5 mt-1 hero__subtext">Explore new horizons, collaborate with like-minded enthusiasts, and bring your innovative ideas to life.</p>
                  <a href="#exploreprogram" className='d-block d-lg-none'>
                    <button className="btn btn-light">Explore Robocek!</button>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Explore programs section */}
        <section id="exploreprogram">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-md-12 col-lg-4">
                <h2 className="h2">Explore our programs!</h2>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ratione facere maiores at voluptas.</p>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="card">
                      <img className='card-img' src={heroImage} alt="" />
                      <div className="card-body">
                        <h5 className="card-title">Demo program</h5>
                        <p className="card-text text-secondary">Harmonious colour themes have built up as the collection has evolved. </p>
                        <button className="btn btn-primary">Apply now!</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="card">
                      <img className='card-img' src={heroImage} alt="" />
                      <div className="card-body">
                        <h5 className="card-title">Demo program</h5>
                        <p className="card-text text-secondary">Harmonious colour themes have built up as the collection has evolved. </p>
                        <button className="btn btn-primary">Apply now!</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="card">
                      <img className='card-img' src={heroImage} alt="" />
                      <div className="card-body">
                        <h5 className="card-title">Demo program</h5>
                        <p className="card-text text-secondary">Harmonious colour themes have built up as the collection has evolved. </p>
                        <button className="btn btn-primary">Apply now!</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="card">
                      <img className='card-img' src={heroImage} alt="" />
                      <div className="card-body">
                        <h5 className="card-title">Demo program</h5>
                        <p className="card-text text-secondary">Harmonious colour themes have built up as the collection has evolved. </p>
                        <button className="btn btn-primary">Apply now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Robocek section */}
        <section className="py-3" id="explore-robocek">
          <div className="container">
            <div className="text-center">
              <h2 className="h2">Explore Robocek</h2>
              <p className='mx-auto text-secondary' style={{ maxWidth: '450px' }}>Discover Robocek's mission, view our latest projects, browse our gallery, and learn more about our team.</p>
            </div>
            <div className="mt-2">
              <div className="row">
                <div className="col-md-12 col-lg-3">
                  <div className="card">
                    <img className='card-img' src={gallery} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Gallery</h5>
                      <p className="card-text text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#gallery" className="link-offset-2">View the gallery</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-3">
                  <div className="card">
                    <img className='card-img' src={project} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Our projects</h5>
                      <p className="card-text text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#gallery" className="link-offset-2">Check out our projects</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-3">
                  <div className="card">
                    <img className='card-img' src={electronics} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Electronic kits</h5>
                      <p className="card-text text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="#gallery" className="link-offset-2">Get your kit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-3">
                  <div className="card">
                    <img className='card-img' src={about} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">About us</h5>
                      <p className="card-text text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <a href="https://robocek.org" target='_blank' className="link-offset-2">More about Robocek</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery">
          <div className="container text-center">
            <div className="py-4">
              <h2 className="gallery__heading">gallery</h2>
            </div>
            <div className="py-3">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://images.unsplash.com/photo-1605493624455-a56d6d312f6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://images.unsplash.com/photo-1612338762643-298feee70520?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://plus.unsplash.com/premium_photo-1682124353289-b0bb64f591d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://plus.unsplash.com/premium_photo-1682124389443-faa964f770c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://images.unsplash.com/photo-1581092334247-44dd684e3c82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1581092334247-44dd684e3c82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="gallery__image-wrapper mb-4">
                    <img src="https://images.unsplash.com/photo-1527612820672-5b56351f7346?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
