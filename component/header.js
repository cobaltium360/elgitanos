import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {

  const router = useRouter();

  return (
    <>
      <header>
        <div className='container_header'>
            
                <div className='container_logo_titre'>
                    <Image src="/logobl.png" width="120" height="120"/>
                    <h1 className='h1_header'>El Gitanos</h1>
                </div>
                <div className='container_lien_head'>
                  <Link href="/" className={router.pathname == "/" ? "active_header" : "inactive_header"}>
                    <p className='lien_header'>Accueil</p>
                  </Link>
                  <Link href="/histoire" className={router.pathname == "/histoire" ? "active_header" : "inactive_header"}>
                    <p className='lien_header'>Histoire</p>
                  </Link>
                  <Link href="/actions" className={router.pathname == "/actions" ? "active_header" : "inactive_header"}>
                    <p className='lien_header'>Actions</p>
                  </Link>
                  <Link href="/membres" className={router.pathname == "/membres" ? "active_header" : "inactive_header"}>
                    <p className='lien_header'>Membres</p>
                  </Link>
                </div>
                <div className='responsive_mob'>
                  <h2>Version mobile en développement</h2>
                </div>

            
        </div>
      </header>
    </>
  )
}
