"use client";

import {
    Fragment
} from "react";
import {
    ArrowUpRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

const Hero = () => {
    return (
        <Fragment>
            <section
            className="bg-white shadow-lg"
            id="domu">
                <Wrapper className="md:px-8 lg:px-10 md:py-10 lg:py-12">
                    <Wrapper className="relative">
                        <Image
                        height={800}
                        width={800}
                        src="/Fotky/Hero.webp"
                        alt="Profesionální dovoz automobilů z Německa"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        className="w-full h-screen object-cover md:min-h-screen md:rounded-4xl"
                        />
                        <Wrapper className="p-4 md:p-5 lg:p-6 text-white absolute inset-0 flex flex-col justify-center gap-3 md:gap-4 lg:gap-4.5">
                            <Image
                            height={32}
                            width={214}
                            src="/Fotky/Google References.webp"
                            alt="Google Hodnocení 5 hvězdiček z 5"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                            className="w-53.5 h-8 md:w-95 md:h-12.5 lg:w-102.25 lg:h-15.25"
                            />
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
                                Profesionální dovoz automobilů z Německa
                            </h1>
                            <p className="text-[15px] md:text-base lg:text-lg max-w-3xl">
                                Zajistíme výběr, prověření a bezpečný dovoz vozu do České republiky. Postaráme se o přihlášení vozu až na 3 roky. Rychle a bez jakýchkoliv starostí.
                            </p>
                            <Link
                            href="#kontakt"
                            className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 w-full md:w-60 cta-primary"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "kontakt");
                            }}>
                                Chci dovést auto
                                <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                            </Link>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </Fragment>
    );
};

export default Hero;