import Image from "next/image"
import { useInView } from "react-intersection-observer"

const ProjectCard = ({ title, deskripsi, image, tech, urlCode1, urlTitle1, urlCode2, urlTitle2 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <article ref={ref} className={`flex flex-1 flex-col w-full basis-96 max-w-[450px]  border-2 border-opacity-20 border-slate-700 overflow-hidden rounded-md shadow-xl
        transform transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <figure className="w-full">
                <Image src={image} alt="project" className="object-cover" width={600} height={600} />
            </figure>
            <div className="px-4 py-2 text-center">
                <h4 className="text-xl lg:text-2xl mb-2 py-2 font-semibold">{title}</h4>
                <hr className="border-2 border-slate-700 mb-2 px-10" />
                <div className="pb-16 pt-4">
                    <p className="text-justify px-8 lg:text-lg">{deskripsi}</p>
                    <p className="text-center my-4 font-medium">{tech}</p>
                    <div className="flex gap-3 justify-center">
                        <a className="text-blue-800 underline text-lg" href={urlCode1}>{urlTitle1}</a>
                        <a className={`text-blue-800 underline text-lg ${urlTitle2 ? "" : "hidden"}`} href={urlCode2}>{urlTitle2}</a>
                    </div>
                </div>

            </div>
        </article>
    )
}
export default ProjectCard