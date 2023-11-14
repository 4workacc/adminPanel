"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

interface IProps {
    count: number;
}

const Pagination = ({count}: IProps) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const currentPage = params.get("page") || "1";

    const ITEMS_PER_PAGE = 3;
    
    const hasPver = ITEMS_PER_PAGE*(parseInt(currentPage)-1) >0; 
    const hasNext = ITEMS_PER_PAGE*(parseInt(currentPage)-1)+ ITEMS_PER_PAGE < count;
    
    const handleClickPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        params.set("page", (+currentPage-1)+"");
        replace(`${pathname}?${params}`);       
    }
    const handleClickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        params.set("page", (+currentPage+1)+"");
        replace(`${pathname}?${params}`);        
    }
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={handleClickPrev}
                disabled={!hasPver}
            >Prev</button>
            <button
                className={styles.button}
                onClick={handleClickNext}
                disabled={!hasNext}
            >Next</button>
        </div>
    )
}

export default Pagination;