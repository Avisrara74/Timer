export const getTimerValue = (currentTimerValue) => {
  const min = Math.floor(currentTimerValue / 60);
  const sec = currentTimerValue % 60;
  const minutesVisibleFormat = (min >= 10) ? min : `0${min}`;
  const secondsVisibleFormat = (sec >= 10) ? sec : `0${sec}`;

  return `${minutesVisibleFormat} : ${secondsVisibleFormat}`;
};