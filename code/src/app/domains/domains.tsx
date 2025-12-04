
import Box from "../components/common/box";
import Footer from "../components/core/footer";
import { techDomains, businessDomains } from "./constants";

export default function Domains() {
  return (
    <div
      className="
      px-[3%] pt-3"
    >

      {/* MOBILE SCREEN 1: TECH DOMAINS*/}
      <div className="md:hidden min-h-screen flex flex-col justify-start py-6">
        <section className="w-full">

          <h2 className="mb-2">Tech Domains</h2>
          <h3 className="mb-2">
            Explore our portfolio of AI, apps and web innovation
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {techDomains.flat().map((item, idx) => (
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

      {/* MOBILE SCREEN 2: BUSINESS DOMAINS */}
      <div className="md:hidden min-h-screen flex flex-col justify-start py-6 ">
        <section className="w-full">

          <h2 className="mb-2">Business Workflows</h2>
          <h3 className="mb-5">
            Explore our portfolio of AI, apps and web innovation
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {businessDomains.flat().map((item, idx) => (
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

      {/* DESKTOP VIEW*/}
      <div className="hidden md:flex flex-col min-h-screen">
<div className=" flex-grow">
        {/* DESKTOP: TECH DOMAINS */}
        <h2 className="">Tech Domains</h2>
        <h3 className="mb-5 font-[200]">
          Explore our portfolio of AI, apps and web innovation
        </h3>

        <div className="grid grid-cols-5 gap-15  px-[2%] mb-12">
          {techDomains.flat().map((item, idx) => (
            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
              className="md:[&_h2]:text-[18px] md:[&_h3]:text-[14px] md:[&_p]:text-[14px] md:[&_img]:w-[50px] md:[&_img]:h-[50px]"
            />
          ))}
        </div>

        {/* DESKTOP: BUSINESS DOMAINS */}
        <h2 className="">Business Workflows</h2>
        <h3 className="mb-5 font-[200]">
          Explore our portfolio of AI, apps and web innovation
        </h3>

        <div className="grid grid-cols-4 gap-15 px-[2%]">
          {businessDomains.flat().map((item, idx) => (
            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
              className="md:[&_h2]:text-[18px] md:[&_h3]:text-[14px] md:[&_p]:text-[14px] md:[&_img]:w-[50px] md:[&_img]:h-[50px]"
            />
          ))}
        </div>
      </div>
     
      <Footer className= "hidden md:block " />
      
</div>
    </div>
  );
}

