import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Tabbar.module.css";

interface ITabbarProps {
  children: React.ReactNode[]
}

export default function Tabbar(props: ITabbarProps) {
  const [currentPage, setCurrentPage] = useState(0.0000001);
  const [scrollPosition, setScrollPosition] = useState(0);
  const tabsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(0);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.tabs} ref={tabsEl} onScroll={event => {
        if (!tabsEl.current) return;

        const scrollPosition = tabsEl.current.scrollLeft;
        const currentPage = scrollPosition / tabsEl.current.offsetWidth;

        setCurrentPage(currentPage);
        setScrollPosition(scrollPosition);
      }}>
        {props.children.map((tabContent, index) => {
          return (
            <div key={index} className={styles.tab}>
              <div className={styles.tabBox} style={{
                transform: `scale(${calcTabSize(index, currentPage)}) translateX(${calcTabPosition(index, currentPage)}px)`,
              }}>
                {tabContent}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function calcTabSize(pageIndex: number, currentPage: number) {
  let result = 1 - Math.abs(pageIndex - currentPage);
  if (result > 1) result = 1;
  if (result < 0.7) result = 0.7;
  return result;
}
function calcTabPosition(pageIndex: number, currentPage: number) {
  const tabbarWidth = typeof window !== "undefined" ? window.innerWidth : 160;
  if (pageIndex > currentPage) {
    return -(pageIndex - currentPage) * (tabbarWidth * .4);
  }
  return 0;
}

interface ITabProps {
  children: React.ReactNode
  name: string
}

export function Tab(props: ITabProps) {
  return (
    <>
      <h4>{props.name}</h4>
      {props.children}
    </>
  )
}