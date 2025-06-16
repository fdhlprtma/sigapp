function ListDetailData() {
    return (
        <>
            <section>
                <div className="flex flex-wrap justify-center gap-3">
                    <div className="w-[360px] h-[144px] text-center bg-[#EEF6FF] text-[#5E5E5E] rounded-md">
                        <div className="flex justify-center mb-4">
                            <img src="./icon/orang.svg" alt="" className="mt-5" />
                        </div>
                        <p className="text-[#5E5E5E] font-bold">0</p>
                        <span className="text-[#5E5E5E]">Total Warga</span>
                    </div>
                    <div className="w-[360px] h-[144px] text-center bg-[#FFF5F8] text-[#5E5E5E] rounded-md">
                        <div className="flex justify-center mb-4">
                            <img src="./icon/aspirasired.svg" alt="" className="mt-5" />
                        </div>
                        <p className="text-[#5E5E5E] font-bold">0</p>
                        <span className="text-[#5E5E5E]">Total Aspirasi</span>
                    </div>
                    <div className="w-[360px] h-[144px] text-center bg-[#E8FFF3] text-[#5E5E5E] rounded-md">
                        <div className="flex justify-center mb-4">
                            <img src="./icon/laporangreen.svg" alt="" className="mt-5" />
                        </div>
                        <p className="text-[#5E5E5E] font-bold">0</p>
                        <span className="text-[#5E5E5E]">Total Laporan</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListDetailData