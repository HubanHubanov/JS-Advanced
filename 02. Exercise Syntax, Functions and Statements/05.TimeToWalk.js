function timeToWalk(numOfSteps, footstepsLength, speedKmH) {
  let totalMeters = 0;

  for (let i = 0; i < numOfSteps; i++) {
    totalMeters += footstepsLength;
  }

  let addedTimeSec = Math.floor(totalMeters / 500) * 60;

  timeForOneMeter = 3600 / (speedKmH * 1000);

  let totalTime = totalMeters * timeForOneMeter + addedTimeSec;

  let hours = Math.floor(totalTime / 3600);

  let mins = Math.floor(totalTime / 60);
  let secs = Math.ceil(totalTime % 60);

  let setHours = hours.toString().length === 2 ? hours : `0${hours}`;
  let setMins = mins.toString().length === 2 ? mins : `0${mins}`;
  let setSecs = secs.toString().length === 2 ? secs : `0${secs}`;

  console.log(`${setHours}:${setMins}:${setSecs}`);
}

// timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);

// minava 5 km v chas
// 5000 m v chas
// 5000 m - 60min
// 5000 m = 3660 s
// 1 m = 3600 / 5000
