'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Header: React.FC = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    return (
        <section className="sticky top-0 z-[99] w-full bg-white shadow-md">
            <header className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <FiMenu
                        onClick={() => setMenu(true)}
                        className="text-3xl text-black cursor-pointer lg:hidden"
                    />
                    <Image src={logo} alt="A letra K ao lado de dois corais" width={40} height={40} />
                </div>
                <nav className="hidden md:flex flex-1 justify-center space-x-6 text-darkslategray-100 font-montserrat">
                    <Link href="/#sobre-nos" className="text-base hover:text-mediumturquoise hover:underline">SOBRE NÓS</Link>
                    <Link href="/#servicos" className="text-base hover:text-mediumturquoise hover:underline">SERVIÇOS</Link>
                    <Link href="/#nossa-missao" className="text-base hover:text-mediumturquoise hover:underline">NOSSA MISSÃO</Link>
                    <Link href="/#equipe" className="text-base hover:text-mediumturquoise hover:underline">EQUIPE</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="px-4 py-2 text-base text-mediumturquoise rounded-full hover:bg-mediumturquoise hover:text-white transition">Login</Link>
                    <Link href="/cadastro" className="px-4 py-2 text-base text-lightcoral rounded-full hover:bg-lightcoral hover:text-white transition">Cadastro</Link>
                </div>
            </header>
            <div
                className={`fixed h-full w-screen lg:hidden bg-white/50 backdrop-blur-sm top-0 right-0 ${isSideMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-all`}
            >
                <section className="text-darkslategray-100 bg-white flex-col left-0 top-0 h-screen p-8 gap-6 z-50 w-56 flex">
                    <IoCloseOutline
                        onClick={() => setMenu(false)}
                        className="mb-8 text-2xl cursor-pointer"
                    />
                    <Link href="/#sobre-nos" className="text-bas">SOBRE NÓS</Link>
                    <Link href="/#servicos" className="text-base">SERVIÇOS</Link>
                    <Link href="/#nossa-missao" className="text-base">NOSSA MISSÃO</Link>
                    <Link href="/#equipe" className="text-base">EQUIPE</Link>
                </section>
            </div>
        </section>
    );
}

export default Header;
