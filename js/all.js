$(document).ready(function () {
    // 漢堡選單
    $(".navbar-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".navbar-btn-collapse").toggleClass("show");
        // 點擊後下方.headerTitle要位移(否則會被選單覆蓋)
        $(".headerTitle").toggleClass("move-bottom");
    });
});