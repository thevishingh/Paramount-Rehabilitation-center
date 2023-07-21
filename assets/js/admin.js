var bgColorVal = ['.class-catname.bg-theme, .kb-class-tooltip-1::after, .kb-class-tooltip-1 , span.lv-part-blog-calendar-date , .item_count , .class-catname:hover , .blog-slider-btn , .contact-info-wrapper ul li:hover i , .course__tab-btn li button.active , .simple-pagination .current , .simple-pagination .prev.current, .simple-pagination .next.current , .pagination-container ul li a:hover , .shop-details-category p a:hover , .ui-widget-header , .ui-slider .ui-slider-handle:before , .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active, .slick-dots > .slick-active, .sidebar-box .checkbox-lists input[type="checkbox"]:checked + label span, button.side-admin-settings, .admin-cursor-button-list-1 .admin-cursor-magic .mouse-magic, .admin-cursor-button-list-1 .admin-cursor-magic, .admin-cursor-button-list-1 .admin-cursor-default, .cursor-inner.cursor-hover, .cursor-inner, .side-admin-demo-select ul.nav li.nav-item button.active, .cinkes-cursor-admin-panel a, .cinkes-left-cursor button, .cinkes-dark-light-view-box.has-clicked  '];

var normalColorVal = ['.navbar-nav > li:hover > a, .navbar-nav li a:hover, .header-right-txt:hover, .header-right-txt:focus, .feature-img.p-relative a.video-btn:hover i, .class-filter-btn.active, .class-filter-btn:hover, .class-catname.bg-theme:hover, .class-title:hover a , .amount , .staff-name:hover a , .facility-title a:hover , .blog-title a:hover , .gallery-title a:hover , h4.footer-info-txt a:hover , .footer-link:hover , .footer-social:hover , .bottom-footer p .branding-theme , .class-catname , .contact-info a:hover , .breadcrumb-txt a:hover , .sidebar-search-btn i , .blog-sidebar-link:hover , .single-blog-info span > a:hover , .blog-nav-title:hover , .admin-name:hover , .blog-comment-reply:hover , .blog-sidebar-box-body ul li a:hover .popular-post-txt .popular-post-title , .blog-page-blog-title:hover, .blog-page-blog-title:focus , .cart-product-title:hover , .cart-action-btn:hover, .cart-action-btn:focus , .course__video-icon i , .course__video-discount span , .class-details-teacher-name span , .sidebar-class-title:hover , .class-comment-actions a:hover , .contact-info-wrapper ul li i , .nice-select .option:hover, .nice-select .option.focus, .nice-select .option.selected.focus , .shop-card-title:hover , .amount-btn , .gbutton , .sign-input i , .signtext a, .contact-info-wrapper ul li a:hover, .site-admin-demo-single a:hover h4 '];

var borderTopColorVal = ['.dropdown-menu'];
var borderBottomColorVal = [' '];
var borderColorVal = ['.class-catname.bg-theme:hover, .class-catname , .gallery-popup:hover , .checkout-form:focus , .contact-form input:focus , .contact-form textarea:focus , .simple-pagination .current , .sign-input input:focus, .sidebar-search-box:focus-within, .cursor-outer'];


var bgcolor = document.createElement('style');
var normalColor = document.createElement('style'); 
var borderTopColor = document.createElement('style');
var borderBottomColor = document.createElement('style');
var borderColor = document.createElement('style');

colorDomSelect = document.getElementById('admin-color-select');
colorDomSelect.addEventListener('input', function () {
    const color = this.value;
    // save color to local storage
    localStorage.setItem('Pcolor', color);
    bgcolor.innerHTML = `${bgColorVal} { background-color: ${color}}`;
    normalColor.innerHTML = `${normalColorVal} { color: ${color}}`;
    borderTopColor.innerHTML = `${borderTopColorVal} { border-top-color: ${color}}`;
    borderBottomColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${color}}`;
    borderColor.innerHTML = `${borderColorVal} { border-color: ${color}}`;
});

colorFormLocalStorage = localStorage.getItem('Pcolor');
$('.admin-color-btn-reset').on('click', function(e) {
	localStorage.setItem('Pcolor', '#23cc88');
    e.preventDefault();
    console.log(colorFormLocalStorage);
    colorDomSelect.value = colorFormLocalStorage; 
    bgcolor.innerHTML = `${bgColorVal} { background-color: ${colorFormLocalStorage}}`;
    normalColor.innerHTML = `${normalColorVal} { color: ${colorFormLocalStorage}}`;
    borderTopColor.innerHTML = `${borderTopColorVal} { border-top-color: ${colorFormLocalStorage}}`;
    borderBottomColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${colorFormLocalStorage}}`;
    borderColor.innerHTML = `${borderColorVal} { border-color: ${colorFormLocalStorage}}`;
})

console.log(colorFormLocalStorage);
colorDomSelect.value = colorFormLocalStorage; 
bgcolor.innerHTML = `${bgColorVal} { background-color: ${colorFormLocalStorage}}`;
normalColor.innerHTML = `${normalColorVal} { color: ${colorFormLocalStorage}}`;
borderTopColor.innerHTML = `${borderTopColorVal} { border-top-color: ${colorFormLocalStorage}}`;
borderBottomColor.innerHTML = `${borderBottomColorVal} { border-bottom-color: ${colorFormLocalStorage}}`;
borderColor.innerHTML = `${borderColorVal} { border-color: ${colorFormLocalStorage}}`;


document.body.appendChild(bgcolor);
document.body.appendChild(normalColor);
document.body.appendChild(borderTopColor);
document.body.appendChild(borderBottomColor);
document.body.appendChild(borderColor);


;(function($) {

    $('.side-admin-settings').on('click', function() {
        $('.side-admin-panel-right').addClass('side-admin-panel-visible');
        $('.overlay').addClass('overlay-visible');
    })
    $('.cinkes-side-admin-panel-close-btn, .overlay').on('click', function() {
        $('.side-admin-panel-right').removeClass('side-admin-panel-visible');
        $('.overlay').removeClass('overlay-visible');
    })

    
})(jQuery)


