interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

export function Button({ text, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-[160px] h-[48px]
    sm:w-[180px] sm:h-[52px]
    md:w-[200px] md:h-[56px]
    lg:w-[213px] lg:h-[62px]
        rounded-[60px] 
        bg-expresso
       
        shadow-[0_3px_5px_0_rgba(0,0,0,0.4)]
        hover:opacity-90 transition
        ${className || ""}
      `}
        >
            <p className="font-[500] text-seashell-pink">    {text}</p>
        

        </button>
    );
}
