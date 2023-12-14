import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"


export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-[800px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
            <p className="font-semibold text-xl"> Whoops! We're sorry. </p>
            <p className="font-semibold text-2xl"> Page not found. </p>
            <p className="font-light text-xl"> 
                <span> You can get back to...</span>
                <Link 
                    className="block font-bold text-lime-900 hover:underline transition all text-2xl"
                    href='/'
                >
                    Home
                </Link>
             </p>
        </div>

        <div className="px-5 mx-5">
            <Image 
                src="/imgs/starman_750x750.png"
                alt="Starman"
                className="p-5 lg:p-0"
                width={550}
                height={550}
            />

        </div>

    </div>
  )
}
