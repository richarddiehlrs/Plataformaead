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

export const formatTime = (time: string): string => {
  const formattedTime = time.split(':');
  let hours; let minutes; let seconds;

  if (formattedTime.length === 2) {
    [minutes] = formattedTime;
    [, seconds] = formattedTime;
  }
  if (formattedTime.length === 3) {
    [, minutes] = formattedTime;
    [,, seconds] = formattedTime;
    [hours] = formattedTime;
  }

  const finalTime = hours && Number(hours) !== 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  // if (Number(minutes) < 10) {
  //   minutes = `0${minutes}`;
  // }
  // if (Number(seconds) < 10) {
  //   seconds = `0${seconds}`;
  // }
  // if (Number(hours) < 10) {
  //   hours = `0${hours}`;
  // }

  // console.log(formattedTime.length);
  // console.log(formattedTime);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);
  return finalTime;
};
