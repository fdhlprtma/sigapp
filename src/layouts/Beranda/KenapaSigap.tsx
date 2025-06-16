import Title from "../../components/ui/Title"

function KenapaSigap() {
    return (
        <>
            <section className="mx-14">
                <Title>Kenapa Sigap</Title>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="w-[260px] shadow-md flex items-center gap-3 p-4 rounded-md">
                        <img src="./icon/done.svg" alt="" />
                        <span className="font-medium">Penggunaan Yang Mudah</span>
                    </div>
                    <div className="w-[260px] shadow-md flex items-center gap-3 p-4 rounded-md">
                        <img src="./icon/done.svg" alt="" />
                        <span className="font-medium">Transparan Dan Responsif</span>
                    </div>
                    <div className="w-[260px] shadow-md flex items-center gap-3 p-4 rounded-md">
                        <img src="./icon/done.svg" alt="" />
                        <span className="font-medium">Kolaborasi Warga</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KenapaSigap