let ii = 2;
let ff = 1;
function checkSlide() {
  let val =
    document.querySelector(".food-item-1").offsetTop +
    document.querySelector(".food-item-1").offsetHeight;
  if (val <= window.scrollY && ff) {
    $(".food-item").css("position", "fixed");
  } 
  else if (val > window.scrollY) {
    $(".food-item").css("position", "absolute");
  }

  let h = window.screen.height;
  let w = window.screen.width;
  if (window.scrollY >= val) {
    console.log(`${h}px`);

      $(".food-item-" + ii).css(
        "clip",
        `rect(${h * (ii - 1) + val - window.scrollY}px,${w}px,${h}px,0px)`
      );
    

    if (h * (ii - 1) + val - window.scrollY <= 0) {
      if (ii >= 9) {
      //  $(".food-item").css("position", "absolute");

        ff = 0;
      }

      ii++;
    }
    if (h * (ii - 1) + val - window.scrollY > h) {
      ii--;
      if (ii <= 9) {
        $(".food-item").css("position", "fixed");
        ff = 1;
      }
    }
  }
}
checkSlide();
checkSlide();
window.addEventListener("scroll", checkSlide);
window.addEventListener("resize", checkSlide);




/*
let ii = 2;
let ff = 1;
function checkSlide() {
  let val =
    document.querySelector(".food-item-1").offsetTop +
    document.querySelector(".food-item-1").offsetHeight;
  if (val <= window.scrollY && ff) {
    $(".food-item").css("position", "fixed");
  } else {
    $(".food-item").css("position", "absolute");
  }

  let h = window.screen.height;
  let w = window.screen.width;
  if (window.scrollY >= val) {
    console.log(`${h}px`);

    if (h * (ii - 1) + val - window.scrollY >= 0) {
      $(".food-item-" + ii).css(
        "clip",
        `rect(${h * (ii - 1) + val - window.scrollY}px,${w}px,${h}px,0px)`
      );
    }

    if (h * (ii - 1) + val - window.scrollY <= 0) {
      if (ii >= 9) {
        $(".food-item").css("position", "absolute");

        ff = 0;
      }

      ii++;
    }
    if (h * (ii - 1) + val - window.scrollY > h) {
      ii--;
      if (ii <= 9) {
        $(".food-item").css("position", "fixed");
        ff = 1;
      }
    }
  }
}
checkSlide();
checkSlide();
window.addEventListener("scroll", checkSlide);*/