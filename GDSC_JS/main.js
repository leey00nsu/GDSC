function getTime() {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let week = date.getDay();
  let weeks = ["일", "월", "화", "수", "목", "금", "토"];
  let mer;
  if (hour < 11) {
    mer = "AM";
  } else {
    hour -= 12;
    mer = "PM";
  }

  document.querySelector(".hour").innerHTML = `${String(hour).padStart(
    2,
    "0"
  )}:${String(min).padStart(2, "0")}`;
  document.querySelector(".sec").innerHTML = `${String(sec).padStart(2, "0")}`;
  document.querySelector(
    ".date"
  ).innerHTML = `${year}년 ${month}월 ${day}일 ${weeks[week]}요일`;
  document.querySelector(".mer").innerHTML = mer;
}
setInterval(getTime, 1000);
