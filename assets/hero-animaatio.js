(function () {
  var kortti = document.getElementById('heroAnimKortti');
  if (!kortti) return;

  var summaEl = document.getElementById('heroAnimSumma');
  var k01 = document.getElementById('heroKerros01');
  var k02 = document.getElementById('heroKerros02');
  var k03 = document.getElementById('heroKerros03');
  var linkki = document.getElementById('heroAnimLinkki');
  var kerrokset = [k01, k02, k03];

  var fmt = function (n) {
    return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(n));
  };

  var vahennaLiiketta = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ajastimet = [];
  var valmis = false;
  var animoivaFrame = null;

  function tyhjennaAjastimet() {
    ajastimet.forEach(function (id) { clearTimeout(id); });
    ajastimet = [];
    if (animoivaFrame) { cancelAnimationFrame(animoivaFrame); animoivaFrame = null; }
  }

  function animoiNumero(alku, loppu, kesto) {
    var alkuaika = null;
    function askel(nyt) {
      if (!alkuaika) alkuaika = nyt;
      var edistyma = Math.min((nyt - alkuaika) / kesto, 1);
      var pehmennetty = 1 - Math.pow(1 - edistyma, 3);
      summaEl.textContent = fmt(alku + (loppu - alku) * pehmennetty);
      if (edistyma < 1) {
        animoivaFrame = requestAnimationFrame(askel);
      }
    }
    animoivaFrame = requestAnimationFrame(askel);
  }

  function naytaLopputila() {
    valmis = true;
    tyhjennaAjastimet();
    summaEl.textContent = fmt(301675);
    kerrokset.forEach(function (k) { k.classList.add('nakyvissa'); });
    linkki.classList.add('nakyvissa');
    linkki.removeAttribute('tabindex');
    kortti.classList.remove('hero-glow');
  }

  function piilotaAlkutila() {
    summaEl.textContent = fmt(285000);
    kerrokset.forEach(function (k) { k.classList.remove('nakyvissa'); });
    linkki.classList.remove('nakyvissa');
    linkki.setAttribute('tabindex', '-1');
    kortti.classList.remove('hero-glow');
  }

  function ajaSekvenssi() {
    piilotaAlkutila();

    ajastimet.push(setTimeout(function () {
      k01.classList.add('nakyvissa');
    }, 400));

    ajastimet.push(setTimeout(function () {
      k02.classList.add('nakyvissa');
      animoiNumero(285000, 289275, 700);
    }, 1200));

    ajastimet.push(setTimeout(function () {
      k03.classList.add('nakyvissa');
      animoiNumero(289275, 301675, 700);
    }, 2200));

    ajastimet.push(setTimeout(function () {
      kortti.classList.add('hero-glow');
      ajastimet.push(setTimeout(function () { kortti.classList.remove('hero-glow'); }, 600));
    }, 3200));

    ajastimet.push(setTimeout(function () {
      linkki.classList.add('nakyvissa');
      linkki.removeAttribute('tabindex');
    }, 3800));
  }

  kortti.addEventListener('click', naytaLopputila);
  kortti.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      naytaLopputila();
    }
  });

  if (vahennaLiiketta) {
    naytaLopputila();
    return;
  }

  // Kierros 1 heti, kierros 2 asettumisen (n. 4.2s) + 6s tauon jälkeen. Ei kolmatta kierrosta.
  ajaSekvenssi();
  ajastimet.push(setTimeout(function () {
    if (!valmis) ajaSekvenssi();
  }, 10200));
})();
