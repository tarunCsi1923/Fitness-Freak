$(".deal-btn").click(function () {
  console.log("he");
  let a = $(this).attr("id");
  let val = a[1] - "0";
  let b = [
    "",
    "   Dumbbells have a lot going for them, mainly, they are inexpensive when compared to other equipment. But if used right, they can offer just as much, if not more, than some of their more lucrative gym mates.When working out with dumbbells, try not to lock your elbows at the end of the movement, and do not force the last few repetitions if you do not have a friend or gym buddy to spot you.Dumbbells cause you to work other muscles as you are targeting a primary few; due to your body keeping balance and all the stabilizing muscles coming into play.",
    "This one is pretty simple to understand. It’s basically a more convenient alternative to biking. This is the machine you’ll often see used in spin classes, but you can also use it individually. However, make sure not to confuse an indoor cycling bike with other exercise bikes such as a recumbent bike or a regular upright exercise bike.Pro Tip: Using an indoor cycling bike is similar in some ways to a regular bike but very different in other ways. You want to make sure you are staying safe to prevent injuries. Setting up properly and maintaining proper form is the key to doing this.  ",
    "A barbell is perhaps the most versatile out of all the gym equipment out there. You can literally do hundreds of different exercises with these iron bars.A common technique to use when utilizing a barbell is good posture and keeping your body from swaying; in order to make sure that your body stays stabilized, as when doing exercises on a gym machine for example.Because it is easy to cheat and swing your body whichever way to make the exercise easier, using a barbell comes with a word of caution: injuries.It is critical to keep good form when doing barbell exercises, particularly when picking them up off the ground and placing them back down, as during that period the risk of injury is particularly high!",
    "Standing on the gym machine in an angled position, facing downwards, move your upper body up and down. It not uncommon to hold a weight at your chest to increase the intensity, but be careful to not rush this Adding weights too quickly can and often does lead to injury during this type of exercise.",
    "Common mistakes people tend to make when exercising with an incline bench press are: setting the bench at a high incline (over 50 degrees), arching their backs, bouncing the bar off their chest, and locking of elbows.Try to avoid making the above errors by keeping good form and keeping the incline of the bench at below 50 degrees.Finally, the position of your thumb is important. Grip the bar with your thumbs in opposition to your fingers, this is a more natural grip and safer for lifting.",
    " Do not put too much demand on your triceps when exercising with the hammer strength machine. Also avoid locking your elbows at the top of the lift, and try your best to maintain an equal force in both arms as you’re lifting.Muscles Used: Different types target different muscle groups. Primarily chest, then shoulders and triceps; to traps, and others.",
    "The best tool for upper body exercise and strengthening. You can pull yourself up with any grip, though palms facing froward is the most popular one seen in demonstrations. Different grips and hand positions can affect different muscles. You pull yourself up until your chin is over the bar.Pro Tip: Pullups are VERY demanding, especially for beginners. It is because of this that you must learn to master them. They are truly an excellent, and yes very demanding, upper body workout.",
    " Used for strengthening your latissimus dorsi muscle, or lats as they are known. Pull downwards toward you, keeping your elbows and back straight. Google a picture of Bruce Lee and you’ll see the lats you’re capable of attaining with this machine.Pro Tip: As counter-intuitive as it may sound to some people, do not lower the bar to the belly; if you are doing this, it means you are not using enough weight.",
    "Kettlebells have become very popular in the fitness world, there are a ton of different exercises you can do with kettlebells. Fitness enthusiasts are using them for strength training and cardio. Take a look at the video for different ways to use kettlebells.Muscles Used: A lot of different muscle groups. Depends on which exercise you choose to do.",
  ];
  /*
   */
  let productlinks = [
    "",
    "https://www.amazon.in/Kettler-706-010-Hexagonal-Dumbell-4/dp/B093LNV4VJ/ref=sr_1_3_sspa?dchild=1&keywords=dumbbell&qid=1631014445&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkNRRjA3RVIxUjlZJmVuY3J5cHRlZElkPUEwMzg0MTUyMU0zQkRZVzExRkZCOCZlbmNyeXB0ZWRBZElkPUEwNDI0MTE2R1A0TTJHWjZGODMxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    "https://www.amazon.in/Reach-Exercise-Handles-Adjustable-Cushioned/dp/B07DQMSZJF/ref=sr_1_3?dchild=1&keywords=exercise+cycle&qid=1631014719&sr=8-3",
    "https://www.amazon.in/FitBox-Sports-Home-Gym-Barbell/dp/B098LDNCXP/ref=sr_1_11?dchild=1&keywords=barbell+rod&qid=1631014836&s=sports&sr=1-11",
    "https://www.amazon.in/RISE-UP-Extension-Developer-Hyperextension/dp/B08ZDCVJ9K/ref=sr_1_3?dchild=1&keywords=hyperextension+bench&qid=1631014959&s=sports&sr=1-3",
    "https://www.amazon.in/Protoner-FREESTNDG-Blend-Multi-Purpose-Weight/dp/B00NW40MFY/ref=sr_1_8?dchild=1&keywords=incline+bench+press&qid=1631015240&s=sports&sr=1-8",
    "#",
    "https://www.amazon.in/Protoner-Mounting-Straps-fitness-accessory/dp/B06W2L77WP/ref=sr_1_1_sspa?dchild=1&keywords=pullup+bar+at+home&qid=1631015578&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTlJCU1QzSlBKQ1ExJmVuY3J5cHRlZElkPUEwNzY0OTA3MlNGVzUyWU8wS1BDUCZlbmNyeXB0ZWRBZElkPUEwNjE1ODE4MllPOVkySTEzSzA4QyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    "https://www.amazon.in/HASHTAG-FITNESS-Resistance-Exercise-equipment/dp/B08TMB5NPC/ref=sr_1_1_sspa?dchild=1&keywords=lat+pull+down+machine%5D&qid=1631015660&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUTVBWkRDNkUzRUNHJmVuY3J5cHRlZElkPUEwODk0MjAwMlNITTVCUjVVNDVBQSZlbmNyeXB0ZWRBZElkPUEwMzM5MDc3MUxSQjFQQzUwMUYyWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    "https://www.amazon.in/Lifelong-Vinyl-Kettlebell-Workout-Black/dp/B08HZ8JM82/ref=sr_1_1_sspa?dchild=1&keywords=KETTLEBELLS&qid=1631016248&s=sports&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTTBNMzlXS0sxVk4mZW5jcnlwdGVkSWQ9QTA0MjI0NTgyMk1FRUkzMExZNlVLJmVuY3J5cHRlZEFkSWQ9QTA2ODM4NDMyQzFUOFJBVlNZQjlIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  ];

  let popupImages = [
    {},
    {
      img1: "https://www.bodybuilding.com/images/2017/september/the-14-best-biceps-exercieses-for-men-header-830x467.jpg",
      img2: "https://th.bing.com/th/id/OIP.FNnSEeEBewhRaMkpDb-n5gHaEG?w=275&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.00w13VvytU1poH8dK4_5UQHaEv?w=275&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.alwiPD4WwKfPukxU7WttrAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Man_lifting_a_heavy_barbell.jpg/1200px-Man_lifting_a_heavy_barbell.jpg",
      img2: "https://th.bing.com/th/id/OIP.iimaUuClkuFkzzFHIQChcwHaEE?w=294&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.DPP61zf-bf4MOp7oHJjj6wHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.SJDsuawjCz7iNmEn-0k0WQHaEr?w=270&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP._sWlYP2wD7Yh0pVxNTJkmwHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.kJ3YSCKmhqhT3DKXGT3H7wHaDt?w=329&h=175&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.5jkbiYnFgA7eiDGi3-cDBQHaF1?w=238&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.FdzkU_tDNuPN1v_wcZd2ngHaGB?w=194&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.GOwzmlzcpzbIqP-cR2_9ZAHaE8?w=285&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.kicXVB5xZ7_wghk3M8pJ8AHaHa?w=185&h=192&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.cFc-CoOIhpZ66bTIJ0PlewHaE-?w=266&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.vLg9oUgsZulBJrbd8Jp4BgAAAA?w=138&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      img1: "https://th.bing.com/th/id/OIP.UM0tT9nU-QLzWqm-8z6JdgHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      img2: "https://th.bing.com/th/id/OIP.0YGkDVZHsgYSbvaubnAAYgHaDF?w=341&h=145&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
  ];

  document.querySelector(".popup-para").innerHTML = b[val];
  $(".btn-green").attr("href", productlinks[val]);
  $(".popup-image-1").attr("src", popupImages[val].img1);
  $(".popup-image-2").attr("src", popupImages[val].img2);
});




document.querySelector(".nav-button").addEventListener("click", function () {

   $(".nav-background").toggleClass("nav-background-active");

   $(".nav-bar").toggleClass("nav-bar-active");
   console.log("bj");
  
});

console.log("net")
const sliderImages = document.querySelectorAll(".slide");

const detail = document.querySelectorAll(".eachsetdetail");
function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    // halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("newPageActive");
    } else {
      sliderImage.classList.remove("newPageActive");
    }
  });

  detail.forEach((detail) => {
    const slideInAt =
      window.scrollY + window.innerHeight - detail.offsetHeight / 2;
    // bottom of the image

    const detailBottom = detail.offsetTop + detail.offsetHeight;

    const isHalfShown = slideInAt > detail.offsetTop;
    const isNotScrolledPast = window.scrollY < detailBottom;
    if (isHalfShown && isNotScrolledPast) {
      detail.classList.add("newPageActive");
    } else {
      detail.classList.remove("newPageActive");
    }
  });

  // ////////////////////////////////////////////// ROUND ////////////////////////////////

  const roundlayer = document.querySelectorAll(".rounds-layer");
  let v1 = $(".rounds-layer-1").offset().top;
  let v2 = $(".rounds-layer-2").offset().top;

  let v = [v1, v2];
  let roundi = 0;
  roundlayer.forEach((detail) => {
    const slideInAt =
      window.scrollY + window.innerHeight - detail.offsetHeight / 2;
    // bottom of the image

    const topp = v[roundi];

    const detailBottom = topp + detail.offsetHeight;

    const isHalfShown = slideInAt > topp;
    const isNotScrolledPast = window.scrollY < detailBottom;
    roundi++;

    if (isHalfShown && isNotScrolledPast) {
      detail.classList.add("activerounds");
    } else {
      detail.classList.remove("activerounds");
    }
  });

  const ss = document.querySelector(".slider");
  const heightss = $(".slider").offset().top;
  const slideInAt = window.scrollY + window.innerHeight - ss.offsetHeight / 2;
  // bottom of the image

  const ssBottom = heightss + ss.offsetHeight;
  // console.log(ss.offsetHeight);

  const isHalfShown = slideInAt > heightss;
  const isNotScrolledPast = window.scrollY < ssBottom;
  if (isHalfShown && isNotScrolledPast) {
    for (let i = 1; i <= 3; i++) {
      const ssss = document.querySelector(".card-card" + i);

      ssss.classList.add("activate");
    }
  } else {
    for (let i = 1; i <= 3; i++) {
      const ssss = document.querySelector(".card-card" + i);

      ssss.classList.remove("activate");
    }
  }
}

