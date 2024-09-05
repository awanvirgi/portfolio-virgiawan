import Image from "next/image"
import TitleSection from "../miniComponents/titleSection"

const HeroSection = () => {
    return (
        <header className="h-screen flex flex-col justify-center items-center relative">
            <TitleSection name={"Introduction"} />
            <div className="pl-5">
                <div className="mb-4">
                    <h4>Welcome to My Portfolio</h4>
                    <h1 className="text-4xl font-bold my-2 flex">
                        <Image alt="icon" src="/icons/mylogo.svg" className="h-10 w-10" width={100} height={100} />
                        irgiawan Sanria
                    </h1>
                    <h3>An enthusiastic Web Developer. With Experienced in front-end, back-end Development ,& UIUX, I strive to deliver innovative solutions in every web project. Let's explore my achievements and creations in the world of web!</h3>
                </div>
                <div className="mb-8 flex items-center gap-4 text-lg">
                    <button className="p-2 box-border box bg-red-500 text-white rounded transform duration-200 hover:scale-110">Download CV</button>
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://github.com/awanvirgi" target="_blank">
                                <Image alt="icon" src="/icons/github.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/virgiawan-sanria-8766b0250/" target="_blank">
                                <Image  alt="icon" src="/icons/linkedln.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/awnsnria15/" target="_blank">
                                <Image  alt="icon" src="/icons/ig.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default HeroSection