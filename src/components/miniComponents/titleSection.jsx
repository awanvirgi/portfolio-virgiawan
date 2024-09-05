const TitleSection = ({name}) => {
    return (
        <div className="self-start absolute -left-3 top-10 flex items-center gap-4">
            <div className="h-8 w-8 flex justify-center items-center bg-slate-700 rounded-full text-white">
                <svg className="h-5 w-5" viewBox="0 0 1091 1255" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M210.793 0C210.793 0 21.3476 40.1133 0.945708 88.9234C-19.4562 137.734 295.18 1297.06 467.279 1253.82C639.379 1210.58 636.316 1191.57 688.778 1164.9C782.37 718.21 869.472 457.219 1091 4.4459C993.967 10.3285 958.446 48.737 927.783 103.395C897.121 158.052 597.659 723.049 484.767 1124.88C312.397 807.482 239.698 527.755 263.259 26.6768L210.793 0Z" fill="currentColor" />
                </svg>
            </div>
            <h3 className="text-slate-700 text-xl font-bold border-b-2 border-slate-700">{name}</h3>
        </div>
    )
}
export default TitleSection