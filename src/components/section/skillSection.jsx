import TitleSection from "../miniComponents/titleSection"
import ListCard from "../miniComponents/listCard"
import { useInView } from "react-intersection-observer"

const SkillSection = () => {
    const {ref,inView} = useInView({
        triggerOnce:true,
        threshold:0.1
    })
    return (
        <section ref={ref} className={`transform transition-all duration-1000 ease-out relative flex items-center
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TitleSection name={"What can i do??"} />
            <main className="pl-5 flex flex-col h-full pt-24 lg:py-36 lg:pl-10">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold mb-1 lg:mb-4 lg:text-6xl">Technicalities</h1>
                    <p className="lg:text-xl max-w-[700px]">I studied various technologies in the world of web development starting from designing the appearance, front-end , and back-end. The world is evolving and I am always learning more every day.</p>
                </header>
                <div className="flex-grow flex flex-col gap-6 lg:flex-row lg:my-6 lg:gap-8 ">
                    <ListCard title={"Basic Languages"} deskripsi={"Experienced with Javascript, PHP, C++"} image={"/icons/code.svg"} /> 
                    <ListCard title={"Frontend Frameworks"} deskripsi={"Experienced with React.JS & Next.JS"} image={"/icons/react.svg"} /> 
                    <ListCard title={"Backend Frameworks"} deskripsi={"Experienced with Express.JS"} image={"/icons/laptop.svg"} /> 
                    <ListCard title={"Database"} deskripsi={"Experienced with MySQL"} image={"/icons/databases.svg"} /> 
                    <ListCard title={"UIUX"} deskripsi={"Experienced with Figma  & Canva"} image={"/icons/figma.svg"} /> 
                </div>
            </main>
        </section>
    )
}
export default SkillSection