export function genereteTimeDifference(time: string) {
  const date = new Date();
  const currentTime = date.toJSON();
  const currentTimeMiliseconds = new Date(currentTime).getTime();
  const postTimeMileseconds = new Date(time).getTime();
  return Math.floor((currentTimeMiliseconds - postTimeMileseconds) / 1000 / 60);
}
