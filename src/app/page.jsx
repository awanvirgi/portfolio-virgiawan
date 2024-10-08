'use client'
import ExpSection from "@/components/section/experienceSection"
import HeroSection from "@/components/section/heroSection"
import SkillSection from "@/components/section/skillSection"
import Image from "next/image"

const Page = () => {
  return (
    <div className="px-6 lg:px-32 relative">
      <div className={`h-full w-2 lg:w-4 absolute -z-1 bg-white `}></div>
      <HeroSection />
      <SkillSection />
      <ExpSection />
      <fotter>
        <div className="pl-5">
          <hr className="border-2 mb-2 border-slate-700" />
          <div className="p-4">
            <div className="mb-8">
              <h4 className="font-semibold lg:text-lg">EMAIL</h4>
              <a className="text-lg lg:text-xl underline" href="mailto:virgiawansanria@gmail.com">virgiawansanria@gmail.com</a>
            </div>
            <div className="lg:flex justify-between">
              <div className="text-center my-4 text-lg font-semibold">
                Made with Next JS by Virgiawan
              </div>
              <ul className="flex gap-4 justify-center items-center h-14">
                <li>
                  <a href="https://github.com/awanvirgi" target="_blank">
                    <Image alt="icon" src="/icons/github.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/virgiawan-sanria-8766b0250/" target="_blank">
                    <Image alt="icon" src="/icons/linkedln.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/awnsnria15/" target="_blank">
                    <Image alt="icon" src="/icons/ig.svg" className="h-8 w-8 cursor-pointer" width={100} height={100} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </fotter>
    </div>
  )
}
export default Page