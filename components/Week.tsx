import { Fragment, useEffect, useState } from "react";
import { countWeekForwardFromDay, dayNamesFinnish, getCurrentDayIndex } from "../utils/common";
import getWeekMenu, { DayMenu, Weekday, WeekMenu } from "../utils/getWeekMenu";
import styles from "./css/Week.module.css";
import DayBox from "./DayBox";

export default function Week(props: { menu: WeekMenu | null }) {
  if (!props.menu) {
    return (
      <p>There was an internal server error when trying load the menu. This problem is probably temporary and will be fixed soon!</p>
    )
  }

  const todayId = getCurrentDayIndex();

  const restOfWeek: (DayMenu | number)[] = props.menu.days.slice(todayId)

  const sevenDays = countWeekForwardFromDay(getCurrentDayIndex());

  restOfWeek.push(...sevenDays);

  return (
    <div className={styles.weekContainer}>
      {
        restOfWeek.splice(0, 7).map((dayMenu, index) => {
          if (typeof dayMenu == "number") {
            if (dayMenu == Weekday.Saturday || dayMenu == Weekday.Sunday) {
              return <Fragment key={index}></Fragment>
            }
            return <DayBox key={index} dayName={dayNamesFinnish[dayMenu]} menu={undefined}/>
          }

          if (!dayMenu.hash) return null;
          return <DayBox key={dayMenu.hash} dayName={dayNamesFinnish[dayMenu.dayId]} menu={dayMenu} isToday={dayMenu.dayId === todayId} />
        })
      }
    </div>
  )
}