import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { InputLabel } from "../../layouts/Input"
import { useState } from "react"
import { PopUp } from "../../layouts/PopUp"

function Masuk() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [agree, setAgree] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)

    const handleLogin = () => {
        if (!email || !password || !agree) {
            alert("Mohon isi semua data dan setujui kebijakan privasi.")
            return
        }

        // Simpan status login ke localStorage
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("username", email)

        // Tampilkan popup
        setShowPopUp(true)
    }

    return (
        <>
            <div className="h-100 mt-20 grid justify-center items-center">
                <div className="grid justify-center">
                    <img src="./logo.svg" alt="logo" />
                    <h1 className="text-[#5A827E] text-xl font-bold">Sigap.</h1>
                </div>

                <div className="w-full grid gap-4 justify-center items-center">
                    <InputLabel
                        id="email"
                        labelFor="email"
                        label="Email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="border border-[#5e5e5e]"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputLabel
                        id="password"
                        labelFor="password"
                        label="Password"
                        type="password"
                        placeholder="******"
                        className="border border-[#5e5e5e]"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        <span>
                            {" "}
                            Saya setuju dengan{" "}
                            <span className="text-[#5A827E]">Ketentuan Layanan</span> dan{" "}
                            <span className="text-[#5A827E]">Kebijakan Privasi</span>
                        </span>
                    </div>
                    <Button onClick={handleLogin}>Masuk</Button>
                </div>

                <div className="text-center text-[#5A827E] mt-4">
                    <Link to="/daftar">
                        <u>Daftar</u>
                    </Link>
                </div>
            </div>

            <PopUp
                open={showPopUp}
                setOpen={setShowPopUp}
                title={
                    <>
                        <div className="flex gap-3 items-center">
                            <img src="./logo.svg" alt="logo" className="w-10" />
                            <h1 className="text-[#5A827E] text-xl font-bold">Sigap.</h1>
                        </div>
                    </>
                }
                children={
                    <>
                        <span className="text-center">Pilih salah satu menu di bawah ini</span>
                    </>
                }
                footer={
                    <>
                        <div className="flex justify-center gap-3">
                            <Link to="/ajukan-wilayah"><Button variant="default">Ajukan Wilayah</Button></Link>
                            <Link to="/gabung-wilayah"><Button variant="default">Gabung Wilayah</Button></Link>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default Masuk
