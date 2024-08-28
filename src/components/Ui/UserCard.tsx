import React, { FC } from "react";
import { FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

interface User {
  name: string;
}

interface UserCardProps {
  onclick?: () => void;
  user: User;
}

const UserCard: FC<UserCardProps> = ({ onclick, user, ...props }) => {
  return (
    <div
      {...props}
      className="absolute z-50 text-sm right-0 top-1 shadow-md rounded-sm w-[240px] border-slate-300 border bg-white"
    >
      {user ? (
        <>
          <div className="p-2 ">
            <h2 className="p-2 text-lg font-semibold rounded-md text-slate-900 bg-slate-100">
              {`${user?.name}`}
            </h2>
          </div>
          <span className=" bg-slate-400 block h-[1px]"></span>
        </>
      ) : (
        ""
      )}
      <div className="p-2 cursor-pointer">
        {!user ? (
          <ul className="">
            <Link to="/login">
              <li className="p-2 font-semibold rounded-md">Login</li>
            </Link>
            <Link to="/register">
              <li className="p-2 font-semibold rounded-md">SignUp</li>
            </Link>
          </ul>
        ) : (
          <>
            <ul className="">
              <Link to="/">
                <li className="p-2 font-semibold bg-red-100 rounded-md">
                  Home
                </li>
              </Link>
              <Link to="/Profile">
                <li className="p-2 font-semibold">Profile</li>
              </Link>
              <Link to="/menu">
                <li className="p-2 font-semibold">Menu</li>
              </Link>

              <Link className="flex items-center justify-center" to="/cartItem">
                <FaShoppingBag />
                <li className="p-2 font-semibold">Cart</li>
              </Link>
            </ul>
            <h2
              className="flex items-center justify-center gap-2 p-2 font-semibold text-white bg-red-400 rounded-md "
              onClick={onclick}
            >
              <FaSignOutAlt />
              Log out
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;
