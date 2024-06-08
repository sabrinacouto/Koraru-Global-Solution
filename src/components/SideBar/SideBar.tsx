'use client'
import { useState } from 'react';
import { FiUsers } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';


const menuItems = [
  {
    title: 'Usuários Cadastrados',
    icon: FiUsers,
  },


];

const SideBar = () => {
 


  

  return (
    <aside className=" text-darkslategray-200 w-64 min-h-screen p-8">
        <FaUserCircle className='text-slategray-300 text-50xl mb-6' />
        <h2 className='text-mediumturquoise text-xl ml-1 mb-5'>Welcome Admin!</h2>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <item.icon className="mr-2" />  {/* Aqui estamos renderizando o ícone */}
                  <span>{item.title}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

