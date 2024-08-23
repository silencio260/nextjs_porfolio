import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer
            </span>
            <h1 className="h1">
              Hello I'm <br /> <span className='text-accent'>Faruq Shabi</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque eos quod quo repellendus harum omnis enim fuga tempora, neque ullam tempore veniam facilis aliquam ad magnam laborum explicabo maiores!</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className='text-xl'/>
              </Button>
              <div className="mb-8 xl:mb-8">
                <Socials
                  containerStyles={'flex gap-6'}
                  iconStyles={'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
