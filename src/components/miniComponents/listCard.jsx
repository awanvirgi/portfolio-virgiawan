import Image from "next/image"
import { useInView } from "react-intersection-observer"


const ListCard = ({image,title,deskripsi,subJudul}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <article ref={ref} className={`transform transition-all duration-1000 ease-out flex gap-2 flex-1
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Image  alt="icon" src={image} className="h-10 w-10" width={100} height={100} />
            <div className="">
                <p className={`${subJudul?"":"hidden"} text-sm`}>{subJudul}</p>
                <h2 className={`${subJudul?"text-xl":"text-2xl"}  font-semibold`}>{title}</h2>
                <p className={`${subJudul?"":"text-lg"}`}>{deskripsi}</p>
            </div>
        </article>
    )
}
export default ListCard