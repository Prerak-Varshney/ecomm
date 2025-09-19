const DealTypeTag = ({ title }: { title: string }) => {
    return (
        <div className={`px-4 py-1 bg-red-500 text-md font-semibold text-background z-10`}>
            {title}
        </div>
    )
}

export default DealTypeTag