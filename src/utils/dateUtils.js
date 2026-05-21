export const formatDateForDisplay = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
};

export const formatDateForApi = (dateStr) => {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split(".");
  let yearNum = parseInt(year, 10);
  if (year.length === 2) yearNum += 2000;
  return `${parseInt(month, 10)}-${parseInt(day, 10)}-${yearNum}`;
};

export const parseDate = (str) => {
  if (!str) return null;
  const [day, month, year] = str.split(".");
  let yearNum = parseInt(year, 10);
  if (year.length === 2) yearNum += 2000;
  return new Date(yearNum, parseInt(month, 10) - 1, parseInt(day, 10));
};

export const formatDateFull = (dateStr, monthNames) => {
  if (!dateStr) return "";
  const [day, month, year] = dateStr.split(".");
  let yearNum = parseInt(year, 10);
  if (year.length === 2) yearNum += 2000;
  return `${parseInt(day, 10)} ${monthNames[parseInt(month, 10) - 1]} ${yearNum}`;
};
