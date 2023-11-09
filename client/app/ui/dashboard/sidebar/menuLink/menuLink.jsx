"use client"
import Link from 'next/link';
import style from './menuLink.module.css';
import { usePathname } from 'next/navigation';


const MenuLink = ({item}) => {

    const pathname = usePathname();
   
    return (
      <Link href={item.path} className={`${style.container} ${pathname === item.path && style.active}`}>
        {item.icon}
        {item.title}
      </Link>
    )
  }

  export default MenuLink;