import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(loginStatus === "true");
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/masuk");
    };

    return (
        <nav className="flex justify-between items-center h-20">
            <div className="flex gap-3 items-center">
                <img src="./logo.svg" alt="logo" className="w-10" />
                <h1 className="text-[#5A827E] text-xl font-bold">Sigap.</h1>
            </div>
            <ul className="flex gap-10">
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/petawilayah">Peta Wilayah</Link></li>
                <li><Link to="/laporan">Laporan</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
            <div className="flex gap-3">
                {isLoggedIn ? (
                    <Button onClick={handleLogout} variant="log">Keluar</Button>
                ) : (
                    <>
                        <Link to="/masuk"><Button>Masuk</Button></Link>
                        <Link to="/daftar"><Button>Daftar</Button></Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
