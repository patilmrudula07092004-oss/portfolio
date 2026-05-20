// =========================
// NAVBAR ACTIVE EFFECT
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

            scrollTop: $(hash).offset().top - 80

        }, 800);

    }

});

// =========================
// CONTACT FORM VALIDATION
// =========================

$("#contactForm").submit(function(e){

    let name = $("input[name='name']").val();

    let email = $("input[name='email']").val();

    let message = $("textarea[name='message']").val();

    if(name === "" || email === "" || message === ""){

        e.preventDefault();

        alert("Please fill all fields");

    }

    else{

        alert("Message Sent Successfully");

    }

});

// =========================
// AJAX PROJECTS
// =========================

$(document).ready(function(){

    $.ajax({

        url:"https://jsonplaceholder.typicode.com/posts",

        method:"GET",

        success:function(data){

            let output = `

            <div>

                <h3>Leave Management System</h3>

                <p>

                Built a smart employee leave management system using Flask,
                HTML, CSS, JavaScript, and MySQL with authentication features.

                </p>

            </div>

            <div>

                <h3>Hospital Management System</h3>

                <p>

                Developed a responsive hospital management application
                with patient record management and admin dashboard.

                </p>

            </div>

            <div>

                <h3>Personal Portfolio Website</h3>

                <p>

                Designed and developed a modern responsive portfolio
                website using HTML, CSS, JavaScript, jQuery, and AJAX.

                </p>

            </div>

            <div>

                <h3>Web Development Skills</h3>

                <p>

                Strong understanding of frontend technologies,
                responsive UI design, AJAX integration, and database systems.

                </p>

            </div>

            <div>

                <h3>Achievements</h3>

                <p>

                Participated in coding competitions,
                technical presentations, and project exhibitions.

                </p>

            </div>

            `;

            $("#projectData").html(output);

        },

        error:function(){

            $("#projectData").html(

                "<p>Project data failed to load</p>"

            );

        }

    });

});

// =========================
// DARK MODE BUTTON
// =========================

$("body").prepend(

    '<button id="darkBtn">🌙</button>'

);

$("#darkBtn").click(function(){

    $("body").toggleClass("darkMode");

});
