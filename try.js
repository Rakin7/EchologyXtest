const app = {
  items: [6, 1, 2, 3, 4, 5], // starts with one before (see css: .item-carousel)
  position: 0,
  cacheDOM: function() {
    this.carousel = document.querySelector('.item-carousel');
    this.rightBtn = document.querySelector('.right-btn BUTTON');
    this.leftBtn = document.querySelector('.left-btn BUTTON');
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
},
  enableButtons: function() {
    this.rightBtn.addEventListener('click', this.handleNext);
    this.leftBtn.addEventListener('click', this.handlePrev);
  },
  disableButtons: function() {
    this.rightBtn.removeEventListener('click', this.handleNext);
    this.leftBtn.removeEventListener('click', this.handlePrev);
  },
  handleNext: function() {
    // disable buttons
    this.disableButtons();
    
    // slide left
    anime({
      targets: this.carouselItems,
      translateX: -200,
      duration: 300,
      easing: 'linear',
      complete: () => {
        // chop off last item
        const first = this.items.shift();

        // append item to the end
        this.items.push(first);

        // re-render
        this.render();
        
        // re-enable buttons
        this.enableButtons();
      }
    });   
  },
  handlePrev: function() {
    // disable buttons
    this.disableButtons();
    
    // slide right
    anime({
      targets: this.carouselItems,
      translateX: 200,
      duration: 300,
      easing: 'linear',
      complete: () => {
        // chop off last item
        const last = this.items.pop();

        // append tem to the end
        this.items.unshift(last);

        // re-render
        this.render();
               
        // re-enable buttons
        this.enableButtons();
      }
    });   
  },
  render: function() {
    this.carousel.innerHTML = "";
    const nodes = this.items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add("item");
      div.classList.add(`item-${item}`);
      div.innerText = item;
      this.carousel.appendChild(div);
    });
    this.carouselItems = document.querySelectorAll('.item-carousel .item');
  },
  init: function() {
    this.cacheDOM();
    this.enableButtons();
    this.render();
  }
};
app.init();