
function Carousel() {
    this.test = 123
    this.slides = document.querySelectorAll('.slide'),
        this.slidesBtn = document.querySelectorAll('.btn__slide')
    this.currentSlide = 0,
        this.arrPlayer = ['Pause', 'Play']
    // this.slideInterval
}
Carousel.prototype = {
    testMethod: function (params) {

    },
    isPlaying: function () {
        if (document.querySelector('.icon-pause2') === null) {
            this.start(1)
            document.querySelector('.icon-play3').className = 'icon-pause2 btn btn__player--pause'
        } else {
            this.start(0)
            document.querySelector('.icon-pause2').className = 'icon-play3 btn btn__player--pause'
        }
    },
    slickSlider: function () {
        this.slides[this.currentSlide].className = 'slide'
        this.slidesBtn[this.currentSlide].className = 'btn btn__slide'
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide active';
        this.slidesBtn[this.currentSlide].className = ' btn btn__slide btn--active';
    },
    clickPrevBtn: function () {
        this.start(0)
        this.slides[this.currentSlide].className = 'slide'
        this.slidesBtn[this.currentSlide].className = 'btn btn__slide'

        if (this.currentSlide === 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = (this.currentSlide - 1) % this.slides.length;
        }
        this.slides[this.currentSlide].className = 'slide active'
        this.slidesBtn[this.currentSlide].className = ' btn btn__slide btn--active';
        this.start(1)
    },
    clickNextBtn: function () {
        this.start(0)
        this.slides[this.currentSlide].className = 'slide'
        this.slidesBtn[this.currentSlide].className = 'btn btn__slide'

        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide active'
        this.slidesBtn[this.currentSlide].className = ' btn btn__slide btn--active';
        this.start(1)

        // clearInterval(slideInterval);
    },
    goToSlide: function (value) {
        this.start(0)
        this.slidesBtn[this.currentSlide].className = ' btn btn__slide';
        this.slides[this.currentSlide].className = 'slide'
        this.currentSlide = value;
        console.log(this)
        this.slidesBtn[this.currentSlide].className = ' btn btn__slide btn--active'
        this.slides[this.currentSlide].className = 'slide active';
        this.start(1)
    },
    start: function (play) {
        if (play === 1) {
            slideInterval = setInterval(this.slickSlider.bind(this), 3000)
            document.querySelector('.icon-play3').className = 'icon-pause2 btn btn__player--pause'
        } else {
            clearInterval(slideInterval)
            document.querySelector('.icon-pause2').className = 'icon-play3 btn btn__player--pause'
        }
    }
};



