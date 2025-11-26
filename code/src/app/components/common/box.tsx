import { BoxProps } from "@/app/models/box";
import Image from "next/image";
import { Button } from "./button";

export default function Box({ image,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  className,
  children }: BoxProps) {

  return (
    <div
      className={`
        relative  
        rounded-[30px] 
        bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]
        shadow-[0_6px_20px_0_rgba(0,0,0,0.4)]
        md:p-6 p-4
        flex flex-col md:flex-col 
        md:items-center 
        md:text-center
        text-left
        my-3
        ${className || ""}
      `}
    >

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-row items-center gap-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />

        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-expresso">{title}</h3>
          <p className="text-liver-brown text-sm">{subtitle}</p>

          
          {buttonText && (
            <div className="mt-4">
              <Button onClick={onButtonClick} text={buttonText} />
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-col items-center text-center flex-grow">

        {/* ICON */}
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mb-4 object-contain"
        />

        {/* TITLE */}
        <h3 className="font-semibold mt-2 text-expresso">{title}</h3>

        {/* SUBTITLE */}
        <p className="text-liver-brown mt-1">{subtitle}</p>

        {/* DESCRIPTION (only desktop) */}
        {description && (
          <p className="text-liver-brown mt-15 hidden md:block">
            {description}
          </p>
        )}

        {children}
      </div>

      {/* DESKTOP BUTTON*/}
      {buttonText && (
        <div className="hidden md:flex absolute mt-6 bottom-10 left-0 right-0 justify-center">
          <Button onClick={onButtonClick} text={buttonText} />
        </div>
      )}
    </div>
  );
}
