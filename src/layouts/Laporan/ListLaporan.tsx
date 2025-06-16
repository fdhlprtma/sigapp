import { Link } from "react-router-dom"
import Badge from "../../components/ui/badge"

type listLaporanProps = {
    className: string
    chilBadge: string
    image: string
    alt: string
    alamat: string
    judul: string
    komentar: string
}

function ListLaporan({ className, chilBadge, image, alt, alamat, judul, komentar }: listLaporanProps) {
    return (
        <>
            <section className="w-[349px] h-auto pb-3 relative rounded-b-md shadow-md">
                <Link to="/detail-laporan">
                    <Badge className={`absolute ${className}`} children={`${chilBadge}`} />
                    <div className="">
                        <img src={image} alt={alt} />
                    </div>
                    <div className="px-3">
                        <p className="text-[#5E5E5E] text-xs mt-1">{alamat}</p>
                        <h1 className="mt-1 mb-2 text-md font-semibold">{judul}</h1>
                        <p className="text-[#5E5E5E] text-sm">{komentar}</p>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default ListLaporan