window.addEventListener("scroll", checkSlide);
checkSlide();
checkSlide();
var i = 0;
var txt = "Fitness Freak";
var speed = 125;
function Reverse() {
  if (i > 0) {
    document.getElementById("headerHeading").innerHTML = txt.substr(0, i);
    i--;
    setTimeout(Reverse, speed);
  } else {
    i++;
    typeWriter();
  }
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerHeading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(Reverse, 1500);
  }
}

setTimeout(typeWriter, 280);
var kk = 0;
var txt = "Fitness Freak";
var speed = 125;
function Reverse1() {
  if (kk > 0) {
    document.getElementById("headerHeading1").innerHTML = txt.substr(0, kk);
    kk--;
    setTimeout(Reverse1, speed);
  } else {
    kk++;
    typeWriter1();
  }
}
function typeWriter1() {
  if (kk < txt.length) {
    document.getElementById("headerHeading1").innerHTML += txt.charAt(kk);
    kk++;
    setTimeout(typeWriter1, speed);
  } else {
    setTimeout(Reverse1, 1500);
  }
}

setTimeout(typeWriter1, 280);

// Deals

let call = 0;
let n = 1;
function left() {
  n--;
  if (n <= 0) n = 3;
  show(n);
}
function right() {
  n++;
  if (n > 3) n = 1;
  show(n);
}

