"use client";
interface ColorChoiceProps {
    colorName: string;
    color: string;
    selectedColor: { name: string, color: string } | null;
    setSelectedColor: (item: { name: string, color: string } | null) => void;
}

const ColorChoice = ({ colorName, color, selectedColor, setSelectedColor }: ColorChoiceProps) => {
    return (
        <div 
            className={`w-6 h-6 rounded-full border border-[var(--secondary-background)] cursor-pointer`}
            onClick={() => setSelectedColor({ name: colorName, color })}
            style={{ borderColor: selectedColor?.name === colorName && selectedColor?.color === color ? color : 'transparent' }}
        >
            <div 
                className={`w-full h-full rounded-full hover:scale-90 transition-transform duration-300 ease-in-out ${selectedColor?.name === colorName && selectedColor?.color === color && 'scale-90'}`} 
                style={{ backgroundColor: color }} 
            />
        </div>
    )
}

export default ColorChoice;