interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}
const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
    return (
        <>
            {
                Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button 
                        key={page}
                        className={`min-w-15 h-full ${page === currentPage ? `bg-[var(--blue)] text-background` : `bg-[var(--secondary-background)] text-foreground`} transition-colors duration-300 ease-in-out hover:bg-[var(--blue)] hover:text-background`}
                        onClick={() => {
                            if(page <= totalPages) {
                                setCurrentPage(page)
                            }
                        }}
                    >
                        {page}
                    </button>
                ))
            }
        </>
    )
}

export default Pagination;