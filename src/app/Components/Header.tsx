"use client";

import {
    useState,
    useLayoutEffect,
    Fragment
} from "react";
import {
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false);
    const [isMobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);

    useLayoutEffect(() => {
        const setHeaderToScrolled = () => {
            if (window.scrollY > 0) {
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            };
        };

        window.addEventListener("scroll", setHeaderToScrolled);

        return () => {
            window.removeEventListener("scroll", setHeaderToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className={clsx(`p-2.5 md:p-3 lg:p-3.5 ${isHeaderScrolled && "fixed top-0 left-0"} bg-white shadow-md border-b border-gray-200 w-full z-40 transition-all duration-500 ease-in-out header`)}
            id="header">
                <Wrapper className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                    <Logo />
                    <ul className="hidden lg:flex justify-center items-center gap-2 md:gap-4 lg:gap-6 header-list">
                        {
                            [
                                {
                                    link: "Služby",
                                    href: "/sluzby"
                                },
                                {
                                    link: "Ceník",
                                    href: "/cenik"
                                },
                                {
                                    link: "Recenze",
                                    href: "/recenze"
                                },
                                {
                                    link: "Dovezené vozy",
                                    href: "/dovozene-vozy"
                                },
                                {
                                    link: "FAQ",
                                    href: "/faq"
                                },
                                {
                                    link: "Kontakt",
                                    href: "/kontakt"
                                }
                            ].map((headerItem, headerItemIndex) => (
                                <Fragment key={headerItemIndex}>
                                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#e51616] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                        <Link
                                        href={headerItem.href}
                                        className="text-[#313131] text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#e51616]">
                                            {headerItem.link}
                                        </Link>
                                    </li>
                                </Fragment>
                            ))
                        }
                    </ul>
                    <Link
                    href={`#kontakt`}
                    onClick={(e) => {
                        setLinkWithoutHash(e, "kontakt");
                    }}
                    className="p-2 md:p-3 lg:p-4 hidden lg:flex justify-between items-center gap-2 md:gap-3 lg:gap-4 bg-[#e51616] text-white text-base font-semibold rounded-md">
                        Chci dovést káru
                    </Link>
                    {
                        isMobileMenuClicked ? (
                            <Fragment>
                                <MinusIcon
                                className="lg:hidden w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(false);
                                }}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Bars3Icon
                                className="lg:hidden w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(true);
                                }}
                                />
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
            <MobileMenu
            isMobileMenuClicked={isMobileMenuClicked}
            setMobileMenuClicked={setMobileMenuClicked}
            />
        </Fragment>
    );
};

export default Header;