import React, { FC } from "react";
import { cn } from "../../lib/utils";
import { FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { IsMatch } from "../../hooks/hooks";

interface UserCardProps {
  onclick?:string
}

const UserCard: FC<UserCardProps> = ({ onclick, ...props }) => {
  return (
    <div
      {...props}
      className="absolute z-50 text-sm right-0 top-1 shadow-md rounded-sm w-[240px] border-slate-300 border bg-white"
    >
      {/* <div className="p-2 ">
         <h2 className="p-2 text-lg font-semibold rounded-md text-slate-900 bg-slate-100">
          {`${user?.first_name}_${user?.last_name}`}
        </h2> 
      </div>
      <span className=" bg-slate-400 block h-[1px]"></span>
      <ul className="flex flex-col gap-1 p-2">
        {data?.map((e, i) => (
          <li key={i}>
            <Link
              to={`${e?.link}`}
              className={cn(
                IsMatch(`${e?.link}`)
                  ? "bg-slate-900 text-slate-50 hover:text-slate-900"
                  : "text-slate-900",
                "flex items-center gap-2 font-semibold hover:bg-slate-100 rounded p-2"
              )}
            >
              {e?.icon}
              <span>{e?.ttl}</span>
            </Link>
          </li>
        ))}
      </ul> */}

      <div className="p-2 cursor-pointer">
        <ul className="">
      
          <Link to="/">
            <li className="p-2 font-semibold bg-red-100 rounded-md">Home</li>
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
          // onClick={onclick}
        >
          <FaSignOutAlt />
          Log out
        </h2>
      </div>
    </div>
  );

};

export default UserCard;