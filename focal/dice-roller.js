const diceRoll = process.argv[2]
let message = ""
for (let i = 0; i < diceRoll; i++){
  let dice = String(Math.floor(Math.random() * 6) + 1);
  message += dice;
  if (i !== (diceRoll - 1)) {
    message += ", ";
  }
}
  console.log(`Rolled ${diceRoll} dice: ${message}`)

  
  


