import React, { useState } from "react";
import styles from "./ProfileLayout.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { Button2 } from "../../shared";

const ProfileLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const sidebarWidth = openSidebar ? "activeMenu" : "inactiveMenu";
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
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
            <Button2 title="Dashboard" icon={<SiYourtraveldottv />} />
            <Button2 title="Homepage" icon={<SiYourtraveldottv />} />
            <Button2 title="Settings" icon={<SiYourtraveldottv />} />
          </aside>
        )}
      </div>
      <div className={styles.children}></div>
      <div className={styles.dashboard__calendar}>
        
      </div>
    </div>
  );
};

export default ProfileLayout;
