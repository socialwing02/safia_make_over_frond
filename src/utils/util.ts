export function numericDate(inputDate: string): string {
  const [day, month, year] = inputDate.split("-");

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
