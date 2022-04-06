const smallCups=document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage= document.getElementById('percentage')
const remained = document.getElementById('remained')

updatedBigCup()
smallCups.forEach((cup,idx) => {
  cup.addEvenListener('click',()=> highlightcups(idx))

})
function highlightCups(idx){
  if(smallCups[idx].classList.contains('full') && !smallCups [idx].nextElementSibling.classList.contains(full')){
    idx--
  }

  smallCups.forEach(cup,idx2)=>{
    if(idx2<=idx){
      cup.classList.add('full')
    }else {
      cup.classList.remove('full')
    }
  })
  updatedBigCup()
  }
  function upda(){
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalcups=smallCups.length

    if(fullCups)===0) {
      percentage.style.visibility = 'hidden'
      percentage.style.height = 0
    }
    else {
      percentage.style.visibility = visible
      percentage.style.height = '${fullcups/totalCups* 330}px'
      percentage.innertext = '${fullCups/totalCups * 100}%'

      if(fullCups ===totalcups){
        remained.style.visibility = 'hidden'
      }remained.style.height = 0
      else {
        remained.style.visibility = 'visible'
        listers.innertext = '${2-(250*fullCups / 1000)}L'

      }
    }
