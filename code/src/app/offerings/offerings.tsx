import Box from "../components/common/box";
import { offeringItems } from "./icons"
import { techItems } from "./icons";
import Image from "next/image";

export default function Offerings() {
  return (
    <div className="px-[3%] pt-3">
      {/*MOBILE SCREEN 1: TECHNOLOGIES*/}
      <div className="md:hidden min-h-screen flex flex-col justify-between py-6">
        <section className="w-full">
          <h2 className="mb-3">Technologies we support</h2>
          <h3 className=" mb-5">
            Integrate AI across your stack and into your existing workflows
          </h3>

          <div className="grid grid-cols-3 gap-10">
            {techItems.map((icon, i) => (
              <div key={i} className="flex justify-center">
                <Image src={`./${icon}`} alt={icon} width={50} height={50} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MOBILE SCREEN 2: OFFERINGS */}
      <div className=" md:hidden min-h-screen flex flex-col justify-start py-6">
        <section>
          <h2 className="mb-3">What makes us stand out</h2>
          <h3 className="mb-4">
            Integrate AI across your stack and into your existing workflows
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {offeringItems.flat().map((item, idx) => (
              <Box
                key={idx}
                image={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </section>
      </div>
      {/* DESKTOP VIEW  */}
      <div className="hidden md:flex flex-col">
        {/* DESKTOP: TECHNOLOGIES */}

        <h2 className="">What makes us stand out</h2>
        <h3 className="mb-5 font-[200]">
          Integrate AI across your stack and into your existing workflows
        </h3>

        <div className="grid grid-cols-4 gap-15 px-[2%] mb-12">
          {offeringItems.flat().map((item, idx) => (

            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
              className="md:[&_h2]:text-[18px] md:[&_h3]:text-[14px] md:[&_p]:text-[14px] md:[&_img]:w-[50px] md:[&_img]:h-[50px]"
            />
          ))}
        </div>
        {/* DESKTOP: OFFERINGS */}
        <h2 className="">Technologies we support</h2>
        <h3 className="mb-5 font-[200]">
          Integrate AI across your stack and into your existing workflows
        </h3>

        <div className="grid grid-cols-9 gap-y-5 ">
          {techItems.map((icon, idx) => (
            <div key={idx} className="flex justify-center opacity-75">
              <Image src={`./${icon}`} alt={icon} width={70} height={70} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

