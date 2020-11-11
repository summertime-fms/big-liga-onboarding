
const initLoader = () => {
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.page-wrapper');
window.addEventListener('keydown', function(evt){
  if(evt.key == 'Enter') {
loader.classList.add('hidden');
content.style.display="block";
  }
})
};

export {initLoader};




