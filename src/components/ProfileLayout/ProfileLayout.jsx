import React, { useEffect, useState } from "react";
import styles from "./ProfileLayout.module.scss";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu, AiOutlinePoweroff } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { Button2, Calendar } from "../../shared";
import { Link, useNavigate } from "react-router-dom";
import helloSvg from "../../assets/helloSvg.svg";
import { PiContactlessPayment, PiNotebookLight } from "react-icons/pi";
import {FiSettings} from "react-icons/fi"
import {VscFeedback} from "react-icons/vsc"
import {MdOutlineLocalOffer} from "react-icons/md"
import {BsTicketPerforated,BsCalendar3, BsArrowRight} from "react-icons/bs"
import {LuLayoutDashboard} from "react-icons/lu"
import {RxAvatar} from "react-icons/rx"
import { userDataStore } from "../../store";
import { Dropdown } from "antd";
import { scheduleItemsArray } from "../../assets/arrays";


const ProfileLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const sidebarWidth = openSidebar ? "activeMenu" : "inactiveMenu";
  const navigate = useNavigate();
  const { getUserData, userData } = userDataStore;
  useEffect(() => {
    getUserData();
    console.log(userData.data)
  },[])

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  }
  
  const items = [
    {
      key: 1,
      label: userData.data?.name,
    },
    {
      key: 2,
      label: "Profile",
    },
  ];
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.sidebar} ${styles[sidebarWidth]}`}>
        <AiOutlineMenu
          className={styles.toggleBtn}
          size={25}
          onClick={toggleSidebar}
        />
        {openSidebar && (
          <aside className={styles.sidebar__wrapper}>
            <Link className={styles.link} to="/home">
              TravelGo <SiYourtraveldottv color="" size={30} />
            </Link>
            <Button2 onClick={() => navigate(`/profile`)}>
            <LuLayoutDashboard/>
              <span>Dashboard</span>
            </Button2>
            <Button2 onClick={() => navigate(`/mytickets`)}>
            <BsTicketPerforated/>
              <span>My Tickets</span>
            </Button2>
            <Button2 onClick={() => navigate(`/packages`)}>
            <MdOutlineLocalOffer/>
              <span>Packages</span>
            </Button2>
            <Button2 onClick={() => navigate(`/diary`)}>
            <PiNotebookLight/>
              <span>Notebook</span>
            </Button2>
            <Button2 onClick={() => navigate(`/transactions`)}>
            <PiContactlessPayment/>
              <span>Transactions</span>
            </Button2>
            <Button2 onClick={() => navigate(`/feedback`)}>
            <VscFeedback/>
              <span>Feedback</span>
            </Button2>
            <Button2 onClick={() => navigate(`/settings`)}>
            <FiSettings/>
              <span>Settings</span>
            </Button2>
            <Button2 
            onClick={() => logOut()}
            >
            <AiOutlinePoweroff/>
              <span>Logout</span>
            </Button2>
            <div className={styles.sidebar__promote}>
              <p><span>45%</span> Discount!</p>
              <p>Get discount on the first trip! Don’t miss it.</p>
              <span className={styles.arrowIcon}><BsArrowRight/></span>
            </div>
          </aside>
        )}
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header__wrapper}>
          <div className={styles.header}>
            <h3>
              Hello, John Doe{" "}
              <span>
                <img src={helloSvg} alt="emoji hello" />
              </span>
            </h3>
            <p>Welcome back and explore the world</p>
          </div>
          <div className={styles.searchBox}>
            <label>
              <input
                className={styles.search}
                type="search"
                placeholder="Search"
              />
            </label>
            <div className={styles.notification}>
              <IoIosNotificationsOutline />
            </div>
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
      <div className={styles.rightSidebar}>
          <div className={styles.profile}>
            <Dropdown menu={{items}} trigger="click">
              <RxAvatar/>
            </Dropdown>
          <p>John Doe</p>
          </div>
          <div className={styles.rightSidebar__calendar}>
            <Calendar/>
          </div>
          <div className={styles.rightSidebar__schedule}>
            <h3>My Schedule</h3>
            <div className={styles.schedule__items}>
          {scheduleItemsArray.map((item) => (
            <div key={item.id} className={styles.schedule__item}>
              <div className={styles.item__image}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.item__info}>
                <h6>{item.title}</h6>
                <p><BsCalendar3/>{item.date}</p>
              </div>
            </div>
          ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
