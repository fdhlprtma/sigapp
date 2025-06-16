import { useState } from "react"
import Badge from "../../components/ui/badge"
import { Button } from "@/components/ui/button"
import { PopUp } from "@/layouts/PopUp"

type detailLaporanProps = {
    chilBadge: string
    image: string
    alt: string
    alamat: string
    judul: string
    komentar: string
    button?: string
}

// Fungsi untuk menentukan warna badge berdasarkan status
const getBadgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
        case "selesai":
            return "bg-[#E8FFF3] text-[#50CD89]"
        case "ditolak":
            return "bg-[#FFF5F8] text-[#F1416C]"
        case "proses":
            return "bg-[#FFF8DD] text-[#F6C000]"
        default:
            return "bg-gray-200 text-gray-700"
    }
}

function DetailLaporan({
    chilBadge,
    image,
    alt,
    alamat,
    judul,
    komentar,
    button
}: detailLaporanProps) {
    const [showPopup, setShowPopup] = useState(false)
    const [status, setStatus] = useState(chilBadge)

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus)
        setShowPopup(false)
    }

    return (
        <>
            <div className="flex justify-center my-7">
                <section className="w-[500px] h-auto pb-3 relative rounded-b-md shadow-md">
                    <Badge className={`absolute ${getBadgeStyle(status)}`} children={status} />
                    <div>
                        <img src={image} alt={alt} className="w-full" />
                    </div>
                    <div className="px-3">
                        <p className="text-[#5E5E5E] text-xs mt-1">{alamat}</p>
                        <h1 className="mt-1 mb-2 text-md font-semibold">{judul}</h1>
                        <p className="text-[#5E5E5E] text-sm">{komentar}</p>
                        {button && (
                            <Button variant="edit" className="mt-3" onClick={() => setShowPopup(true)}>
                                {button}
                            </Button>
                        )}
                    </div>
                </section>
            </div>

            <PopUp
                open={showPopup}
                setOpen={setShowPopup}
                title="Ubah Status"
                description="Silakan pilih status baru untuk laporan ini"
                footer={
                    status.toLowerCase() === "proses" ? (
                        <div className="flex gap-2">
                            <Button className="bg-[#E8FFF3] text-[#50CD89]" onClick={() => handleStatusChange("selesai")}>
                                Selesai
                            </Button>
                            <Button className="bg-[#FFF5F8] text-[#F1416C]" onClick={() => handleStatusChange("ditolak")}>
                                Tolak
                            </Button>
                        </div>
                    ) : null
                }
            >
                {status.toLowerCase() !== "proses" && (
                    <p className="text-sm text-muted-foreground">
                        Status saat ini adalah: <strong>{status}</strong>
                    </p>
                )}
            </PopUp>
        </>
    )
}

export default DetailLaporan
