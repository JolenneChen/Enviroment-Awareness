import Link from "next/link"

const Header = () =>{
    return(
        <nav className="sticky top-0 w-full z-50 bg-whtie/90 backdrop-blur-md shadow-[0_4px_20px_rgba(26,60,52,0.05)]">
            <div className="flex justify-between items-center h-20 px-4 md:px-12 max-w-[1280px] mx-auto">
                <Link className="font-display-lg text-display-lg font-bold text-[#01261f]" href="#">
                EcoEcho
                </Link>
                <div className="hidden md:flex gap-6 items-center justify-center text-[#414846]">
                    <Link className="font-body-md text-body-md hover:text-[#01261f] transition-colors" href ="#">
                    Resources
                    </Link>
                    <Link className="font-body-md text-body-md hover:text-[#01261f] transition-colors" href ="/community">
                    Community
                    </Link>
                    <Link className="font-body-md text-body-md hover:text-[#01261f] transition-colors" href ="#">
                    Donate
                    </Link>
                    <Link className="font-body-md text-body-md hover:text-[#01261f] transition-colors" href ="#">
                    Impact 
                    </Link>
                </div>
                <div className="">
                    <button className="bg-emerald-900 rounded-4xl p-2 px-6 text-white">Take Action</button>
                </div>
            </div>
        </nav>
    )
}

export default Header