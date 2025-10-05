export const impactStats = [
  { number: 500, label: "Lives Impacted", suffix: "+" },
  { number: 200, label: "Scholarships", suffix: "+" },
  { number: 100, label: "Youths Skilled", suffix: "+" },
  { number: 50, label: "Families", suffix: "+" },
];

export const getFormattedStats = () => {
  return impactStats.map(stat => ({
    value: `${stat.number}${stat.suffix}`,
    label: stat.label,
  }));
};
