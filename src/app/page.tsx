import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {ArrowRight} from "lucide-react" 
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          FinPulse is public!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className = 'text-blue-600'>assistant</span> in seconds.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        FinPulse allows you to ask and have a conversation for any Stocks period. 
        Simply ask the to do research and to stay up to date about your upcoming picks!
      </p>
      <Link className={buttonVariants({
        size: 'lg',
        className: 'mt-5',
      })} href="/dashboard" target="_blank">
        Get Started <ArrowRight className="m1-2 h-5 w-5"/>
      </Link>
    </MaxWidthWrapper>    
    
    <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/chatbot.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
    </div>
    </>
  )
}