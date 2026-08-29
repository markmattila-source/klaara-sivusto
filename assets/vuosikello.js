(function () {
  var svg = document.getElementById('kelloSvg');
  var viisari = document.getElementById('kelloViisari');
  var kkNimi = document.getElementById('kelloKkNimi');
  var kkTeema = document.getElementById('kelloKkTeema');
  var kortti = document.getElementById('tehtavakortti');
  var nauha = document.getElementById('kkNauha');
  if (!svg || typeof VUOSIKELLO_DATA === 'undefined') return;

  var sektorit = svg.querySelectorAll('.kello-sektori');
  var labelit = svg.querySelectorAll('.kello-label');
  var pillit = nauha ? nauha.querySelectorAll('.kk-pilli') : [];

  var aktiivinenKk = new Date().getMonth();
  var hashOsuma = window.location.hash.match(/^#kk-(\d{1,2})$/);
  if (hashOsuma) {
    var hashKk = parseInt(hashOsuma[1], 10);
    if (hashKk >= 0 && hashKk <= 11) aktiivinenKk = hashKk;
  }
  var kortinAjastin = null;

  function rakennaKortinSisalto(kkIndex) {
    var data = VUOSIKELLO_DATA[kkIndex];
    return data.tehtavat.map(function (t) {
      var linkkiHtml = t.linkki
        ? '<a class="tehtava-linkki" href="' + t.linkki + '">Avaa laskuri →</a>'
        : '';
      return (
        '<div class="tehtava-rivi">' +
          '<span class="tehtava-leima">' + t.leima + '</span>' +
          '<div><div class="tehtava-teksti">' + t.teksti + '</div>' + linkkiHtml + '</div>' +
        '</div>'
      );
    }).join('');
  }

  function asetaKuukausi(kkIndex, kortinFade) {
    aktiivinenKk = kkIndex;
    var data = VUOSIKELLO_DATA[kkIndex];

    svg.style.setProperty('--kello-kulma', (kkIndex * 30) + 'deg');

    sektorit.forEach(function (s) {
      var on = parseInt(s.dataset.kk, 10) === kkIndex;
      s.classList.toggle('aktiivinen', on);
      s.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    labelit.forEach(function (l) {
      l.classList.toggle('aktiivinen', parseInt(l.dataset.kk, 10) === kkIndex);
    });
    pillit.forEach(function (p) {
      var on = parseInt(p.dataset.kk, 10) === kkIndex;
      p.classList.toggle('aktiivinen', on);
      p.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    kkNimi.textContent = data.nimi;
    kkTeema.textContent = data.teema;

    if (kortinAjastin) clearTimeout(kortinAjastin);
    if (kortinFade) {
      kortti.classList.add('himmea');
      kortinAjastin = setTimeout(function () {
        kortti.innerHTML = rakennaKortinSisalto(kkIndex);
        kortti.classList.remove('himmea');
      }, 150);
    } else {
      kortti.innerHTML = rakennaKortinSisalto(kkIndex);
    }
  }

  function siirraKuukausi(delta) {
    asetaKuukausi((aktiivinenKk + delta + 12) % 12, true);
  }

  sektorit.forEach(function (s) {
    s.addEventListener('click', function () {
      asetaKuukausi(parseInt(s.dataset.kk, 10), true);
    });
  });

  pillit.forEach(function (p) {
    p.addEventListener('click', function () {
      asetaKuukausi(parseInt(p.dataset.kk, 10), true);
      p.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
  });

  svg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); siirraKuukausi(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); siirraKuukausi(-1); }
    else if (e.key === 'Home') { e.preventDefault(); asetaKuukausi(0, true); }
    else if (e.key === 'End') { e.preventDefault(); asetaKuukausi(11, true); }
  });

  // Alkutila: kuluva kuukausi. Ei fadea ensimmäisellä näytöllä (kortti on jo tyhjä).
  // CSS hoitaa itse liikkeen (viisarin transition + sektorien animation-delay) tai sen puuttumisen
  // prefers-reduced-motion:n mukaan - JS asettaa vain lopputilan aina samalla tavalla.
  asetaKuukausi(aktiivinenKk, false);

  var aktiivinenPilli = nauha ? nauha.querySelector('.kk-pilli.aktiivinen') : null;
  if (aktiivinenPilli) {
    aktiivinenPilli.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
})();
