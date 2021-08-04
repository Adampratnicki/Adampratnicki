jQuery(function ($) {
    $(".collapsable_tab.info h2").click(toggle_info);
    $(".collapsable_tab.settings h2").click(toggle_settings);

    function toggle_info() {
        $(".collapsable_tab.info").toggleClass("tab_open");
    }
    function toggle_settings() {
        $(".collapsable_tab.settings").toggleClass("tab_open");
    }
})