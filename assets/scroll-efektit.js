(function () {
  var vahennaLiiketta = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Numerolaskuri: laskee 0:sta kohdelukuun kun elementti tulee näkyviin ---
  function animoiLaskuri(el) {
    var kohde = parseFloat(el.dataset.kohde);
    var jalkiliite = el.dataset.jalkiliite || '';
    var desimaalit = el.dataset.desimaalit ? parseInt(el.dataset.desimaalit) : 0;
    if (vahennaLiiketta || isNaN(kohde)) {
      el.textContent = kohde.toFixed(desimaalit) + jalkiliite;
      return;
    }
    var kesto = 1200;
    var alku = null;
    function askel(aikaleima) {
      if (!alku) alku = aikaleima;
      var edistyma = Math.min((aikaleima - alku) / kesto, 1);
      var pehmennetty = 1 - Math.pow(1 - edistyma, 3);
      var nykyinen = kohde * pehmennetty;
      el.textContent = nykyinen.toFixed(desimaalit) + jalkiliite;
      if (edistyma < 1) requestAnimationFrame(askel);
    }
    requestAnimationFrame(askel);
  }

  var laskuriTarkkailija = new IntersectionObserver(function (kohteet) {
    kohteet.forEach(function (kohde) {
      if (kohde.isIntersecting) {
        animoiLaskuri(kohde.target);
        laskuriTarkkailija.unobserve(kohde.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-kohde]').forEach(function (el) {
    laskuriTarkkailija.observe(el);
  });

  // --- Vierityssisääntulo: fade + slide kun elementti tulee näkyviin ---
  var vieritysTarkkailija = new IntersectionObserver(function (kohteet) {
    kohteet.forEach(function (kohde) {
      if (kohde.isIntersecting) {
        kohde.target.classList.add('nakyvissa');
        vieritysTarkkailija.unobserve(kohde.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.vierity-sisaan').forEach(function (el) {
    vieritysTarkkailija.observe(el);
  });
})();
