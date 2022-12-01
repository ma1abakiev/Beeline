$(document).ready(function () {
  // Header
  let topPos = 0

  $(window).on('scroll', function () {
    topPos = $(this).scrollTop()
    topPos > 0
      ? $('.header').addClass('header_active')
      : $('.header').removeClass('header_active')
  })

  // Footer Accordeon
  $(document).on('click', '.footer-top__title', function () {
    $('.footer-top__ul:visible').hide(400)
    $(this).prev().toggleClass('rotate')
    if ($(this).next().is(':visible')) {
      $(this).next().hide(400)
    } else if ($(this).next().is(':hidden')) {
      $(this).next().slideToggle()
    }
  })

  // Adaptiv
  $(document).on('click', '.mob', function () {
    $('.page').hide(500)
    $('.adaptiv').show(500)
  })


  $(document).on('click', '.adaptiv__header-x', function () {
    $('.adaptiv').slideToggle(500)
    $('.page').slideToggle(500)
  })
})
