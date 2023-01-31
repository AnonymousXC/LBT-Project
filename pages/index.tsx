import { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const FixedBG = dynamic(() => import('@/components/Home/Fixed BG'), { ssr: false })
const NavBar = dynamic(() => import('@/components/Global/Nav Bar'), { ssr: false })
const HomeLand = dynamic(() => import('@/components/Home/Home Land'), { ssr: false })
const HomeSection2 = dynamic(() => import('@/components/Home/Home Section 2'), { ssr : false })
const HomeSection3 = dynamic(() => import('@/components/Home/Home Section 3'), { ssr: false })

function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    })
  })

  return (
    <>
      <Head>
        <title>Less Boring-ify Trees</title>
      </Head>
      <FixedBG />
      <NavBar />
      <HomeLand />
      <HomeSection2 />
      <HomeSection3 />
    </>
  )
}

export default Home;