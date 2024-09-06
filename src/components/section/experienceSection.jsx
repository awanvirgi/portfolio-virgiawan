import { useInView } from "react-intersection-observer"

import TitleSection from "../miniComponents/titleSection"
import ListCard from "../miniComponents/listCard"
import ProjectCard from "../miniComponents/projectCard"

const ExpSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <section className={`relative flex items-center mb-8`}>
            <TitleSection name={"Journeys & Projects"} />
            <main className="pl-5 flex flex-col h-full pt-24 lg:pt-28 lg:pl-10">
                <section ref={ref} className={`transform transition-all duration-1000 ease-out mb-8 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <header className="mb-6">
                        <h1 className="text-4xl font-bold mb-1 lg:text-6xl lg:mb-4">Experiences</h1>
                        <p className="lg:text-xl max-w-[700px]">I am currently pursuing a Bachelor's degree in Informatics at Universitas Singaperbangsa Karawang. Since starting my studies, I have developed a passion for building things, especially websites, and I also enjoy teaching, And these are the experiences I have gained.</p>
                    </header>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <ListCard
                            title={"Studi Independen Full-Stack Web Developer at Skilvul"}
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
                        <h1 className="text-4xl font-bold mb-1 lg:text-6xl lg:mb-4">Projects</h1>
                    </header>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-10 lg:px-20">
                        <ProjectCard
                            title={"Teh Poci Franchise Order"}
                            deskripsi={"One of the college project assignments, a website used to promote and register the Teh Poci franchise for selling"}
                            image={"/images/projek1.png"}
                            tech={"HTML, PHP, CSS, MYSQL"}
                            urlCode1={"https://github.com/awanvirgi/teh_poci.git"}
                            urlTitle1={"Code"} />
                        <ProjectCard
                            title={"SkilHealth"}
                            deskripsi={"Final Project of Independent Full-Stack Web Developer Study. This website functions to serve patients, such as making doctor's appointments, calling an ambulance and others"}
                            image={"/images/projek2.png"}
                            tech={"REACT JS, EXPRESS.JS ,MYSQL"}
                            urlCode1={"https://github.com/skilhealth/fe-skilhealth.git"}
                            urlTitle1={"Code FE"}
                            urlCode2={"https://github.com/skilhealth/eb-skilhealth.git"}
                            urlTitle2={"Code BE"} />
                    </div>
                </section>
            </main>
        </section>
    )
}
export default ExpSection