function show(k) {
  n = k;
  call++;

  for (let i = 1; i <= 3; i++) {
    document.querySelector(".slider" + i).style.display = "none";
    document.querySelector(".slider" + i).classList.remove("showslider");
  }

  let y = document.querySelectorAll(".sliderline-each");

  for (let i = 0; i < 3; i++) {
    y[i].classList.remove("active");
  }

  document.querySelector(".slider" + n).style.display = "grid";

  if (call != 1) {
    document.querySelector(".slider" + n).style.transform = "translate(0%)";
    document.querySelector(".slider" + n).style.opacity = "1";
  }
  if (n == 1) checkSlide();
  checkSlide();
  y[n - 1].classList.add("active");
}

setTimeout(() => {
  document.querySelector(".imagesleft-card3").style.transform =
    " translateX(0%) scale(1)";
}, 100);
setTimeout(() => {
  document.querySelector(".imagesleft-card2").style.transform =
    " translateX(0%) scale(1)";
}, 400);
setTimeout(() => {
  document.querySelector(".imagesleft-card1").style.transform =
    " translateX(0%) scale(1)";
}, 600);

show(1);

// Rounds

const content = [
  { text: "Being defeated is often a temporary condition. Giving up is what makes it permanent." },
  {
    text: "Failure is only a temporary change in direction to set you straight for your next success.",
  },
  { text: "When it starts to hurt, thats when the set starts." },
  {
    text: "Doubt me, hate me, you’re the inspiration I need",
  },
  { text: "I don’t care how many reps you do, as long as you lift girl weights you’ll get a girl body!" },
];

var cursorPosition = 0;
let j = 0;
var tt = content[j].text;

function videotype() {
  document.getElementById("videoHeading").innerHTML +=
    tt.charAt(cursorPosition);
  cursorPosition += 1;
  if (cursorPosition > tt.length - 1) {
    setTimeout(function () {
      cursorPosition = 0;
      j++;
      if (j == 5) j = 0;
      tt = content[j].text;
      document.getElementById("videoHeading").innerHTML = "";
      setTimeout(videotype, 1000);
    }, 3000);
  } else {
    setTimeout(videotype, 60);
  }
}

videotype();
