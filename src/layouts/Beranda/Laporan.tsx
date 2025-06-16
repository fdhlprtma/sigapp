import { Link } from "react-router-dom"
import ListLaporan from "../Laporan/ListLaporan"

function Laporan() {
    return (
        <>
            <section className="mx-14 mt-16 h-100">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl">Laporan Terbaru</h1>
                    <Link to="/laporan" className="text-[#3E97FF]"><u>Lihat Semua</u></Link>
                </div>
                <div className="flex flex-wrap gap-5 mt-7">
                    <ListLaporan
                        className="bg-[#E8FFF3] text-[#50CD89]"
                        chilBadge="selesai"
                        image="./jalan-lubang.svg"
                        alt="jalan lubang"
                        alamat="1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan"
                        judul="Jalan berlubang di depan rumah pak budi"
                        komentar="Terdapat lubang cukup besar yang membahayakan pengendara"
                    />
                    <ListLaporan
                        className="bg-[#FFF8DD] text-[#F6C000]"
                        chilBadge="selesai"
                        image="./saluran_tersumbat.svg"
                        alt="jalan lubang"
                        alamat="1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan"
                        judul="Saluran Air Tersumbat di Jalan Melati"
                        komentar="Saluran air di depan rumah nomor 15 tersumbat sampah dan menyebabkan...."
                    />
                    <ListLaporan
                        className="bg-[#FFF5F8] text-[#F1416C]"
                        chilBadge="selesai"
                        image="./tumpukan-sampah.svg"
                        alt="jalan lubang"
                        alamat="1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan"
                        judul="Tumpukan Sampah di Taman Cempaka"
                        komentar="Terdapat tumpukan sampah yang tidak terangkut di area taman Cempaka. Sudah beberapa hari dan menimbulkan bau tidak sedap."
                    />
                </div>
            </section >
        </>
    )
}

export default Laporan