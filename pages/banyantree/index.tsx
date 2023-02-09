import dynamic from 'next/dynamic';
import Head from 'next/head';

const FixedBG = dynamic(() => import('@/components/Global/Fixed BG'), { ssr: false })
const NavBar = dynamic(() => import('@/components/Global/Nav Bar'), { ssr: false })
const Landing = dynamic(() => import('@/components/Banyan Tree/Landing'), { ssr: false })

function BanyanTree() {
    return (
        <>
            <Head>
                <title>Less Boring-ify Trees : Banyan Tree</title>
            </Head>
            <FixedBG />
            <NavBar />
            <Landing />
        </>
    )
}

export default BanyanTree;