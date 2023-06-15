// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    // 在手機版時呈現單欄排版
    slidesPerView: 1,
    // 卡片間距24
    spaceBetween: 24,
    // 斷點設定
    breakpoints: {
        // 螢幕寬度大於等於 768px 時切換為 3 欄(即swiper-slide 3個)
        768: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        // 輪播下面的分頁小點點
        dynamicBullets: true,
        // 分頁小點點可以被點擊
        clickable: true,
    },
});