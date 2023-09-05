import Navbar from '@/app/Components/NavBar/navbar'
import HeroSection from '@/app/Components/HeroSection/herosection'
import SectionThree from '@/app/Components/SectionThree/sectionthree'
import SectionFour from '@/app/Components/SectionFour/sectionfour'
import SectionFive from '@/app/Components/SectionFive/sectionfive'
import SectionSix from '@/app/Components/SectionSix/sectionsix'
import SectionSeven from '@/app/Components/SectionSeven/sectionseven'
import SectionEight from '@/app/Components/SectionEight/sectioneight'
import SectionNine from '@/app/Components/SectionNine/sectionnine'
import SectionTen from '@/app/Components/SectionTen/sectionten'
import SectionEleven from '@/app/Components/SectionEleven/sectioneleven'
import Footer from '@/app/Components/Footer/footer'
import React from 'react'

const HomePage = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
        <SectionEleven />
        <Footer />
        </>
    )
}

export default HomePage
