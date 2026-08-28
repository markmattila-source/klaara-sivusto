(function () {
  var nappi = document.getElementById('hampurilainenNappi');
  var valikko = document.getElementById('mobiilivalikko');
  var scrim = document.getElementById('mobiilivalikkoScrim');
  var sulkuNappi = document.getElementById('mobiilivalikkoSulje');
  if (!nappi || !valikko || !scrim) return;

  function avaaValikko() {
    valikko.classList.add('auki');
    scrim.classList.add('nakyy');
    nappi.classList.add('auki');
    nappi.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function suljeValikko() {
    valikko.classList.remove('auki');
    scrim.classList.remove('nakyy');
    nappi.classList.remove('auki');
    nappi.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  nappi.addEventListener('click', function () {
    if (valikko.classList.contains('auki')) {
      suljeValikko();
    } else {
      avaaValikko();
    }
  });

  scrim.addEventListener('click', suljeValikko);
  if (sulkuNappi) sulkuNappi.addEventListener('click', suljeValikko);

  document.querySelectorAll('.mobiilivalikko-linkit a').forEach(function (a) {
    a.addEventListener('click', suljeValikko);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') suljeValikko();
  });
})();
