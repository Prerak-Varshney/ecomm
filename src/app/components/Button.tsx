"use client"
interface ButtonProps {
    title: string;
}

const Button = ({ title }: ButtonProps) => {
    return (
        <button 
            className={`w-80 py-3.25 bg-[var(--secondary-background)] cursor-pointer hover:bg-foreground/10 transition-colors duration-300 ease-in-out`}
            onClick={() => {}}
        >
        
            <span>{title}</span>
        </button>
    )
}

export default Button;