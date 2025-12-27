import {
    useState,
    Fragment,
    Activity
} from "react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

interface componentProps {
    className?: string;
    isMobileMenuClicked: boolean;
    setMobileMenuClicked: (bool: boolean) => void;
};

const MobileMenu = ({ ...props }: componentProps) => {
    const dynamicYear = new Date().getFullYear();

    const {
        className,
        isMobileMenuClicked,
        setMobileMenuClicked,
    } = props;

    return (
        <Fragment>
            <Activity mode={isMobileMenuClicked ? "visible" : "hidden"}>
                <Fragment>
                    <Wrapper
                    className="fixed lg:hidden inset-0 z-50 bg-black/40"
                    onClick={(e) => {
                        setMobileMenuClicked(false);
                    }}></Wrapper>
                </Fragment>
            </Activity>
            <Wrapper className={clsx(`
            ${className || ""}
            ${isMobileMenuClicked ? "translate-x-0 lg:-translate-x-full" : "-translate-x-full"}
            p-4 fixed top-0 left-0 z-50 h-screen flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 bg-white max-w-75 transition-transform duration-500 ease-linear
            `)}>
                <Wrapper className="flex flex-col gap-4">
                    <Wrapper className="flex justify-between items-center gap-2">
                        <Logo/>
                    </Wrapper>
                    <ul className="flex flex-col gap-3 text-black mobile-header-list">
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
                </Wrapper>
                <p className="text-black text-center">
                    &copy;
                    {" "}
                    {dynamicYear}
                    {" "}
                    Dovezu Auto.
                    Všechna práva vyhrazena.
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;