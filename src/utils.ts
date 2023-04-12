export function genereteTimeDifference(time: string) {
  const date = new Date();
  const currentTime = date.toJSON().split("T")[1];
  const currentTimeMiliseconds = new Date(
    `1970-01-01T${currentTime}`
  ).getTime();
  const postTime = time.split("T")[1];
  const postTimeMileseconds = new Date(`1970-01-01T${postTime}`).getTime();
  return Math.floor((currentTimeMiliseconds - postTimeMileseconds) / 1000 / 60);
}
