let scanner = new Instascan.Scanner({ video: document.getElementById('video') });
scanner.addListener('scan', function (content) {
  window.location.href = content
});
scanner.addListener('scan', function (content) {

})
Instascan.Camera.getCameras().then(cameras => {
  if (cameras.length > 0) {
    scanner.start(cameras[0])
  } else {
    console.error(" nao tem camera")
  }
})


