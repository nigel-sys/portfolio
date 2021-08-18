const upArrow = document.querySelector('.upArrow');

window.onscroll = () => {
  onScrollHandler();
};

const onScrollHandler = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    upArrow.style.display = 'block';
  } else {
    upArrow.style.display = 'none';
  }
};

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
