//body
const bodyVar = document.querySelector('body')
console.log(bodyVar)
// bodyVar.addEventListener('wheel', event => {
//         event.target.style.backgroundColor = 'red'
//     })

//nav
const anchors = document.querySelectorAll('a')
let navChildren = anchors.children;
console.log(anchors)
anchors.forEach( links => {
    links.style.color = 'red';
    links.style.textDecoration = 'underline overline';
    console.log(links)
    links.addEventListener('mouseenter', (ev) => {
      ev.target.style.fontSize = '24px';
      ev.target.style.color = 'dodgerblue';
    })
    links.addEventListener('mouseleave', (ev) => {
        ev.target.style.fontSize = 'initial';
        ev.target.style.color = 'red';
      })
})


