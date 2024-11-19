document.addEventListener('alpine:init', () => {
    Alpine.data('tabs', () => ({
        tabName: 'ability',
        tabs: [
            {
                'category': 'ability',
                'display_category': 'programming',
                'images': [
                    {
                        'caption': 'HTML',
                        'image': 'images/img of  button/HTML5_logo_and_wordmark.svg.png',
                    },
                    {

                        'caption': 'CSS',
                        'image': 'images/img of  button/images.png',
                    },
                    {
                        'caption': 'JS',
                        'image': 'images/img of  button/javascript-shield-logo-icon-2.png',
                    },
                    {

                        'caption': 'JQUERY',
                        'image': 'images/img of  button/70142.png',

                    },
                    {

                        'caption': 'SASS',
                        'image': 'images/img of  button/1200px-Sass_Logo_Color.svg.png',
                    },
                    {

                        'caption': 'BOOTSTRAP',
                        'image': 'images/img of  button/Bootstrap_logo.svg.png',
                    }
                ]
            },
            {
                'category': 'Computer',
                'display_category': 'Computer',
                'title': 'Computer',
                'caption': 'Computer',
                'images': [
                    {

                        'caption': 'Adobe illustrator',
                        'image': 'images/img of  button/Adobe_Illustrator_CC_icon.svg.png',
                    },
                    {

                        'caption': 'Translate',
                        'image': 'images/img of  button/Translator_Line.png',
                    },
                    {

                        'caption': 'ICDL',
                        'image': 'images/img of  button/Untitled.png',
                    },
                ]
            },
            {
                'category': 'All',
                'display_category': 'All',
                'title': 'all',
                'caption': 'All',
                'images': [
                    {

                        'caption': 'HTML',
                        'image': 'images/img of  button/HTML5_logo_and_wordmark.svg.png',
                    },
                    {

                        'caption': 'CSS',
                        'image': 'images/img of  button/images.png',
                    },
                    {
                        'caption': 'JS',
                        'image': 'images/img of  button/javascript-shield-logo-icon-2.png',
                    },
                    {
                        'caption': 'JQUERY',
                        'image': ' images/img of  button/70142.png',

                    },
                    {
                        'caption': 'SASS',
                        'image': 'images/img of  button/1200px-Sass_Logo_Color.svg.png',
                    },
                    {
                        'caption': 'BOOTSTRAP',
                        'image': 'images/img of  button/Bootstrap_logo.svg.png',
                    },
                    {
                        'caption': 'Adobe illustrator',
                        'image': 'images/img of  button/Adobe_Illustrator_CC_icon.svg.png',
                    },
                    {

                        'caption': 'Translate',
                        'image': 'images/img of  button/Translator_Line.png',
                    },
                    {
                        'caption': 'ICDL',
                        'image': 'images/img of  button/Untitled.png',
                    },
                ]
            },


        ],
    }))
})

// class active
var nav = document.querySelectorAll('.nav-link')
window.onscroll = () => {
    // document.querySelector('.fixed-top').innerHTML = document.documentElement.scrollTop
if(window.innerWidth>900){
    if (document.documentElement.scrollTop >= 0) {
        delete_active()
        nav[0].classList.add('active')

    } if (document.documentElement.scrollTop >= 700) {
        delete_active()
        nav[1].classList.add('active')
    } if (document.documentElement.scrollTop >= 1400) {
        delete_active()
        nav[2].classList.add('active')
    } if (document.documentElement.scrollTop >= 2000) {
        delete_active()
        nav[3].classList.add('active')
    } if (document.documentElement.scrollTop >= 2400) {
        delete_active()
        nav[4].classList.add('active')
    }
    if (document.documentElement.scrollTop >= 2700) {
        delete_active()
        nav[5].classList.add('active')
    }
}}
function delete_active() {
    nav.forEach((p) => {
        p.classList.remove('active')
    })
}
const linkActive = document.querySelectorAll('.nav-link');
if (linkActive.length) {
    linkActive.forEach((li) => {
        li.addEventListener('click', (e) => {
            linkActive.forEach((li) => {
                li.classList.remove('active');
            });

            li.classList.add('active');
        });
    });
}
