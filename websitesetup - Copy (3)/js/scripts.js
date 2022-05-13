/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
         
    // Initialize and add the google map
    var initMap = function () {
      // The location of Uluru
      //const shop = { lat: 40.62265715507674, lng: -75.38104854729517 };
      const shop = { lat: 40.6221011305076, lng: -75.37979211551679 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: shop,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: shop,
        map: map,
      });
    }
    /* Scroll to the top of the page */
    //Get the button
    var mybutton = document.getElementById("btn-top");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    var scrollFunction = function()   {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    var topFunction = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



window.addEventListener('DOMContentLoaded', event => {    
     
    // Navbar shrink function - When scrolling down upon page load, the header nav (with the logo) changes into white background
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        var siteTitle = document.body.querySelector("#site-title");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {           
            navbarCollapsible.classList.remove('navbar-shrink');            
             siteTitle.classList.remove('change-sitecolor');
        } else {
            siteTitle.classList.add('change-sitecolor');
            navbarCollapsible.classList.add('navbar-shrink');
            

        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink, {passive: true});

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });



});
