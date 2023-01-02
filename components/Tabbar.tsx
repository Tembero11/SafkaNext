import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Tabbar.module.css";

interface ITabbarProps {
  children: React.ReactNode[]
}

export default function Tabbar(props: ITabbarProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const tabsEl = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.tabNames}>
        { props.children.map((e, index) => <h5 style={{
          left: (tabsEl.current?.offsetWidth || 0) * -currentPage + (tabsEl.current?.offsetWidth || 0)  * index
        }} key={index}>This is tab {index + 1}</h5>) }
      </div>
      <div className={styles.tabs} ref={tabsEl} onScroll={event => {
        if (!tabsEl.current) return;

        const scrollPosition = tabsEl.current.scrollLeft;
        const currentPage = scrollPosition / tabsEl.current.offsetWidth;

        setCurrentPage(currentPage);
        setScrollPosition(scrollPosition);
      }}>
        { props.children }
      </div>
    </div>
  )
}



interface ITabProps {
  children: React.ReactNode
  name: string
}

export function Tab(props: ITabProps) {
  return (
    <div className={styles.tab}>
      <h4>{props.name}</h4>
      {props.children}
    </div>
  )
}