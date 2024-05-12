const seriesDurations = [
  {
    title: 'Breaking Bad',
    days: 2,
    hours: 3,
    minutes: 40,
  },
  {
    title: 'Scrubs',
    days: 3,
    hours: 0,
    minutes: 48,
  },
  {
    title: 'Game of Thrones',
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: 'House M.D.',
    days: 5,
    hours: 9,
    minutes: 48,
  },
];

const averageLifespanInYears = 80;

function yearsToMinutes(years) {
  const minutesPerYear = 525600; // 365 days * 24 hours * 60 minutes
  return years * minutesPerYear;
}

const calculatePercentageOfLifespan = (durationInMin) =>
  Number(
    ((durationInMin / yearsToMinutes(averageLifespanInYears)) * 100).toFixed(3)
  );

function calculateSeriesPercentage(seriesInformation) {
  let totalDurationInMin = 0;
  const percentages = [];
  for (let i = 0; i < seriesInformation.length; i++) {
    const series = seriesInformation[i];
    const durationInMin =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalDurationInMin += durationInMin;
    const percentagePerSeries = calculatePercentageOfLifespan(durationInMin);
    percentages.push([series.title, percentagePerSeries]);
  }
  const totalPercentage = calculatePercentageOfLifespan(totalDurationInMin);
  percentages.push(totalPercentage);

  return percentages; //looks like [[str, num], [str, num], [str, num], num]
}

function logOutSeriesText() {
  const percentageInformation = calculateSeriesPercentage(seriesDurations);
  let output = '';
  for (let i = 0; i < percentageInformation.length; i++) {
    if (i === percentageInformation.length - 1) {
      output += `\nIn total that is ${percentageInformation[i]}% of my life`;
    } else {
      output += `${percentageInformation[i][0]} took ${percentageInformation[i][1]}% of my life\n`;
    }
  }
  console.log(output);
}

logOutSeriesText();

// Output:
// Breaking Bad took 0.007% of my life
// Scrubs took 0.01% of my life
// Game of Thrones took 0.01% of my life
// House M.D. took 0.019% of my life

// In total that is 0.046% of my life
