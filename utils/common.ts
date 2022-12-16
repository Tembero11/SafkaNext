import { Weekday } from "./getWeekMenu";

export function getCurrentDayIndex() {
  return [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];
}


export const dayNamesFinnish = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai"
]


export function countWeekForwardFromDay(from: Weekday): number[] {
  const days = [];
  for (let i = 0; i < 7; i++) {
    let dayId = i + from + 1;

    if (dayId > 6) {
      dayId = dayId - 7
    }
    days.push(dayId)
  }
  return days;
}


export function toLocaleDateString(date: Date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}