export function formatDate(apiDate) {
  const currentDate = new Date();
  const apiDateObj = new Date(apiDate);

  const isToday =
    currentDate.toISOString().slice(0, 10) ===
    apiDateObj.toISOString().slice(0, 10);

  if (isToday) {
    const hours = apiDateObj.getHours().toString().padStart(2, "0");
    const minutes = apiDateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else {
    const month = (apiDateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = apiDateObj.getDate().toString().padStart(2, "0");
    const year = apiDateObj.getFullYear().toString().slice(2);
    return `${month}/${day}/${year}`;
  }
}
