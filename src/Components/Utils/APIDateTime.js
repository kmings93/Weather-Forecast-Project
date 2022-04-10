/*

    Function Declaration method - APIDateTime()
    
    Using APIDateTime() component here to simulate using a single source of truth to feed into other child components on the main screen component.

*/

const APIDateTime = () => {
  /*
      API only accepts Full Date/Time in these formats:
      1) YYYY-MM-DD[T]HH:mm:ss (SGT)
      2) YYYY-MM-DD
  */

  let today = new Date().toISOString();
  let time = new Date(today).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  today = today.slice(0, 11);
  time = time.slice(0, 8);

  const currDateTime = today + time;

  return currDateTime;
};

export default APIDateTime;
