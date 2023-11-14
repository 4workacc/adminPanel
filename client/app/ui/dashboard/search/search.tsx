"use client"
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IProp {
    placeholder: string
}

const Search = ({placeholder} : IProp) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams);
   
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {        
        if (e.currentTarget.value) {
            params.set("username", e.currentTarget.value);            
        } 
        else {
            params.delete("username");
        }
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>
            <MdSearch />
            <input 
                type="text"
                placeholder={placeholder} 
                className={styles.input}
                onChange={handleSearch}/>
        </div>
    )
}

export default Search;