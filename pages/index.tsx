import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Koustubh Mishra&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header */}
        <Header/>

        {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero/>
        </section>

        {/* Abouts */}
        <section id='about' className='snap-center'>
        <About />
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center'>
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        {/* Contacts */}
        <section id='contactUs' className='snap-start'>
          <ContactUs />
        </section>

      </main>
      
    </div>
  )
}

export default Home
