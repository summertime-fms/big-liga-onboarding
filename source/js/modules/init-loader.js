
const initLoader = () => {
  const desktopMinWidth = 1024;
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.page-wrapper');
  const logo = loader.querySelector('.loader__image');

  const showContent = (evt) => {
    if (window.matchMedia('(min-width:'+ desktopMinWidth + 'px)').matches) {
      if(evt.key == 'Enter') {
        loader.classList.add('hidden');
        content.style.display="block";
        // window.removeEventListener('keydown', function(evt))
        }
    } else {
      loader.classList.add('hidden');
      content.style.display = "block";
    }
  }

  if (window.matchMedia('(min-width:'+ desktopMinWidth + 'px)').matches) {
    const loaderText = loader.querySelector('p');
    loaderText.innerHTML = loaderText.dataset.text
    window.addEventListener('keydown', function(evt) {
    showContent(evt)
  });
} else {
  window.addEventListener('click', function(evt) {
    showContent(evt)
  });
}
}

export {initLoader};




