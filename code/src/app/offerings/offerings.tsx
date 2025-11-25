import Box from "../components/common/box";
import { offeringItems } from "./icons"
import { techItems } from "./icons";
import Image from "next/image";

export default function Offerings() {
  return (
    <div className="flex flex-col mx-auto
    w-full
    px-4 md:px-20 lg:px-15
    py-6 md:py-10">
      {/*MOBILE SCREEN 1: TECHNOLOGIES*/}
      <section className="md:hidden w-full">
        <h2 className="mb-3">Technologies we support</h2>
        <h3 className=" mb-12">
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

      {/* MOBILE SCREEN 2: OFFERINGS */}
      <section className="md:hidden w-full">
        <h2 className=" mb-3 my-6">What makes us stand out</h2>
        <h3 className=" mb-2">
          Integrate AI across your stack and into your existing workflows
        </h3>

        <div className="grid grid-cols-1">
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

      {/* DESKTOP VIEW  */}
      <div className="hidden md:flex flex-col">
        {/* DESKTOP: TECHNOLOGIES */}
        <h2 className="">Technologies we support</h2>
        <h3 className="mb-1">
          Integrate AI across your stack and into your existing workflows
        </h3>

        <div className="grid grid-cols-6 gap-10">
          {techItems.map((icon, idx) => (
            <div key={idx} className="flex justify-center">
              <Image src={`./${icon}`} alt={icon} width={40} height={40} />
            </div>
          ))}
        </div>

        {/* DESKTOP: OFFERINGS */}
        <h2 className="">What makes us stand out</h2>
        <h3 className="mb-1">
          Integrate AI across your stack and into your existing workflows
        </h3>

        <div className="grid grid-cols-4 gap-15 w-full">
          {offeringItems.flat().map((item, idx) => (

            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

