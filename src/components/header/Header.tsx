import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { Button } from "../Ui/Button";
import UserCard from "../Ui/UserCard";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const cookies = new Cookies();

const Header = () => {
  const [open, setOpen] = useState(false);
  const userCard = useRef(null);

  useEffect(() => {
    const closeCard = (e) => {
      if (!userCard.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("mousedown", closeCard);
    return () => {
      document.body.removeEventListener("mousedown", closeCard);
    };
  }, []);

  const toggleUserCard = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("object");
    cookies.remove("user");
    cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-between mt-5">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="cursor-pointer" />
      </Link>
      <div className="relative" ref={userCard}>
        <div className="text-3xl cursor-pointer" onClick={toggleUserCard}>
          <IoIosMenu />
        </div>

        {open && (
          <div className="absolute right-0 p-4 mt-2 bg-white rounded-lg shadow-lg">
            <UserCard onclick={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
