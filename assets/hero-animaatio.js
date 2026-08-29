(function () {
  var summaEl = document.getElementById('heroAnimSumma');
  if (!summaEl) return;

  var fmt = function (n) {
    return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(n));
  };

  var vahennaLiiketta = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LOPPU = 301675;
  var ALKU = 298400;
  var KESTO = 500;

  if (vahennaLiiketta) {
    summaEl.textContent = fmt(LOPPU);
    return;
  }

  summaEl.textContent = fmt(ALKU);

  var alkuaika = null;
  function askel(nyt) {
    if (!alkuaika) alkuaika = nyt;
    var edistyma = Math.min((nyt - alkuaika) / KESTO, 1);
    var pehmennetty = 1 - Math.pow(1 - edistyma, 3);
    summaEl.textContent = fmt(ALKU + (LOPPU - ALKU) * pehmennetty);
    if (edistyma < 1) requestAnimationFrame(askel);
  }
  requestAnimationFrame(askel);
})();
