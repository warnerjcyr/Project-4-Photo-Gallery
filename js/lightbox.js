/* Treehouse Project #4: Interactive Photo Gallery */
/* by Warner Cyr */

/* Lightbox plugin: Magnific Popup
(http://dimsemenov.com/plugins/magnific-popup/documentation.html) */



/*** lightbox ***/


$('.parent-container').magnificPopup({
    
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
    enabled: true, // set to true to enable gallery
},
    image: {
    // options for image content type
    titleSrc: 'title'
  }
});