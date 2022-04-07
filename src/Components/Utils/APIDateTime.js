/*

    Function Declaration method - APIDateTime()
    
    Using APIDateTime() component here to simulate using a single source of truth to feed into other child components on the main screen component.

    Could have also used .toISOString() for date/time formats.

*/

const APIDateTime = () => {
  const getTimeDate = new Date();
  let getMonth = getTimeDate.getMonth() + 1;
  let getDate = getTimeDate.getDate();
  let getHour = getTimeDate.getHours();
  let getMinute = getTimeDate.getMinutes();
  let getSecond = getTimeDate.getSeconds();

  const leadNum = "0";
  const singleDigit = 10;

  /*
      API only accepts Full Date/Time in these formats:
      1) YYYY-MM-DD[T]HH:mm:ss (SGT)
      2) YYYY-MM-DD
  */

  // Concatenate a leading number '0', if Month / Hour / Minute / Second returns only 1 digit
  getMonth = getMonth < singleDigit ? leadNum.concat(getMonth) : getMonth;
  getDate = getDate < singleDigit ? leadNum.concat(getDate) : getDate;
  getHour = getHour < singleDigit ? leadNum.concat(getHour) : getHour;
  getMinute = getMinute < singleDigit ? leadNum.concat(getMinute) : getMinute;
  getSecond = getSecond < singleDigit ? leadNum.concat(getSecond) : getSecond;

  // Generates current date and time in the format required by the API
  const currDate = getTimeDate.getFullYear() + "-" + getMonth + "-" + getDate;
  const currTime = getHour + ":" + getMinute + ":" + getSecond;

  // Generates current date and time with delimiter 'T'
  const currDateTime = currDate + "T" + currTime;

  return currDateTime;
};

export default APIDateTime;
