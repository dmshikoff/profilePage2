let projectTile = document.querySelectorAll('.my-project')


for(let i of projectTile){
  i.addEventListener('mouseover', function(event){
    event.target.querySelector('img').classList.add('d-none')
    event.target.querySelector('.project-tile-header').classList.remove('d-none')

  })
  i.addEventListener('mouseleave', function(event){
    event.target.querySelector('img').classList.remove('d-none')
    event.target.querySelector('.project-tile-header').classList.add('d-none')
  })
}
