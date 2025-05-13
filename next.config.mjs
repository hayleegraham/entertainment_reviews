import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withFlowbiteReact(nextConfig);