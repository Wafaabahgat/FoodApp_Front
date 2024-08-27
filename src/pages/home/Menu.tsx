import React, { useState } from "react";
import { FC } from "react";
import { menu_list } from "../../assets/assets";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const [activeList, setActiveList] = useState("");

  return (
    <div className="mt-10">
      <div className="max-w-[750px] ">
        <h2 className="text-xl font-semibold md:text-3xl">Explore Our Menu</h2>
        <p className="mt-3 mb-5 text-sm">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at time
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 md:grid-cols-8 ">
        {menu_list.map((i, e) => {
          return (
            <div key={e} className="flex flex-col items-center gap-1">
              <img
                src={i.menu_image}
                alt={i.menu_name}
                className={i.menu_image === activeList ? "activeList rounded-full" : ""}
                onClick={() => setActiveList(i.menu_image)}
              />
              <p>{i.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
