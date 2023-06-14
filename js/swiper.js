// Initialize Swiper
var swiper = new swiper(".mySwiper", {
    // 在手機版時呈現單欄排版
    slidesPerView: 1,
    // 斷點設定
    breakpoints: {
        // 螢幕寬度大於等於 768px 時切換為 3 欄(即swiper-slide 3個)
        768: {
            slidesPerView: 3
        }
    }
});