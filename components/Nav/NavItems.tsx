import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { BsArrowDownShort } from "react-icons/bs";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Transition, Popover } from "@headlessui/react";
import Theme from "../Theme/Theme";
const NavItems = () => {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  const [state, setState] = useState(false);
  const handleClick1 = () => {
    setState(!state);
  };
  return (
    <div>
      <div className=" flex justify-between items-center p-2 mx-0 bg-black bg-opacity-50">
        <h1 className=" text-3xl  select-none pl-4 ">
          <span className="dark:text-mine text-mine2"> Aku</span>
          <span className="dark:text-mine2 text-mine">noro</span>
          <span className="dark:text-mine text-mine2">gia</span>
        </h1>
        <div>
          <ul className="hidden  lg:flex lg:space-x-10 lg:text-lg md:pr-2 xl:pr-96 ">
            <Link href="/">
              <a>
                <li className=" transition duration-500 ease-in-out	 hover:text-mine pl-8">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine2">
                  About
                </li>
              </a>
            </Link>
            {/* <Link href="/quotes">
              <a>
                <li className="transition duration-500 ease-in-out hover:text-mine">
                  Quotes
                </li>
              </a>
            </Link> */}
            <Popover>
              <li onClick={handleClick1} className="cursor-pointer relative  ">
                <Popover.Button>
                  <div className="flex items-center justify-center group">
                    <h1 className="transition duration-500 ease-in-out group-hover:text-mine2 ">
                      My Top Lists
                    </h1>

                    <BsArrowDownShort
                      className={` w-6 h-6 transition duration-500 ease-in-out group-hover:text-mine2  `}
                    />
                  </div>
                </Popover.Button>
                <Transition
                  enter="transition duration-300 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel>
                    <ul
                      className={
                        "pb-4 pt-1 absolute bg-black bg-opacity-90 border rounded-md border-opacity-30 w-48 pl-4 mt-6 -left-6   "
                      }
                    >
                      <Link href="/artists">
                        <a>
                          <li className="transition duration-500 ease-in-out hover:text-mine  py-1">
                            Artists
                          </li>
                        </a>
                      </Link>
                      <Link href="/tracks">
                        <a>
                          <li className="transition duration-500 ease-in-out hover:text-mine2  py-1">
                            Tracks
                          </li>
                        </a>
                      </Link>
                      {/* <Link href="/movies">
                        <a>
                          <li className="transition duration-500 ease-in-out hover:text-mine  py-1">
                            Movies
                          </li>
                        </a>
                      </Link>
                      <Link href="/shows">
                        <a>
                          <li className="transition duration-500 ease-in-out hover:text-mine2  py-1">
                            TV Shows
                          </li>
                        </a>
                      </Link> */}
                    </ul>
                  </Popover.Panel>
                </Transition>
              </li>
            </Popover>
          </ul>
        </div>
        <div className=" hidden lg:block">
          <Theme />
        </div>
        <div className=" lg:hidden flex items-center">
          <button onClick={handleClick} className="mobile-menu-button z-10">
            <MenuIcon
              className={` transition duration-500 ease-in-out hover:text-mine h-9 w-9 ${
                isOpen ? "hidden" : ""
              }  `}
            />
            <XIcon
              className={`transition duration-500 ease-in-out hover:text-mine h-9 w-9 ${
                isOpen ? "" : "hidden"
              } animate-bounce pt-1 `}
            />
          </button>
        </div>
      </div>

      <div className={` lg:hidden top-0 right-0 left-0 `}>
        <MobileMenu result={isOpen} />
      </div>
    </div>
  );
};

export default NavItems;
