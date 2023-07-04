$(document).ready(function () {
    // 漢堡選單
    $(".navbar-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".navbar-btn-collapse").toggleClass("show");
        // 點擊後icon符號也要相應切換
        $(this).find('.navbar-btn-close').toggleClass('show');
        $(this).find('.navbar-btn-menu').toggleClass('hide');
        // 點擊後下方.headerTitle要位移(否則會被選單覆蓋)
        $(".headerTitle").toggleClass("move-bottom");
    });


    // AI工具列左側篩選單展開
    $(".aiTool-filter-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".dropdown-btn-filter").toggleClass("show");
    });
    // AI工具列左側篩選單：勾選的項目右側出現v符號
    $(".filter-content").click(function (e) {
        e.preventDefault();
        // 目標：自己<a>父層<li>以外，底下的<span>移除被點擊而class增加span.show，並增加d-none
        // 消除前一次選到的<a>底下<span>的class=span.show能被消除
        $(this).parent().siblings().find('.filter-content span').removeClass('show');

        // 前一次選到的<a>底下<span>增加的class=d-none
        $(this).parent().siblings().find('.filter-content span').addClass('d-none');

        // 目標：點擊到的項目上一層<li>底下<span>，移除原有class=d-none並增加class=span.show
        // 消除點擊到的父層底下<span>原有的class=d-none
        $(this).parent().find('.filter-content span').removeClass('d-none');

        // 點擊到的父層底下<span>增加的class=span.show
        $(this).parent().find('.filter-content span').addClass('show');
    });


    // AI工具列右側篩選單展開
    $(".dropdown-btn").click(function (e) {
        // 點擊後展開下拉選單
        $(".dropdown-btn-menu").toggleClass("show");
        // 點擊後icon符號也要相應切換
        $(this).find('.dropdown-btn-expandLess').toggleClass('show');
        $(this).find('.dropdown-btn-expandMore').toggleClass('hide');
    });
    // AI工具列右側篩選單：切換按鈕文字
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

    // 常見問題
    $(".question-block-card>a").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        // 展開答案
        $(this).find('.add-icon').toggleClass('show');
        $(this).find('.remove-icon').toggleClass('show');
        $(this).find('.question-block-collapse').toggleClass('show');
    });
});