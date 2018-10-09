
function slideElement(){
 this.classList.add("active");
}

function slideElementOut(){
 this.classList.remove("active");

}



const menuEffect = document.querySelectorAll(".nav-item");
const aEffect = document.querySelectorAll(".nav-link");

menuEffect.forEach(ev => ev.addEventListener('mouseover' , slideElement));
menuEffect.forEach(ev => ev.addEventListener('mouseout' , slideElementOut));


/*section 2*/

const wraper = document.querySelectorAll(".wraper");
const moveSquare = document.querySelectorAll(".heder-text");



wraper[0].addEventListener('mousemove' , function(e){
	
	let pageX = e.clientX;
	let pageY = e.clientY;



	moveSquare[0].style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';;
});

/*section 3 */
function Scroll(e)
{
const element = document.querySelectorAll(".benefitImg");
const element2 = document.querySelectorAll(".benefitImg2"); //nodelist obrazkow
 //nodelist obrazkow

var position = window.pageYOffset;

console.log(position);

if(position == 700){
	element.forEach(el => {
		el.classList.add("benefitImgFade");
	});
}else if(position == 4300){
	element2.forEach(el => {
		el.classList.add("benefitImgFade");
});
}
}
window.addEventListener('scroll', Scroll);







