import { useEffect, useState } from "react";
import { toLocaleDateString } from "../utils/common";
import { DayMenu, Weekday } from "../utils/getWeekMenu";
import styles from "./css/DayBox.module.css";

interface IProps {
  dayName: string;
  menu?: DayMenu;
  date?: Date;
  isToday?: boolean;
}

export default function DayBox(props: IProps) {
  const [date, setDate] = useState("...");

  useEffect(() => {
    if (props.date) {
      setDate(toLocaleDateString(props.date))
    } else if (props.menu?.date) {
      setDate(toLocaleDateString(new Date(props.menu.date)))
    }
  }, [props.menu?.date, props.date])

  return (
    <div className={styles.container + " " + (props.isToday ? styles.today : "")}>
      <h2 className={styles.dayName}>{props.dayName}</h2>
      <div className={styles.break}></div>
      <div className={styles.box}>
        <p className={styles.date}>{date}</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {
            props.menu?.menu.map(food => {
              return (
                <>
                  <li key={food.name}>
                    {food.name}
                    {food.isLactoseFree ? <Diet>L</Diet> : <></>}
                    {food.isDairyFree ? <Diet>M</Diet> : <></>}
                    {food.isGlutenFree ? <Diet>G</Diet> : <></>}
                  </li>
                  <br />
                </>
              )
            })
          }
        </ul>
        {
          props.menu ? <></> : <p style={{ textAlign: "center" }}>Ei saatavilla</p>
        }
      </div>
    </div>
  )
}

function Diet(props: { children: string }) {
  return <span className={styles.diet}>{props.children}</span>
}