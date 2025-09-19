interface FilterPanelProps {
    title: string;
    children?: React.ReactNode;
}
const FilterPanel = ({ title, children }: FilterPanelProps) => {
    return (
        <div className={`w-80 bg-[var(--secondary-background)] flex flex-col items-center justify-start font-poppins rounded-sm py-4`}>
            <h1 className={`w-full py-3.25 flex items-center justify-start text-md px-6 font-bold`}>{title}</h1>
            {children}
        </div>
    )
}

export default FilterPanel;