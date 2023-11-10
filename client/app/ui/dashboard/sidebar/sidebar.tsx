import Image from 'next/image.js';
import MenuLink from './menuLink/menuLink.jsx';
import styles from './sidebar.module.css';
import {
  MdSupervisedUserCircle,
  MdDashboard,
  MdShoppingBasket,
  MdAttachMoney,
  MdInsertChartOutlined,
  MdSecurity,
  MdLogout
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Tests",
        path: "/dashboard/tests",
        icon: <MdShoppingBasket />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transations",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analitics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdInsertChartOutlined />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSecurity />
      }
    ]
  }
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className = { styles.userImage} src="/userIcon.png" alt="" width="50" height="50" /> 
        <div className={styles.userDetail}>
          <span className={styles.userName}>XXX</span>
          <span className={styles.userTitle}>ADM</span>
        </div>        
      </div>
      <ul className={styles.list}>
      {menuItems.map(cat=>(       
          <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span> 
          {cat.list.map(item=>(
            <MenuLink item={item} key={item.title}/>
          ))}
          </li>        
      ))}
      </ul>
      <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
    </div>
  )
}