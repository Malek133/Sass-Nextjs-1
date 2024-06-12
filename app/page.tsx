"use client"

import { Typewriter , Cursor } from "react-simple-typewriter";
import Image from "next/image"
import Njs from '../public/NFT.jpg'
import ButtonsProviders from "./components/ButtonsProviders";
export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center 
    flex-col gap-2 relative">
      <Image width={100} height={100} src={Njs} 
      alt="Logo La Minute De Code" className="object-contain mb-4" />
    <h1 className="text-4xl md:text-6xl  font-black mb-2 text-center uppercase flex items-center">Welcome to Alphazero</h1>
   
    <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome", "Willkommen", "Bienvenido", "Benvenuto"]}loop={0} />
      <span>
        <Cursor />
      </span>

      <p className="my-2">Rejoignez une aventure de codeur avec <span className="font-bold">La Minute De Code</span></p>
    
    <ButtonsProviders />
    
    </section>
  );
}
