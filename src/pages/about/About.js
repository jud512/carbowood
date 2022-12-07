import React from 'react'
import './about.css'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/banner/Banner'
import Introduction from '../../components/introduction/Introduction'

const About = () => {
  return (
    <>
        <Hero hero="otherHero">
            <Banner banner="bannerOther" title="Bemutatkozás">                
            </Banner>
        </Hero>
        <Introduction/>

    </>
  )
}

export default About