$(document).ready(function () {
  // Header
  let topPos = $(window).scrollTop()

  checkScroll(topPos)
  $(window).on('scroll', function () {
    topPos = $(this).scrollTop()
    checkScroll(topPos)
  })
  function checkScroll() {
    topPos > 0
      ? $('.header').addClass('header_active')
      : $('.header').removeClass('header_active')
  }

  // Adaptiv
  $(document).on('click', '.mob', function () {
    $('.page').animate({ width: 'toggle' }, 'fast')
    $('.adaptiv').animate({ width: 'toggle' })
  })

  $(document).on('click', '.adaptiv__header-x', function () {
    $('.adaptiv').animate({ width: 'toggle' }, 'fast')
    $('.page').show(200)
  })

  // Footer Accordeon

  $(document).on('click', '.footer-top__item', function () {
    $('.footer-top__ul:visible').hide(400)
    $(this)
      .children('.footer-top__arrow-block')
      .children('.footer-top__arrow')
      .toggleClass('rotate')
    if ($(this).children('.footer-top__ul').is(':visible')) {
      $(this).children('.footer-top__ul').hide(400)
    } else if ($(this).children('.footer-top__ul').is(':hidden')) {
      $(this).children('.footer-top__ul').slideToggle()
    }
  })

  // Help

  $(document).on('click', '.wa-help-icon', function () {
    $('.wa-block').addClass('wa-show')
  })
  $(document).on('click', '.wa-close-icon', function () {
    $('.wa-block').removeClass('wa-show')
  })
  $(document).on('click', '.wa-whatsapp-icon', function () {
    $('.wa-block').removeClass('wa-show')
  })

  // Adaptiv Accordeon

  $('.adaptiv__list').hide()
  $(document).on('click', '.adaptiv__link_active', function () {
    // if ($(this).next().is(':visible')) {
    //   $(this).next().hide(1000)
    // } else if ($(this).next().is(':hidden')) {
    //   $(this).next().slideToggle(1000)
    // }


    $(this).next().slideToggle(400)
    $(this)
      .children('.adaptiv__link-block')
      .children('.adaptiv__link-line')
      .toggleClass('rotate')


  })
})
