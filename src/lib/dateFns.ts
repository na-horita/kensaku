import { parseISO, format } from "date-fns";

// 2023/07/17 22:06
export const dateUntilFun = (created_at: string) =>
  format(parseISO(created_at), "yyyy/MM/dd HH:mm");

// 23年07月17日
export const dateUntilDayJap = (created_at: string) =>
  format(parseISO(created_at), "yy年M月d日");

// 2023/07
export const dateUntilMonth = (created_at: string) =>
  format(parseISO(created_at), "yyyy/MM");
