$(document).ready(function () {
    // 漢堡選單
    $(".navbar-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".navbar-btn-collapse").toggleClass("show");
        // 點擊後下方.headerTitle要位移(否則會被選單覆蓋)
        $(".headerTitle").toggleClass("move-bottom");
    });

    // AI工具列表選單展開
    $(".dropdown-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".dropdown-btn-menu").toggleClass("show");
    });
    // AI工具列表選單：切換按鈕文字
    $(".new-to-old").click(function (e) {
        e.preventDefault();
        // 選完後把一開始點擊按鈕的狀態show關閉
        $(".dropdown-btn-menu").toggleClass("show");
        $(".dropdown-btn-text").text($('.new-to-old').text());
    });

    $(".old-to-new").click(function (e) {
        e.preventDefault();
        // 選完後把一開始點擊按鈕的狀態show關閉
        $(".dropdown-btn-menu").toggleClass("show");
        $(".dropdown-btn-text").text($('.old-to-new').text());
    });
});