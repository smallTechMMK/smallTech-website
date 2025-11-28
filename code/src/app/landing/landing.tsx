import Image from "next/image";
import Header from "../components/core/header"

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3">

      <Header />

      <div className="">

        {/*MAIN DESKTOP*/}
        <div className="hidden md:grid grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className=" mb-3">
                Our Mission
              </h2>
              <p className=" mb-1 max-w-3xl">
                At smallTech we are changing how the world &quot;works&quot;.
         
                By centring our philosophy around the effort to strive balance between production and consumption. </p>
            </div>

            <div>
              <h2 className="mb-3">
                Who We Are
              </h2>

              <p className="mb-1 max-w-3xl">
               We are a collective of software developers, designers, and thinkers who believe in the power of technology to create a better world. 
               
                
               Our mission is to build tools and platforms that empower individuals and communities, fostering a more equitable and sustainable future. </p>
             
            </div>
             <div>
              <h2 className="mb-3">
                Our Expertise
              </h2>
               <p className="mb-1 max-w-3xl">
              Integrate AI across your stack and into your existing workflows.
Our service provider network has got all your needs covered </p>

 </div>
          </div>

          {/* RIGHT COLUMN (GLOBE) */}
          <div className="relative flex items-center justify-end">
            <Image
              src="/globe.png"
              width={600}
              height={600}
              alt="globe"
              className="animate-spin [animation-duration:20s] [animation-timing-function:linear] -mt-20"
            />

          </div>
          {/* Tooltip */}
          <div className="absolute right-[20%] bottom-[10%] text-white text-[10px]">
            <div className="tooltip">
              <Image
                src="/info.png"
                width={15}
                height={15}
                alt="credits"
                tabIndex={0}
                className="cursor-pointer"
              />
              <span className="tooltiptext">
                <a
                  href="https://www.freepik.com/author/hannazasimova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  hannazasimova
                </a>
              </span>
            </div>

          </div>
          <div className="absolute right-[0%] bottom-[0%] text-white text-[10px]">
            <div className="tooltip">
              <Image
                src="/info.png"
                width={15}
                height={15}
                alt="credits"
                tabIndex={0}
                className="cursor-pointer"
              />
              <span className="tooltiptext">
                <a
                  href="https://dribbble.com/abron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Abron Studio
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col">

          <div>
            <h2 className="">
              AI-First Tech Services
            </h2>
            <h3 className="mt-3">
              integrate AI across your stack and into your existing workflows
            </h3>
          </div>


          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/globe.png"
              width={300}
              height={300}
              alt="globe"
              className="animate-spin [animation-duration:20s] [animation-timing-function:linear] w-[360px] max-w-none "
            />


          </div>
          {/* Tooltip */}
          <div className="absolute right-[30%] bottom-[30%] text-white text-[10px]">
            <div className="tooltip">
              <Image
                src="/info.png"
                width={10}
                height={10}
                alt="credits"
                tabIndex={0}
                className="cursor-pointer"
              />
              <span className="tooltiptext">
                <a
                  href="https://www.freepik.com/author/hannazasimova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  hannazasimova
                </a>
              </span>
            </div>

          </div>

          <div className="absolute bottom-[10%]">
            <h2 className="">
              Network of Service Providers
            </h2>
            <h3 className="mt-3">
              our service provider network has got all your needs covered
            </h3>
          </div>

          {/* ToolTip */}
          <div className="text-white right-0 bottom-0 absolute">
            <div className="tooltip">
              <Image
                src="/info.png"
                width={10}
                height={10}
                alt="credits"
                tabIndex={0}
                className="cursor-pointer"
              />
              <span className="tooltiptext">
                <a
                  href="https://dribbble.com/abron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Abron Studio
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
