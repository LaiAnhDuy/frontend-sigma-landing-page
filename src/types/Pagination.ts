export interface PaginationProp {
    currentPage: number;
    totalPages?: number;
    onChange: (data: number) => void;
} 