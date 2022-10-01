// burger click //

const navMenu = document.querySelector("nav.menu")
const divBurger = document.querySelector("div.burger")
const iconBars = document.querySelector(".fa-bars")
const iconXmark = document.querySelector(".fa-xmark")

function changeMenu (){
    navMenu.classList.toggle("active")
    iconBars.classList.toggle("active")
    iconXmark.classList.toggle("active")
}

divBurger.addEventListener("click", changeMenu)

// section about-me scroll

$(window).on("scroll", function(){
    const scrollValue = $(this).scrollTop()
    const $aboutMe = $(".wrapper")
    const aboutMeFromTop = $aboutMe.offset().top
    const aboutMeHeight = $aboutMe.outerHeight()
    const windowHeight = $(window).height()

    if (scrollValue > aboutMeFromTop + aboutMeHeight/2 - windowHeight){
        $aboutMe.addClass("active")
    }
    if (scrollValue < 100){
        $aboutMe.removeClass("active")
    }
})

// section skills scroll
$(window).on("scroll", function(){
    const scrollValue = $(this).scrollTop()
    const $allSkills = $(".all-skills")
    const allSkillsFromTop = $allSkills.offset().top
    const allSkillsHeight = $allSkills.outerHeight()
    const windowHeight = $(window).height()

    if (scrollValue > allSkillsFromTop + allSkillsHeight/2 - windowHeight){
        $allSkills.addClass("active")
    }
    if (scrollValue < 100){
        $allSkills.removeClass("active")
    }
})

// section projects scroll{
    $(window).on("scroll", function(){
        const scrollValue = $(this).scrollTop()
        

        const $line1left = $(".line1left")
        const line1leftFromtop = $line1left.offset().top
        const line1leftHeight = $line1left.outerHeight()

        const $line1right = $(".line1right")
        const line1rightFromtop = $line1right.offset().top
        const line1rightHeight = $line1right.outerHeight()

        const $line2left = $(".line2left")
        const line2leftFromtop = $line2left.offset().top
        const line2leftHeight = $line2left.outerHeight()

        const $line2right = $(".line2right")
        const line2rightFromtop = $line2right.offset().top
        const line2rightHeight = $line2right.outerHeight()

        const windowHeight = $(window).height()

        if (scrollValue > line1leftFromtop + line1leftHeight/2 - windowHeight){
            $line1left.addClass("active")
        }
        if (scrollValue > line1rightFromtop + line1rightHeight/2 - windowHeight){
            $line1right.addClass("active")
        }
        if (scrollValue > line2leftFromtop - windowHeight){
            $line2left.addClass("active")
        }
        if (scrollValue > line2rightFromtop - windowHeight){
            $line2right.addClass("active")
        }

        if (scrollValue < 100){
            $line1left.removeClass("active")
            $line1right.removeClass("active")
            $line2left.removeClass("active")
            $line2right.removeClass("active")
        }
    })

// animation svg section skills

var svgEl = document.querySelector('.animated-lines');

var randomRange = function(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min
};

var numberOfLines = 5,
  lineDataArr = [];

var createPathString = function() {

  var completedPath = '',
    comma = ',',
    ampl = 50; // pixel range from 0, aka how deeply they bend

  for (var i = 0; i < numberOfLines; i++) {

    var path = lineDataArr[i];

    var current = {
      x: ampl * Math.sin(path.counter / path.sin),
      y: ampl * Math.cos(path.counter / path.cos)
    };

    var newPathSection = 'M' +
      // starting point
      path.startX +
      comma +
      path.startY +
      // quadratic control point
      ' Q' +
      path.pointX +
      comma +
      (current.y * 1.5).toFixed(3) + // 1.5 to amp up the bend a little
      // center point intersection
      ' ' +
      ((current.x) / 10 + path.centerX).toFixed(3) +
      comma +
      ((current.y) / 5 + path.centerY).toFixed(3) +
      // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
      ' T' +
      path.endX +
      comma +
      path.endY;
    path.counter++;

    completedPath += newPathSection;

  };

  return completedPath;

};

var createLines = function() {

  var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
    // higher is slower
    minSpeed = 85,
    maxSpeed = 150;

  // create an arr which contains objects for all lines
  // createPathString() will use this array
  for (var i = 0; i < numberOfLines; i++) {

    var lineDataObj = {
      counter: randomRange(1, 500), // a broad counter range ensures lines start at different cycles (will look more random)
      startX: randomRange(-150, -140),
      startY: randomRange(50, 30),
      endX: randomRange(350, 320), // viewbox = 200
      endY: randomRange(120, 140), // viewbox = 120
      sin: randomRange(minSpeed, maxSpeed),
      cos: randomRange(minSpeed, maxSpeed),
      pointX: randomRange(30, 55),
      centerX: randomRange(90, 120),
      centerY: randomRange(60, 70)
    }

    lineDataArr.push(lineDataObj)

  }

  var animLoop = function() {
    newPathEl.setAttribute('d', createPathString());
    requestAnimationFrame(animLoop);
  }

  // once the path elements are created, start the animation loop
  svgEl.appendChild(newPathEl);
  animLoop();

};

createLines();




