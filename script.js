// =========================
// ACTIVE NAVBAR
// =========================

$("nav a").click(function(){

    $("nav a").removeClass("active");

    $(this).addClass("active");

});

// =========================
// SMOOTH SCROLL
// =========================

$("nav a").on('click', function(e){

    if(this.hash !== ""){

        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({

            scrollTop: $(hash).offset().top - 70

        }, 800);

    }

});

// =========================
// CONTACT FORM SUCCESS
// =========================

$("#contactForm").submit(function(){

    alert("✅ Message Sent Successfully!");

});

// =========================
// DARK MODE BUTTON
// =========================

$("body").prepend(

'<button id="darkBtn">🌙</button>'

);

// =========================
// DARK MODE FUNCTION
// =========================

$("#darkBtn").click(function(){

    $("body").toggleClass("darkMode");

    // CHANGE ICON

    if($("body").hasClass("darkMode")){

        $("#darkBtn").html("☀️");

    }

    else{

        $("#darkBtn").html("🌙");

    }

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

$(window).scroll(function(){

    if($(window).scrollTop() > 50){

        $("nav").css({

            "padding":"14px 8%",

            "background":"#020617",

            "box-shadow":"0 4px 25px rgba(0,0,0,0.5)"

        });

    }

    else{

        $("nav").css({

            "padding":"18px 8%",

            "background":"rgba(8,18,41,0.85)",

            "box-shadow":"0 4px 20px rgba(0,0,0,0.3)"

        });

    }

});

// =========================
// INITIAL SECTION STYLE
// =========================

$("section").css({

    "opacity":"0",

    "transform":"translateY(60px)",

    "transition":"1s"

});

// =========================
// SCROLL ANIMATION
// =========================

$(window).scroll(function(){

    $("section").each(function(){

        let position = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();

        if(position < topOfWindow + 600){

            $(this).css({

                "opacity":"1",

                "transform":"translateY(0px)"

            });

        }

    });

});

// =========================
// HERO TEXT ANIMATION
// =========================

$(".hero-content").hide();

$(".hero-content").fadeIn(2000);

// =========================
// PROJECT CARD HOVER EFFECT
// =========================

$(".project-box").hover(

function(){

    $(this).css({

        "transform":"translateY(-15px) scale(1.03)"

    });

},

function(){

    $(this).css({

        "transform":"translateY(0px) scale(1)"

    });

}

);

// =========================
// BUTTON RIPPLE EFFECT
// =========================

$("button").click(function(e){

    let x = e.pageX - $(this).offset().left;

    let y = e.pageY - $(this).offset().top;

    let ripple = $('<span class="ripple"></span>');

    ripple.css({

        top:y,

        left:x

    });

    $(this).append(ripple);

    setTimeout(() => {

        ripple.remove();

    },600);

});

// =========================
// TYPING EFFECT
// =========================

const texts = [

    "MCA Student",
    "Web Developer",
    "Full Stack Developer"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1000);

    }

    else{

        setTimeout(type,120);

    }

})();

// =========================
// PARTICLE BACKGROUND EFFECT
// =========================

for(let i = 0; i < 25; i++){

    let bubble = $("<div class='bubble'></div>");

    $("body").append(bubble);

    bubble.css({

        width:Math.random()*20 + 10 + "px",

        height:Math.random()*20 + 10 + "px",

        left:Math.random()*100 + "%",

        animationDuration:Math.random()*10 + 5 + "s",

        animationDelay:Math.random()*5 + "s"

    });

}
