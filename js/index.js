//body
const bodyVar = document.querySelector('body')
//event listener 1 - wheel
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
headerBar.style.zIndex = '1';
headerBar.style.transition = '.3s';
//event listener 2 - mousemove
headerBar.addEventListener('mousemove', () => {
    headerBar.style.backgroundColor = 'pink'
})
//event listener 3 - mouseleave
headerBar.addEventListener('mouseleave', (ev) => {
    ev.target.style.backgroundColor = '';
})
const anchors = document.querySelectorAll('a')
anchors.forEach( links => {
    links.style.color = 'red';
    links.style.textDecoration = 'underline overline';
    //event listener 4 - mouseenter
    links.addEventListener('mouseenter', (ev) => {
      ev.target.style.fontSize = '24px';
      ev.target.style.color = 'dodgerblue';
      ev.target.style.transition = '1s'
    })
    links.addEventListener('mouseleave', (ev) => {
        ev.target.style.fontSize = 'initial';
        ev.target.style.color = 'red';        
      })
    //event listener 5 - click
    links.addEventListener('click', (ev) => {
        ev.preventDefault();
    })
})
//main content
let images = document.querySelectorAll('img')
images.forEach( imgs => {
    imgs.style.transition = 'all ease-in-out 500ms';
    //event listener 6 - dblclick
    imgs.addEventListener('dblclick', (ev) => {
        ev.target.style.transform = 'scale(1.5)';        
        ev.target.style.opacity = '1';
        ev.target.style.border = '1px solid black'
    })
    imgs.addEventListener('mouseenter', (ev) => {
        ev.target.style.opacity = '.7'
        ev.target.style.cursor = 'pointer'
           })
    imgs.addEventListener('mouseleave', (ev) => {        
        ev.target.style = 'initial'
        ev.target.style.transition = '2s';
    })
})
let mainContentH2 = document.querySelectorAll('.container h2')
console.log(mainContentH2)
mainContentH2.forEach( h => {
    //event listener 7 - contextmenu
    h.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();
    })
    //event listener 8 - drag
    h.addEventListener('drag', (ev) => {
    console.log(ev.target)
        h.style.opacity = '0'
    })
    //event listener 9 - dragend
    h.addEventListener('dragend', () => {
        h.style.opacity = '1'
    })
})
let mainContentP = document.querySelectorAll('.container p')
mainContentP.forEach( txt => {
    txt.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();
    })    
})
let columnPara = document.querySelectorAll('.content-pick .destination p')
columnPara.forEach( p => {
    //query selector 10 - pointerenter
    p.addEventListener('pointerenter', (ev) => {        
        p.style.textDecoration = 'underline'
        //ev.stopPropagation();
     })
     //query selector 11 - pointerleave
     p.addEventListener('pointerleave', (ev) => {
        p.style.textDecoration = ''
     })
})