import Title from "../../components/ui/Title"

function PetaWilayah() {
    return (
        <>
            <section className="mx-14">
                <Title>Peta Wilayah</Title>
                <div className="flex gap-5">
                    <div className="">
                        <img src="./wilayah.svg" alt="wilayah yang sudah bergabung" />
                    </div>
                    <div className="grid gap-3">
                        <div className="w-[360px] h-[144px] text-center bg-[#FFF5F8] text-[#5E5E5E] rounded-md">
                            <div className="flex justify-center mb-4">
                                <img src="./icon/lokasired.svg" alt="" className="mt-5" />
                            </div>
                            <p className="text-[#5E5E5E] font-bold">10</p>
                            <span className="text-[#5E5E5E]">Total Wilayah</span>
                        </div>
                        <div className="w-[360px] h-[144px] text-center bg-[#EEF6FF] text-[#5E5E5E] rounded-md">
                            <div className="flex justify-center mb-4">
                                <img src="./icon/orang.svg" alt="" className="mt-5" />
                            </div>
                            <p className="text-[#5E5E5E] font-bold">1000</p>
                            <span className="text-[#5E5E5E]">Total Warga</span>
                        </div>
                        <div className="w-[360px] h-[144px] text-center bg-[#E8FFF3] text-[#5E5E5E] rounded-md">
                            <div className="flex justify-center mb-4">
                                <img src="./icon/laporangreen.svg" alt="" className="mt-5" />
                            </div>
                            <p className="text-[#5E5E5E] font-bold">121</p>
                            <span className="text-[#5E5E5E]">Total Laporan</span>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default PetaWilayah