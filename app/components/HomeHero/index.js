import Link from "next/link";
import Image from "next/image";
import "./HomeHero.scss";

const HomeHero = () => {
    return (
        <div className="flex justify-center mt-[70px]">
            <Image
                src="/jive_lounge.png"
                fill={true}
                alt="JIVe Lounge at Jamul Casino"
                quality={100}
                className="h-[380px]! object-cover mt-[70px]"
            />
            <div className="flex flex-col self-center z-10 text-center mt-52">

                <div className="asset-container mt-6">
                    <Image
                        className="home-svg"
                        src="/jamul-logo-teal.svg"
                        width={103}
                        height={165}
                        alt="Jamul Logo"
                    />
                    <Image
                        className="fade-out top-0 absolute"
                        src="/jamul-logo-covered-teal.svg"
                        width={103}
                        height={165}
                        alt="Jamul Logo Filled"
                    />
                </div>

                <h1 className="text-white text-4xl font-bold drop-shadow-[4px_4px_4px_rgba(0,0,0,1)]">
                    Jamul Casino Entertainment Reviews
                </h1>
                <p className="text-white text-xl font-medium drop-shadow-[3px_3px_3px_rgba(0,0,0,1)]">
                    View and create performer reviews from casino events.
                </p>
            </div>
        </div>
    );
};

export default HomeHero;
