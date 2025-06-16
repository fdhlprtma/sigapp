function Footer() {
    return (
        <>
            <footer className="border-t border-[#5E5E5E]">
                <div className="flex gap-3 items-center mt-4">
                    <img src="./logo.svg" alt="logo" className="w-10" />
                    <h1 className="text-[#5A827E] text-xl font-bold">Sigap.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5 text-[#5E5E5E]">
                    <div>
                        <p className="font-semibold text-lg">“Sistem Informasi Gabungan Aksi Pelaporan”</p>
                        <p className="text-sm mt-2">
                            Platform digital untuk menyampaikan aspirasi dan laporan warga kepada pengurus RT secara mudah dan cepat.
                        </p>
                    </div>

                    <div className="grid justify-center">
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Peta Wilayah</a></li>
                            <li><a href="#" className="hover:underline">Laporan</a></li>
                            <li><a href="#" className="hover:underline">Leaderboard</a></li>
                        </ul>
                    </div>

                    <div className="grid justify-end">
                        <p className="text-sm">sigap@gmail.com</p>
                        <div className="flex gap-3 mt-3">
                            <img src="./icon/ig.svg" alt="Instagram" className="w-5 h-5" />
                            <img src="./icon/yt.svg" alt="YouTube" className="w-5 h-5" />
                            <img src="./icon/x.svg" alt="X" className="w-5 h-5" />
                            <img src="./icon/fb.svg" alt="Facebook" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-[#5E5E5E] mb-5">
                    <span>© 2025 Sigap.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
