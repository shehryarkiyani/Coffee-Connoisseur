import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner/banner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleButtonClick=()=>{

  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <Banner buttonClick={handleButtonClick} buttonText="View Stores Near By"/>
    
    </main>
  )
}
