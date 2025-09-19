interface RightPanelProps {
    children?: React.ReactNode;
    isCentered?: boolean;
}
const RightPanel = ({ children, isCentered=true }: RightPanelProps) => {
    return (
        <div className={`w-full min-h-14 bg-[var(--secondary-background)] flex items-center px-4 overflow-x-auto scrollbar-hide ${isCentered === true ? 'justify-center' : 'justify-between'}`}>
            {children}
        </div>
    )
}

export default RightPanel;