import DetailLaporan from "@/layouts/Laporan/DetailLaporan"
import Footer from "@/layouts/Nav,Foot/Footer"
import Navbar from "@/layouts/Nav,Foot/Navbar"

function DetailLaporanPage() {
    return (
        <>
            <section className="mx-8">
                <Navbar></Navbar>
                <DetailLaporan
                    chilBadge="proses"
                    image="./jalan-lubang.svg"
                    alt="jalan lubang"
                    alamat="1 Juni 2025  |  Desa Leange..."
                    judul="Jalan berlubang di depan rumah pak budi"
                    komentar="Terdapat lubang cukup besar..."
                    button="Edit Status"
                />
                <Footer></Footer>
            </section>
        </>
    )
}

export default DetailLaporanPage