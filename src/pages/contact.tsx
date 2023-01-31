// Components
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
import SmoothLayout from '../components/layout/SmoothLayout'

/**
* Contact page
* @returns The Contact page component
*/
const ContactPage = () => {
  return (
    <SmoothLayout>
      <main className='mt-48'>
        <Hero space theme='dark'>
          <span className='text-left tracking-normal'>
            <div className='text-base md:text-lg mb-2'>
              ¿Tienes algun proyecto en mente?
            </div>
            <div>
              Pongamonos en contacto
            </div>
          </span>
        </Hero>
        <Contact />
      </main>
      <Footer />
    </SmoothLayout>
  )
}

export default ContactPage
