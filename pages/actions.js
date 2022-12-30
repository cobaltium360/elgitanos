import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../component/header'

export default function Action() {
  return (
    <>
      <Head>
        <title>El Gitanos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='home_gitan'>
        <div className='container_histoire'>
          <h2 className='h2_histoire'>Nos Actions</h2>
          <div className='container_actions'>
            <div className='card_actions'>
              <Image src="/drogue.jpg" width="300" height="200" quality={100}className='img_actions'/>
              <div className='text_action'>
                <p>Drogue</p>
              </div>
            </div>
            <div className='card_actions'>
              <Image src="/guerre.jpg" width="300" height="200" quality={100} className='img_actions'/>
              <div className='text_action'>
                <p>Guerre</p>
              </div>
            </div>
            <div className='card_actions'>
              <Image src="/territoire.jpg" width="300" height="200" quality={100} className='img_actions'/>
              <div className='text_action'>
                <p>Reprise De Territoire</p>
              </div>
            </div>
            <div className='card_actions'>
              <Image src="/braquage.jpg" width="300" height="200" quality={100} className='img_actions'/>
              <div className='text_action'>
                <p>Braquage</p>
              </div>
            </div>
            <div className='card_actions'>
              <Image src="/armes.jpg" width="300" height="200" quality={100} className='img_actions'/>
              <div className='text_action'>
                <p>Traffic d'armes</p>
              </div>
            </div>
            <div className='card_actions'>
              <Image src="/otage.jpg" width="300" height="200" quality={100} className='img_actions'/>
              <div className='text_action'>
                <p>Prises d'otages</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}