import { HeartIcon, MenuIcon, ShoppingBagIcon, XIcon } from "lucide-react";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon.jsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
          style={{width: isOpen ? "300px" : "150px"}}
        className={"transition-width duration-150 ease-in-out fixed left-0 top-0 bottom-0 bg-neutral-950/80 border-r-8 border-customAmber z-30 flex flex-col items-start pt-10"}
      >
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <XIcon className={"h-10 w-10 text-white ml-[50px]"} />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <MenuIcon className={"h-10 w-10 text-white ml-[50px]"} />
          </button>
        )}
        {!isOpen && (
          <div className={"w-full h-full flex flex-col justify-center"}>
            <img
              src={"/ChefMattBanner.png"}
              alt={"Chef Matt"}
              width={150}
              height={150}
              className={"-rotate-90 scale-[2.5] mb-20"}
            />
          </div>
        )}
        {isOpen && (
          <div className={"w-full h-full flex flex-col relative"}>
            <img
              src={"/ChefMattBanner.png"}
              alt={"Chef Matt"}
              className={"h-[150px]"}
            />
            <div
              className={
                "flex flex-col items-start h-auto w-full uppercase px-8 text-white text-xl gap-6"
              }
            >
              <h2 className={"text-customAmber"}>home</h2>
              <h2>Products</h2>
              <h2>Meet Chef Mate</h2>
              <h2>faq</h2>
              <h2>connect with us</h2>
            </div>
            <div
              className={
                "absolute h-[120px] w-full bottom-0 left-0 flex flex-col items-center"
              }
            >
              <div
                className={
                  "flex flex-row w-full h-auto gap-2 items-center justify-center text-white text-[15px]"
                }
              >
                <span>TEXT SUPPORT 24/7</span>
                <span className={"text-customAmber"}>070-7782-9137</span>
              </div>
              <div className={"w-full border-2 border-white mt-2"} />
              <div
                className={
                  "flex flex-row w-full h-full items-center pl-8 gap-6"
                }
              >
                <ButtonIcon icon={ShoppingBagIcon} text={"CART"} />
                <ButtonIcon icon={HeartIcon} text={"wishlist"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
