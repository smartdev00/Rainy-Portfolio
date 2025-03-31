(function () {
  var filename = 'https://tympanus.net/codrops/adpacks/demoad.css?' + new Date().getTime();
  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', filename);
  document.getElementsByTagName('head')[0].appendChild(fileref);

  let cdaSpots = ['ad1'];
  let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

  switch (cdaSpot) {
    case 'ad1':
      var cdaLink = 'https://reweb.so/?ref=codrops-demo';
      var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2025/02/reweb.png';
      var cdaImgAlt = 'Reweb';
      var cdaText = 'Build your Next.js site with AIâ€”generate UI instantly, customize visually, and export clean Next.js, Tailwind & shadcn/ui code!';
      break;
    case 'ad2':
      var cdaLink = 'https://www.wix.com/studio/pantone-color-of-the-year-2025?utm_campaign=pa_media_buying_studio_brnd_12/24_codrops^demos&experiment_id=^brand^^pantone';
      var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2024/12/Demos.png';
      var cdaImgAlt = 'Wix Studio';
      var cdaText = 'The Pantone Color of the Year 2025 web design assets that get you ahead of 2025â€™s web design trends';
      break;
    case 'ad3':
      var cdaLink = 'https://srv.buysellads.com/ads/long/x/TFB2XTZFTTTTTTTFYB6N5TTTTTTVOHAZKATTTTTTC3UV47YTTTTTTB4DCMLFWR4ZV7PCVMZFQQIUTSZLP7IUVLBWPQFT';
      var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2025/01/Codrops_hack_260x200.jpg';
      var cdaImgAlt = 'Agent.ai';
      var cdaText = 'Join the Agent.ai Challenge: $10,000 in Prizes! Open to All. No-Code to Full-Code. Join for Free.';
      break;
    case 'ad4':
      var cdaLink = 'https://bit.ly/codrops-diviai';
      var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
      var cdaImgAlt = 'Divi AI';
      var cdaText = 'Transform content, code, images, and websites on demand with DIVI AI.';
      break;
    default:
      var cdaLink = 'https://bit.ly/codrops-diviai';
      var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
      var cdaImgAlt = 'Divi AI';
      var cdaText = 'Transform content, code, images, and websites on demand with DIVI AI.';
  }

  var cda = document.createElement('div');
  cda.id = 'cdawrap';
  cda.style.display = 'none';
  cda.innerHTML =
    '<a href="' +
    cdaLink +
    '" class="carbon-img" target="_blank" rel="noopener"><img src="' +
    cdaImg +
    '" alt="' +
    cdaImgAlt +
    '" border="0" height="100" width="130"></a><a href="' +
    cdaLink +
    '" class="carbon-text" target="_blank" rel="noopener">' +
    cdaText +
    '</a><div class="cda-footer"><span class="cda-remove" id="cda-remove">Close</span></div>';
  document.getElementsByTagName('body')[0].appendChild(cda);

  setTimeout(function () {
    cda.style.display = 'block';
  }, 1000);

  document.getElementById('cda-remove').addEventListener('click', function (e) {
    cda.style.display = 'none';
    e.preventDefault();
  });
})();
