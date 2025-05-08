import Image from "next/image";

export const Logo = () => (
  <div className="flex gap-2 items-center cursor-pointer">
    <Image
      src="/swatx_logo.jpeg"
      alt="A & H"
      className="h-10 w-auto sm:h-10 rounded-md shadow-md"
      width={200}
      height={200}
    />
    {/* <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">A <span className="text-[#DDC182]">&</span> H Logistics</span> */}
  </div>
);
