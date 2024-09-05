import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import TitleSection from "../miniComponents/titleSection"
import ListCard from "../miniComponents/listCard"

const ExpSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <section ref={ref} className={`transform transition-all duration-1000 ease-out relative flex items-center mb-8
        `}>
            <TitleSection name={"Journeys & Projects"} />
            <main className="pl-5 flex flex-col h-full pt-24">
                <section className="mb-8">
                    <header className="mb-6">
                        <h1 className="text-4xl font-bold mb-1 ">Experiences</h1>
                    </header>
                    <div className="flex flex-col gap-4">
                        <ListCard
                            title={"Studi Independen Full-Stack Web Developer"}
                            deskripsi={"Learn & Project about Full-Stack Web Developer with React & Express Framework"}
                            image={"/images/skilvul.png"}
                            subJudul={"August 2023 - January 2024"} />
                        <ListCard
                            title={"Laboratory Assistant at Fasilkom Singaperbangsa University Karawang"}
                            deskripsi={"Assisting lecturers in preparing course practicums. Sometimes teaching practicums in place of lecturers"}
                            image={"/images/labkom.png"}
                            subJudul={"January 2023 - Present"} />
                    </div>
                </section>
                <section>
                    <header className="mb-6">
                        <h1 className="text-4xl font-bold mb-1">Projects</h1>
                    </header>
                    <div className="flex flex-wrap gap-4">
                        <article className="flex flex-1 flex-col w-full border-2 border-opacity-20 border-slate-700 overflow-hidden flex-grow min-w-72 rounded-md shadow-lg">
                            <figure className="w-full">
                                <Image src="/images/projek1.png" alt="project" className="object-cover" width={600} height={600} />
                            </figure>
                            <div className="p-2 text-center">
                                <h4 className="text-xl mb-2 font-semibold">Teh Poci Franchise Order</h4>
                                <hr className="border-2 border-slate-700 mb-2" />
                                <p className="">One of the college project assignments, a website used to promote and register the Teh Poci franchise for selling</p>
                                <p className="text-center my-4 font-medium">HTML, PHP, CSS, MYSQL</p>
                                <div>
                                    <Link className="text-blue-800 underline text-lg" href="https://github.com/awanvirgi/teh_poci.git">Code</Link>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-1 flex-col w-full border-2 border-opacity-20 border-slate-700 overflow-hidden flex-grow min-w-72 rounded-md shadow-lg">
                            <figure className="w-full">
                                <Image src="/images/projek2.png" alt="project" className="object-cover" width={600} height={600} />
                            </figure>
                            <div className="p-2 text-center">
                                <h4 className="text-xl mb-2 font-semibold">SkilHealth</h4>
                                <hr className="border-2 border-slate-700 mb-2" />
                                <p className="">Final Project of Independent Full-Stack Web Developer Study. This website functions to serve patients, such as making doctor's appointments, calling an ambulance and others</p>
                                <p className="text-center my-4 font-medium">REACT JS, EXPRESS.JS ,MYSQL</p>
                                <div className="flex gap-3 justify-center">
                                    <Link className="text-blue-800 underline text-lg" href="https://github.com/skilhealth/fe-skilhealth.git">Code FE</Link>
                                    <Link className="text-blue-800 underline text-lg" href="https://github.com/skilhealth/be-skilhealth.git">Code BE</Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </section>
    )
}
export default ExpSection