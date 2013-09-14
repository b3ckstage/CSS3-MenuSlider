CSS3-MenuSlider
===============

Recently i was required to use a menu slider for my project. After some research i was able to find some nice jQuery plugins, but the problem was jQuery animation have lower FPS and due to that it lags in mobile devices. I was amused by [MailChimp](http://mailchimp.com) menu slider in there login side, so I decided to create my own CSS3 menu slider.

# CSS3 vs jQuery animation

jQuery animation have lower FPS and all actions performs on CPU level [comparison demo](http://css3.bradshawenterprises.com/blog/jquery-vs-css3-transitions/), while [CSS3 transform](http://www.w3.org/TR/css3-transforms/) performs on GPU level so your CPU will not bother with animations and as a result much higher FPS and smooth transition across all devices.

# Javascript

CSS3 Menu Slider is using [jQuery](https://github.com/jquery/jquery) and [Response JS](https://github.com/ryanve/response.js)

**jQuery** is for triggering actions and all actions are performing in **CSS3**

**Response js** is to determine and perform the CSS3 actions when window resizes or opens in mobile device.

# Usage

All files are **required**, while in theme.css you can change the look according to your platform.

# Compatibility

Chrome 1.0+, Safari 3.2+, Firefox 3.5+, Internet Explorer 9+ and Opera 10.5+ (all tested)

# Future release

Right slide option

# Contribute

Please help to make it more better and add additional features that you like.
