import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex h-[70px] bg-[#1f2021] justify-center mt-auto">
            <div className="flex">
                <Link href="/">
                    <Image
                        src="/jamul-logo.svg"
                        width={103}
                        height={165}
                        alt="Jamul Casino Logo"
                        className="mt-2.5 h-[50px] w-auto"
                    />
                </Link>
                <div className="flex my-auto ml-3 text-white">
                    Haylee Graham &copy; 2023
                </div>
            </div>
        </div>
    );
};

export default Footer;
