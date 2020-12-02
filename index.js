function randomNumber() {
  var player1 = prompt("Enter player1 name:")
  if (player1 === "") {
    console.log("Inside player1");
    player1 = 'Player 1';
  }

  var player2 = prompt("Enter player2 name:")

  if (player2 === "") {
    console.log("Inside player2");
    player2 = 'Player 2';
  }

  document.querySelectorAll('.dice > p')[0].textContent = player1.toUpperCase();
 document.querySelectorAll('.dice > p')[1].textContent = player2.toUpperCase();

  console.log('Inside function');
  var num1 = Math.floor(Math.random() * 6);
  num1 = num1 + 1;
//  return num1;
  document.querySelector('.img1').setAttribute('src','images/dice'+num1+".png");
  var num2 = Math.floor(Math.random() * 6);
  num2 = num2 + 1;
  var imageName2 = 'dice' + num2;
  console.log(imageName2);
  document.querySelector('.img2').setAttribute('src','images/dice'+num2+".png");
  setH1text(num1,num2,player1,player2);
};

function setH1text(num1,num2,player1,player2){

  if (num1 > num2){
    document.querySelector('h1').textContent = '🚩' + player1 +' is winner!';
  }
  if (num2 > num1){
    document.querySelector('h1').textContent = player2 + ' is winner!' + '🚩';
  }
  if (num2 === num1){
    document.querySelector('h1').textContent = 'Draw!';
  }
}

/* function diceImage() {

  var imageNumber1 = randomNumber1();

  var imageNumber2 = randomNumber1();
}

function getImageName (imageNumber) {
  var imageName;
  if imageNumber === 1{
    imageName = "dice" + imageNumber
  } else
  if if imageNumber === 2{
    imageName = "dice" + imageNumber
  } else
}*/
