import React from "react";
import logo from "@/assets/footer.png"
import playmarket from '@/assets/play.png'
import appstore from '@/assets/store.png'
import { IoIosListBox } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPhone, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import { MdOutlineSportsBasketball } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="container mx-auto w-full max-w-[1180px] mb-1.5 p-7 rounded-[10px] bg-[#111111]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <img src={logo} alt="logo" className="h-12 mb-12" />
          <div className="flex flex-col gap-2">
            <img
              src={playmarket}
              alt="Play Market"
              className="w-[150px] h-[44px] mb-2"
            />
            <img
              src={appstore}
              alt="App Store"
              className="w-[150px] h-[44px]"
            />
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-5">О нас</p>
          <ul className="space-y-2 text-[#A1A1A1]">
            <li className="flex items-center gap-2 mb-5">
              <IoIosListBox className="text-red-600 w-6 h-6" />
              Публичная оферта
            </li>
            <li className="flex items-center gap-2 mb-5">
              <GiStarShuriken className="text-red-600 w-6 h-6" />
              Реклама
            </li>
            <li className="flex items-center gap-2 mb-5">
              <FaRegCircleQuestion className="text-red-600 w-6 h-6" />
              F.A.Q
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-red-600 w-6 h-6" />
              Контакты
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-5">Категории</p>
          <ul className="text-[#A1A1A1] space-y-4">
            <li className="flex items-center gap-2">
              <BiSolidMoviePlay className="text-red-600 w-6 h-6" />
              Кино
            </li>
            <li className="flex items-center gap-2">
              <RiMovie2Line className="text-red-600 w-6 h-6" />
              Театр
            </li>
            <li className="flex items-center gap-2">
              <RiMovie2Line className="text-red-600 w-6 h-6" />
              Концерты
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineSportsBasketball className="text-red-600 w-6 h-6" />
              Спорт
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-5">Связаться с нами</p>
          <p className="text-[20px] mb-14 text-[#C61F1F]">+998 (95) 555-55-55</p>
          <p className="font-semibold mb-5">Социальные сети</p>
          <div className="flex items-center gap-4 text-2xl text-white">
            <FaInstagram aria-label="Instagram" />
            <CiFacebook aria-label="Facebook" />
            <FiYoutube aria-label="YouTube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;