const showMore = () => {
const tabletMaxWidth = 1023;
const wrapper = document.querySelector('.wrapper');
const content = wrapper.querySelector('.content');
  if (window.matchMedia('(max-width:'+ tabletMaxWidth + 'px)').matches) {
wrapper.addEventListener('click', function() {
  content.classList.toggle('show-more');
})
}
}

export {showMore};
