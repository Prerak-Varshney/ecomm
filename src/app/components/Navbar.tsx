"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState<string>("HOME");
    const [amount, setAmount] = useState<number | string>("0.00");
    return (
        <nav className={`w-full h-14 border-b-3 border-[var(--secondary-background)] flex items-center justify-between px-4 font-poppins`}>
            <div className={`w-45 h-10 flex items-center justify-start gap-2`}>
                <div className={`w-11.25 h-full`}>
                    <div className={`w-full h-full rounded-lg bg-[var(--blue)] flex items-center justify-center`}>
                        <span className="text-white">V</span>
                    </div>
                </div>
                <h1 className={`w-31 h-8.25 text-2xl font-bold`}>E-Comm</h1>
            </div>

            <div className={`w-201 h-10 flex items-center justify-evenly`}>
                {
                    ["Home", "Bag", "Sneakers", "Belt", "Contact"].map((item, index) => (
                        <Link 
                            key={index} 
                            href={`/`} 
                            className={`h-full flex items-center justify-center px-3 hover:text-[var(--blue)] rounded-lg text-md font-normal transition-colors duration-300 ease-in-out ${active.toUpperCase() === item.toUpperCase() ? `text-[var(--blue)]` : `text-[var(--foreground)]`} `} 
                            onClick={() => setActive(item)}
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))
                }
            </div>
            <div className={`w-45 h-10 flex items-center justify-evenly text-foreground text-md`}>
                <div className="w-10 h-full flex items-center justify-center"><ShoppingCart size={20} /></div>
                <span className="text-md h-full flex items-center justify-center">Items</span>
                <span className={`h-full text-md text-foreground] flex items-center justify-center opacity-50`}>${amount}</span>
            </div>
        </nav>
    )
}

export default Navbar;