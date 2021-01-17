/********************************************************/
// function([string1, string2],target id,[color1,color2])    
 consoleText(['Web Developer.', 'Web Designer'], 'text',['var(--main-color)']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
/****************************************************/
let ourSkills = document.querySelector(".skills");
window.onscroll = function(){
    let skillOffsetTop = ourSkills.offsetTop;
    let skillOuterHeight = ourSkills.offsetHeight;
    let skillWindow = this.innerHeight;
    let scrollTop = this.pageYOffset;
    
    if(scrollTop > (skillOffsetTop+skillOuterHeight-skillWindow)){
        let allSkill = document.querySelectorAll(".progress span");
        allSkill.forEach(span =>{
            span.style.width = span.dataset.progress;
        });
    }
};
/****************************************************/
document.querySelector('.iconS').onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector('.Box-setting').classList.toggle("open");
};
/******************************************************/

const colorLi = document.querySelectorAll(".color-Box li");
colorLi.forEach(li =>{
    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        
    });
});
/******************************************************/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  $('html,body').animate({scrollTop:0}, '500');
});
/***********************************************************/
$(window).scroll(function() {
  if ($(document).scrollTop() > 700) {
    $('.navbar').addClass('color-change');
    $('.nav a').addClass('li-change');
  } else {
    $('.navbar').removeClass('color-change');
    $('.nav a').removeClass('li-change');
  }
});