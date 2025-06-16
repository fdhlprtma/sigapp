import { Button } from "@/components/ui/button"
import Footer from "@/layouts/Nav,Foot/Footer"
import Navbar from "@/layouts/Nav,Foot/Navbar"

function Pengajuan() {
    return (
        <>
            <section className="mx-8">
                <Navbar></Navbar>
                <div className="lg:mx-14">
                    <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="w-[360px] border border-[5e5e5e] rounded-md p-3">
                            <span className="font-bold">John aja</span>
                            <p className="text-[#5e5e5e] mt-4">1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan</p>
                            <div className="mt-3">
                                <Button variant="succes" className="me-3">Terima</Button>
                                <Button variant="log">Tolak</Button>
                            </div>
                        </div>
                        <div className="w-[360px] border border-[5e5e5e] rounded-md p-3">
                            <span className="font-bold">John aja</span>
                            <p className="text-[#5e5e5e] mt-4">1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan</p>
                            <div className="mt-3">
                                <Button variant="succes" className="me-3">Terima</Button>
                                <Button variant="log">Tolak</Button>
                            </div>
                        </div>
                        <div className="w-[360px] border border-[5e5e5e] rounded-md p-3">
                            <span className="font-bold">John aja</span>
                            <p className="text-[#5e5e5e] mt-4">1 Juni 2025  |  Desa Leange, Kel. Mangallekana Kec. Labakkang, Kab.Pangkep, Prov. Sulawesi Selatan</p>
                            <div className="mt-3">
                                <Button variant="succes" className="me-3">Terima</Button>
                                <Button variant="log">Tolak</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        </>
    )
}

export default Pengajuan