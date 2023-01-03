import React, { useEffect, useRef, useState } from "react";
import { addDaysToDate } from "../utils/common";
import styles from "./css/Tabbar.module.css";
import TabIndicator from "./TabIndicator";

interface ITabbarProps {
  onTabChange?: (date: Date) => void;
  children: React.ReactNode[]
}

export default function Tabbar(props: ITabbarProps) {
  const [currentPage, setCurrentPage] = useState(0.0000001);
  const [scrollPosition, setScrollPosition] = useState(0);
  const tabsEl = useRef<HTMLDivElement>(null);

  const currentTab = Math.round(currentPage);

  useEffect(() => {
    setCurrentPage(0);
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.indicators}>
        {props.children.slice(0).map((e, index) => {
          const isActive = currentPage <= index + 0.5 && currentPage >= index - 0.5
          return (
            <TabIndicator onClick={() => {
              tabsEl.current?.scrollTo(index * window.innerWidth, 0)
            }} key={index}
              transform={`translateX(${currentPage * -100 + 200}%)`} isActive={isActive} date={
              addDaysToDate(new Date(), index)
            }/>
          )
        })}
      </div>
      <div className={styles.container}>
      <div className={styles.tabs} ref={tabsEl} onScroll={event => {
        if (!tabsEl.current) return;

        const scrollPosition = tabsEl.current.scrollLeft;
        const currentPage = scrollPosition / tabsEl.current.offsetWidth;
        const newCurrentTab = Math.round(currentPage);

        if (newCurrentTab != currentTab && props.onTabChange) {
          props.onTabChange(addDaysToDate(new Date(), currentTab));
        }

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