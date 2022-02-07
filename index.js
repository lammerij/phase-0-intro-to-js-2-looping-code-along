const names = ["Guadalupe", "Ollie", "Aki"];
const msg = [];
function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    msg.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return msg;
}

function countDown(x) {
  while (x >= 0) {
    console.log(x--);
  }
}
