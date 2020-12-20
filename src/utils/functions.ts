export const convertSecondsToHoursMinutesSeconds = (seconds: number): string => {
  const measuredTime = new Date();

  measuredTime.setHours(0);
  measuredTime.setMinutes(0);
  measuredTime.setMilliseconds(0);
  measuredTime.setSeconds(seconds);

  const hours = measuredTime.getHours() > 10 ? measuredTime.getHours() : `0${measuredTime.getHours()}`;
  const minutes = measuredTime.getMinutes() > 10 ? measuredTime.getMinutes() : `0${measuredTime.getMinutes()}`;
  const secondds = measuredTime.getSeconds() > 10 ? measuredTime.getSeconds() : `0${measuredTime.getSeconds()}`;

  return `${hours}:${minutes}:${secondds}`;
};
