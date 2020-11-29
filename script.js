//Scoll animation

const sectionsAnime = document.querySelectorAll('.jsScroll')
const halfWindow = window.innerHeight*0.6

function animeScroll(){
  sectionsAnime.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top
    const isSectionVisible = (sectionTop - halfWindow) < 0
    if (isSectionVisible){
      section.classList.add('active')
    }
  })
}

window.addEventListener('scroll', animeScroll)