import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[70px] bg-[#1f2021] justify-between">
      <div className="flex">
        <div>
          <Link href="/">
            <Image
              src="/jamul-logo.svg"
              width={103}
              height={165}
              alt="Jamul Casino Logo"
              className="ml-12 mt-2.5 h-[50px]"
            />
          </Link>
        </div>
        <div className="flex flex-col my-auto">
          <Link className="text-xl text-white" href="/">
            Entertainment Reviews
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-8 my-auto mr-12 text-white">
        <Link href="/">Home</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/review_form">Add New Review</Link>
      </div>
    </div>    
  );
};

export default Header;
