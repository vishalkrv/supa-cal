import siteMetadata from "@/data/siteMetadata";
// import Image from "next/image";
import Features from "./Features";

export default function Intro () {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold">
            {/* <Image src="./logo.png" className="w-12 inline-block mr-2 mask mask-circle" /> */ }
            { siteMetadata.headerTitle }
          </h1>
          <div className="text-center mt-12">
            <img src="../static/intro.svg" alt="Logo" className="w-48 inline-block" />
          </div>
          <Features></Features>
        </div>
      </div>
    </div>
  )
}