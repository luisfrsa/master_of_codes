function openModal(id) {
  let modal = document.getElementById('modal' + id);
  modal.setAttribute('oppened', true);
}

(function () {
  let progress0 = document.getElementById('zero'),
    progress100 = document.getElementById('ahundread'),
    completePercent = 0,
    completeBG = 0,
    speed = 3,
    cores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080'];

  let progressIntervalPercent = setInterval(() => {
    completePercent++;
    if (completePercent <= 100) {
      progress0.setAttribute('complete', completePercent);
      progress100.setAttribute('complete', 100 - completePercent);
    } else {
      clearInterval(progressIntervalPercent);
    }
  }, speed * 100);
  progress0.setAttribute('corfundo', cores[0]);
  progress100.setAttribute('corfundo', cores[2]);

  let progressIntervalColor = setInterval(() => {
    completeBG++;
    if (completeBG <= 10) {
      progress0.setAttribute('corfundo', cores[(completeBG) % cores.length - 1]);
      progress100.setAttribute('corfundo', cores[(completeBG + 2) % cores.length - 1]);
    } else {
      clearInterval(progressIntervalColor);
    }
  }, speed * 1000);

})();