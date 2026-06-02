const startDate = new Date("2023-05-25");

const today = new Date();

const difference =
today.getTime() - startDate.getTime();

const days =
Math.floor(difference / (1000*60*60*24));

document.getElementById("days").innerHTML =
"We have been together for " +
days +
" beautiful days ❤️";