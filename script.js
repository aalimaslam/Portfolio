const header = document.querySelector('.hide');
const hamIcon = document.getElementById('hamburger');
function show(){
  header.classList.add('show');
  header.classList.remove('hide');
  hamIcon.classList.add('if')
}
function hide(){
  header.classList.add('hide');
  header.classList.remove('show');
  hamIcon.classList.remove('if');
}

  hamIcon.onclick = (e)=>{
    if(hamIcon.classList.contains('if')){
      hide()
    }
    else if(e.target.classList.contains('d-flex')){
      hide()
    }
    else{
      show()
    }
  }
const links = document.querySelectorAll('.navLinks');
links.forEach(e=>{
  e.onclick = hide
})



// hamIcon.addEventListener('click',show);

