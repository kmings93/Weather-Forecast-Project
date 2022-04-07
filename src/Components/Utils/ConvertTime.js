const ConvertTime = (date, time, format, convert) => {
  const locale = "en-US";
  const options = { timeStyle: format };
  let displayUTC8;

  if (convert) {
    // ${date} here is just a placeholder to fulfill format required, this date outcome should not be used!
    displayUTC8 = new Date(`${date} ${time} UTC`);
  } else {
    displayUTC8 = new Date(`${date} ${time}`);
  }

  return displayUTC8.toLocaleString(locale, options);
};

export default ConvertTime;
