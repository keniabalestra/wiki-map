/**
* Template Name: iPortfolio - v3.9.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();

      let body = select('body');
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh();
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();



  //Top Map
  // const mapList = document.getElementsByClassName('map');
  // console.log(mapList);
  // for (let mapDiv of mapList) {
  //   console.log(mapDiv)
  //   const latitude = mapDiv.dataset.latitude;
  //   const longitude = mapDiv.dataset.longitude;
  //   const zoom = mapDiv.dataset.zoom;
  //   console.log("latitude: ", latitude)

  //   const mapID = document.getElementById(`${mapDiv.id}`)

  //   const map = L.map(mapID).setView([latitude, longitude], zoom);
  //   console.log("mapDIV.id", mapDiv.id)
  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '© OpenStreetMap'
  //   }).addTo(map);

  //   // const marker = L.marker([51.5, -0.07]).addTo(map);
  //   // const marker1 = L.marker([51.3, -0.07]).addTo(map);

  //   let popup = L.popup();

  //   function onMapClick(e) {
  //     popup
  //       .setLatLng(e.latlng)
  //       .setContent("You clicked the map at " + e.latlng.toString())
  //       .openOn(map);
  //   }

  //   map.on('click', onMapClick);
  // }

  const map = L.map('staticBackdrop1').setView([43.653, -79.383], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  $('#staticBackdrop1').on('shown.bs.modal', function() {
    map.invalidateSize();
  });

  const map2 = L.map('staticBackdrop2').setView([45.5019, -73.567], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map2);

  $('#staticBackdrop2').on('shown.bs.modal', function() {
    map2.invalidateSize();
  });

  const map3 = L.map('staticBackdrop3').setView([49.2827, -123.120], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map3);

  $('#staticBackdrop3').on('shown.bs.modal', function() {
    map3.invalidateSize();
  });

  // Toronto markers
  var marker = L.marker([43.6717134, -79.3307205]).addTo(map);
  marker.bindPopup("<b>Mahas</b><br>Egyptian Brunch.").openPopup();

  var marker = L.marker([43.6790045, -79.4404215]).addTo(map);
  marker.bindPopup("<b>Khmer Thai</b><br>Cambodian family that makes the best food and wants to retire but the neighborhood wont let them!").openPopup();

  var marker = L.marker([43.6512158, -79.4090181]).addTo(map);
  marker.bindPopup("<b>Campacheno</b><br>Sweet little taco spot.").openPopup();

  var marker = L.marker([43.6717134, -79.3307205]).addTo(map);
  marker.bindPopup("<b>Rasta Pasta</b><br>Exactly what it sounds like.").openPopup();

  var marker = L.marker([43.6458179, -79.4217631]).addTo(map);
  marker.bindPopup("<b>Union</b><br>Locally sourced, kinda french, food focused. No music.").openPopup();


  // Montreal markers
  var marker = L.marker([45.518052, -73.603119]).addTo(map2);
  marker.bindPopup("<b>Patati Patata</b><br>Sweet and petite.").openPopup();

  var marker = L.marker([45.520015, -73.56327]).addTo(map2);
  marker.bindPopup("<b>Le Mousso</b><br>Fancy Food").openPopup();

  var marker = L.marker([45.522150, -73.574421]).addTo(map2);
  marker.bindPopup("<b>Au Pied de Cochon</b><br>Rich French Canadian food.").openPopup();

  var marker = L.marker([45.531625, -73.617911]).addTo(map2);
  marker.bindPopup("<b>Depanneur Le Pick Up</b><br>Veggies Welcome.").openPopup();

  var marker = L.marker([45.480924, -73.578837]).addTo(map2);
  marker.bindPopup("<b>Green Spot</b><br>You may have left your one night stand, but Green will always be there for you.").openPopup();


  // Vancouver markers
  var marker = L.marker([49.2343187, -123.1547549]).addTo(map3);
  marker.bindPopup("<b>Pho Tan</b><br>The peanut butter pho will change your life.").openPopup();

  var marker = L.marker([49.28235513364814, -123.10461096249956]).addTo(map3);
  marker.bindPopup("<b>De Beppe</b><br>Fun place for Italian any time of the day.").openPopup();

  var marker = L.marker([49.282727677215156, -123.10482015266828]).addTo(map3);
  marker.bindPopup("<b>Tacofino</b><br>I mean, its not as good as it from the truck on the island, but still...").openPopup();

  var marker = L.marker([49.28311945376058, -123.10402649149965]).addTo(map3);
  marker.bindPopup("<b>The Diamond</b><br>Every once in awhile olive martinis count as dinner. With gin, duh.").openPopup();

  var marker = L.marker([49.26813202099821, -123.16704412084904]).addTo(map3);
  marker.bindPopup("<b>The Naam</b><br>Once youve realized you shouldnt have had martinis for dinner and realize you are in Vancouver and everywhere else to eat closed 3 hours ago... then you realize life aint so bad.").openPopup();

$("#favourite-btn").on('click', function(event){
  console.log("TEST")
  $.get('/map_landing/map_fav')
    .then((data) => {
      console.log("data",data)

    });

} )









})();






// const createNewMap = (mapObj) => {
//   let $newMap = $(`

// <div
//   class="modal fade"
//   id="staticBackdrop3"
//   data-bs-backdrop="static"
//   data-bs-keyboard="false"
//   tabindex="-1"
//   aria-labelledby="staticBackdropLabel"
//   aria-hidden="true"
// >
//   <div class="modal-dialog modal-fullscreen">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">
//           Modal title
//         </h5>
//         <button
//           type="button"
//           class="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>
//       <div class="modal-body">
//         <div id=${/***map chosen by user mapObj.id? */} ></div>
//       </div>
//     </div>
//   </div>
// </div>`);

//   return $newMap;
// };

