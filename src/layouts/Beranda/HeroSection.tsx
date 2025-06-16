import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"

function HeroSection() {
    return (
        <>
            <section className="h-100 mx-14 flex justify-between items-center">
                <div className="">
                    <h1 className="text-[#5A827E] text-6xl font-bold leading-tight">Aspirasi Nyata, <br /> Komunitas Berkarya</h1>
                    <p className="my-4 text-xl text-[#5E5E5E]">Platform digital untuk menyampaikan aspirasi <br /> dan laporan warga kepada pengurus RT <br /> secara mudah dan cepat. </p>
                    <div className="flex gap-3 mt-6">
                        <Link to="/ajukan-wilayah"><Button>Ajukan Wilayah</Button></Link>
                        <Link to="/gabung-wilayah"><Button>Gabung Wilayah</Button></Link>
                    </div>
                </div>
                <div className="">
                    <img src="./hero.svg" alt="hero" className="" />
                </div>
            </section>
        </>
    )
}

export default HeroSection