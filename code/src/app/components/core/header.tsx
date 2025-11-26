"use client";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <Image
                    src="./logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                />
            </div>
            <div className="flex flex-col justify-end">
                <h1 className="">smallTech</h1>
                <p className="text-liver-brown font-light">a madhyamakist enterprise</p>
            </div>
        </header>
    );
}