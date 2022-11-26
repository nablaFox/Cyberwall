import './styles/style.css'

const bgcolor = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
let clickH = false;

function changeNav() {
    let page = window.location.pathname.split("/").pop();
    let title = document.querySelector("title").innerText;

    if (title == "CyberWall") {
        let menu_1 = document.getElementById('menu-1');
        menu_1.style.setProperty('--menuAfterWidth','100%');
    }

    switch (page) {
        case "":
            let menu_1 = document.getElementById('menu-1');
            menu_1.style.setProperty('--menuAfterWidth','100%');
            break;
    }
}

function fill() {
    window.onscroll = function (e) {
        if (window.scrollY == 0 && clickH == false) {
            document.getElementById('header').style.backgroundColor = "transparent";
        } else {
            document.getElementById('header').style.backgroundColor = bgcolor;
        }
    }   
}

function subMenu() {
    document.querySelectorAll('.menu-w-childs').forEach(item => {
        item.children[0].addEventListener('mouseover', event => {
            item.children[1].style.opacity = "1";
            item.children[1].style.visibility = "visible";
        })
        item.addEventListener('mouseleave', event => {
            item.children[1].style.opacity = "0";
            item.children[1].style.visibility = "hidden";
        })
    })
}

function mobileMenu() {
    // hide the main navbar when the width is less than 935px and viceversa    
    const mediaQuery = window.matchMedia('(max-width: 940px)');
    function handleChangeNav(e) {
        if (e.matches)
            document.getElementById('nav-main').classList.remove('active-nav');
        else
            document.getElementById('nav-main').classList.add('active-nav');
    }
    mediaQuery.addListener(handleChangeNav);
    handleChangeNav(mediaQuery);

    // display or hide the minor navbar when click on the hamburger
    let h = document.getElementById('hamburger');
    h.addEventListener('click', function() {
        if (!clickH) {
            document.getElementById('header').style.backgroundColor = bgcolor;
            document.getElementById('nav-minor').classList.add('active-nav');
            document.querySelector('.hamburger-inner').classList.add('change');
            clickH = true;
        } else {
            document.getElementById('nav-minor').classList.remove('active-nav');
            document.querySelector('.hamburger-inner').classList.remove('change');
            if (window.scrollY == 0)
                document.getElementById('header').style.backgroundColor = "transparent";
            clickH = false;
        }
    });
}

function heroScroller() {
    document.getElementById('scroll').addEventListener('click', function() {
        let offset;
        if (window.innerWidth < 450) {
            offset = 100;
        }
        else {
            offset = 70;
        }
        const section = document.querySelector('.solutions');
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top: y, behavior: 'smooth'})
    });
}

function aosAnimate(e) {
    const classes = ['.fade-up', '.fade-down', '.fade-right', '.fade-left', '.fade-in'];
    const windowHeight = window.innerHeight;

    for (let c in classes) {
        let reveals = document.querySelectorAll(classes[c]);

        for (let i = 0; i < reveals.length; i++) {
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = window.innerHeight * 0.15;

            const delay = reveals[i].getAttribute("data-aos-delay")
            const duration = reveals[i].getAttribute("data-aos-duration");

            if (delay)
                reveals[i].style.transitionDelay = delay
            if (duration)
                reveals[i].style.transitionDuration = duration;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active-anim");
            } else if (reveals[i].getAttribute("data-aos-redo") != "no") {
                reveals[i].classList.remove("active-anim");
            }
        }
    }
}

//document.addEventListener('contextmenu', event => event.preventDefault());

function slider() {
    const slider = document.querySelector('.slider-track');
    const numc = slider.childElementCount;
    const cloned = document.querySelectorAll('.cloned').length;
    const endPosition = (numc - (cloned / 2 + 1));

    const margin = 10;

    let offset;
    let currPosition = 1;

    const setTranslation = () => {
        slider.style.transform = "translateX(" + (offset * currPosition) + "px)";
        slider.style.transition = "none";
    }

    const adjust = () => {
        offset = - (document.querySelector('.slider-container').offsetWidth + margin);
        slider.style.width = numc * -offset + "px";
        setTranslation();
    }

    const translate = (type) => {
        const sign = type == "left" ? -1 : 1;
        currPosition += sign;
        
        if (currPosition == endPosition) { // se arrivi alla fine
            currPosition = 1;
            setTranslation();

            setTimeout(() => {
                translate('right');
                slider.style.transition = "transform .6s";
            }, 0)
        }
        else if (currPosition == 0) { // se arrivi all'inizio
            currPosition = (endPosition - 1);
            setTranslation();

            setTimeout(() => {
                translate('left');
                slider.style.transition = "transform .6s";
            }, 0)
        }
        else {
            slider.style.transition = "transform .6s";
            slider.style.transform = "translateX(" + (currPosition * offset) + "px)";
        }
    }

    adjust();
    window.addEventListener('resize', adjust);

    // test
    slider.addEventListener('mouseup', (e) => {

        if (e.button == 2) {
            translate('right');

        } else if (e.button == 0) {
            translate('left');
        }
    })

    // renderlo responsive, e programmare la versione drag and drop

    /* Automatic slider
    setInterval(function() {
        translate();
    }, 3100)*/


    // Drag and drop slider
}


changeNav(); // change menu-item refers to page
fill(); // fill header when scroll
subMenu(); // drop menu
mobileMenu(); // mobile menu
heroScroller(); // hero scroller

// animation on scroll
window.addEventListener('scroll', aosAnimate)
aosAnimate();

slider();