import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Laporan from "../../layouts/Beranda/Laporan"
import ListAspirasi from "../../layouts/Aspirasi/ListAspirasi"
import ListDetailData from "../../layouts/ListDetailData"
import Footer from "../../layouts/Nav,Foot/Footer"
import Navbar from "../../layouts/Nav,Foot/Navbar"
import { PopUp } from "../../layouts/PopUp"

function BerandaIsLogin() {
    const [showCreatePopUp, setShowCreatePopUp] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <section className="relative mx-8">
                <Navbar />

                <div className="md:ms-14 my-10">
                    <h1>Hai <b>"username"</b></h1>
                    <span>Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan</span>
                </div>

                <ListDetailData />

                <section className="mx-14">
                    <h1 className="text-xl mt-16 mb-7">Aspirasi</h1>
                    <div className="grid grid-cols-3 gap-3 flex-wrap">
                        <ListAspirasi
                            badge="01 Juni 2025"
                            judul="Rapat Warga Bulanan"
                            keterangan="Rapat warga akan dilaksanakan pada hari, Senin 2 juni 2025"
                        />
                        <ListAspirasi
                            badge="01 Juni 2025"
                            judul="Rapat Warga Bulanan"
                            keterangan="Rapat warga akan dilaksanakan pada hari, Senin 2 juni 2025"
                        />
                        <ListAspirasi
                            badge="01 Juni 2025"
                            judul="Rapat Warga Bulanan"
                            keterangan="Rapat warga akan dilaksanakan pada hari, Senin 2 juni 2025"
                        />
                    </div>
                </section>

                <Laporan />

                {/* Tombol + di pojok bawah */}
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={() => setShowCreatePopUp(true)}
                        className="text-3xl text-white bg-[#5A827E] px-5 pb-3 pt-1 rounded-sm shadow-lg cursor-pointer"
                    >
                        +
                    </button>
                </div>

                {/* PopUp buat baru */}
                <PopUp open={showCreatePopUp} setOpen={setShowCreatePopUp} title="Buat Baru">
                    <div className="grid grid-cols-2 gap-3">
                        {/* Laporan */}
                        <div
                            onClick={() => {
                                setShowCreatePopUp(false)
                                navigate("/form-laporan") // Ganti ke rute laporan kamu
                            }}
                            className="flex flex-col items-center py-3 text-[#5e5e5e] bg-[#E8FFF3] border border-[#50CD89] rounded-md cursor-pointer hover:bg-[#d5f5e4] transition"
                        >
                            <img src="./icon/laporangreen.svg" alt="Laporan" className="w-11" />
                            <span className="font-bold">Laporan</span>
                            <span>Laporkan Masalah</span>
                        </div>

                        {/* Aspirasi */}
                        <div
                            onClick={() => {
                                setShowCreatePopUp(false)
                                navigate("/form-aspirasi") // Ganti ke rute aspirasi kamu
                            }}
                            className="flex flex-col items-center py-3 text-[#5e5e5e] bg-[#FFF5F8] border border-[#F1416C] rounded-md cursor-pointer hover:bg-[#fce6ec] transition"
                        >
                            <img src="./icon/aspirasired.svg" alt="Aspirasi" className="w-11" />
                            <span className="font-bold">Aspirasi</span>
                            <span>Usulkan Ide</span>
                        </div>
                    </div>
                </PopUp>

                <div className="mt-20">
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default BerandaIsLogin
