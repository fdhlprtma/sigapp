import Title from "../../components/ui/Title"

function FiturUnggulan() {
    return (
        <>
            <section className="mx-14">
                <Title>Fitur Unggulan</Title>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="w-[336px] shadow-md p-4 rounded-md">
                        <div className="flex items-center gap-3">
                            <img src="./icon/laporan.svg" alt="" />
                            <span className="font-medium">Laporan</span>
                        </div>
                        <div className="mt-3">
                            <p>Fitur ini memungkinkan warga melaporkan masalah lingkungan sekitar seperti jalan rusak, sampah menumpuk, atau gangguan keamanan secara langsung ke pengurus RT.</p>
                        </div>
                    </div>
                    <div className="w-[336px] shadow-md p-4 rounded-md">
                        <div className="flex items-center gap-3">
                            <img src="./icon/lokasi.svg" alt="" />
                            <span className="font-medium">Peta Wilayah</span>
                        </div>
                        <div className="mt-3">
                            <p>Peta interaktif yang menampilkan wilayah RT/RW yang sudah aktif menggunakan Sigap.</p>
                        </div>
                    </div>
                    <div className="w-[336px] shadow-md p-4 rounded-md">
                        <div className="flex items-center gap-3">
                            <img src="./icon/leaderboard.svg" alt="" />
                            <span className="font-medium">Papan Peringkat</span>
                        </div>
                        <div className="mt-3">
                            <p>Papan peringkat yang menampilkan RT/RW paling aktif berdasarkan interaksi warga, laporan terselesaikan, dan aspirasi yang direalisasikan..</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FiturUnggulan