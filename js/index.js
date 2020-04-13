//body
const bodyVar = document.querySelector('body')
//event listener 1
console.log(bodyVar)
bodyVar.addEventListener('wheel', () => {
    var prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
        var currScrollPos = window.pageYOffset;
        if (prevScrollPos > currScrollPos) {
            headerBar.style.top = "0";
        } else {
            headerBar.style.top = "-100px";
        }
    }     
}, false)

//nav
const headerBar = document.querySelector('header')
console.log(headerBar)
headerBar.style.zIndex = '1';
headerBar.style.transition = '.3s';
//event listener 2
headerBar.addEventListener('mousemove', () => {
    headerBar.style.backgroundColor = 'pink'
})
headerBar.addEventListener('mouseleave', (ev) => {
    ev.target.style.backgroundColor = '';
})

const anchors = document.querySelectorAll('a')
console.log(anchors)
anchors.forEach( links => {
    links.style.color = 'red';
    links.style.textDecoration = 'underline overline';
    console.log(links)
    //event listener 3
    links.addEventListener('mouseenter', (ev) => {
      ev.target.style.fontSize = '24px';
      ev.target.style.color = 'dodgerblue';
      ev.target.style.transition = '1s'
    })
    //event listener 4
    links.addEventListener('mouseleave', (ev) => {
        ev.target.style.fontSize = 'initial';
        ev.target.style.color = 'red';        
      })
    //event listener 5
    links.addEventListener('click', (ev) => {
        ev.preventDefault();
    })
})

//main content
let images = document.querySelectorAll('img')
//event listener 6
images[0].addEventListener('dblclick', (ev) => {
    ev.target.style.transform = 'scale(1.5)';
    ev.target.style.transition = '1s';
    ev.target.style.opacity = '1'
})
images[0].addEventListener('mouseleave', (ev) => {
    ev.target.style = 'initial'
    ev.target.style.transition = '2s';
})
images.forEach( imgs => {
    imgs.addEventListener('mouseenter', (ev) => {
        ev.target.style.opacity = '.7'
        ev.target.style.cursor = 'pointer'
        ev.target.style.transition = '.5s'
    })
    imgs.addEventListener('mouseleave', (ev) => {
        ev.target.style.opacity = '1'
    })
})