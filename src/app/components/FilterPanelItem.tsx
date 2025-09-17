"use client";
interface FilterPanelItemProps {
    title: string;
    count: number;
    selectedItem: { title: string, count: number } | null;
    setSelectedItem: (item: { title: string, count: number } | null) => void;
}

const FilterPanelItem = ({ title, count, selectedItem, setSelectedItem }: FilterPanelItemProps) => {
    return (
        <div 
            className={`w-full py-3.25 flex items-center justify-between text-sm px-6 bg-[var(--secondary-background)] cursor-pointer hover:bg-foreground/10 transition-colors duration-300 ease-in-out`}
            onClick={() => setSelectedItem({ title, count })}
        >
            {
                [title, count].map((item, index) => (
                    <span key={index} className={`${selectedItem?.title === title && selectedItem?.count === count ? `text-[var(--blue)]` : `text-foreground`}`}>{item}</span>
                ))
            }
            
        </div>
    )
}

export default FilterPanelItem;