// https://www.codewithfaraz.com/content/29/pure-css-starbucks-coffee-website-landing-page-using-html-and-pure-css

const main = document.querySelector('.main');
const img_one = document.querySelector('.img-one');
const img_two = document.querySelector('.img-two');
const img_three = document.querySelector('.img-three');


img_one.addEventListener('click', function () {
  main.src = `./img/main.png`;
});


img_two.addEventListener('click', function () {
  main.src = `./img/white-pink2.png`;

})

img_three.addEventListener('click', function () {
  main.src = `./img/pink3.png`;

})