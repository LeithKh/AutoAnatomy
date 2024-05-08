var currentModelIndex = 0;
var models = [
    { src: "/models/drivetrain/fwd/fwdTran.glb", title: "Transmission", description: "//todo add text", gif: "/images/suspension/overview.gif" },
    { src: "/models/drivetrain/fwd/fwdHub.glb", title: "Wheel hub", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/drivetrain/fwd/fwdHalfshaft.glb", title: "Halfshaft", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/drivetrain/fwd/fwdFly.glb", title: "Flywheel", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/drivetrain/fwd/fwdClutch.glb", title: "Clutch", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/drivetrain/fwd/fwdBear.glb", title: "Clutch bearing", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/drivetrain/fwd/fwdPressPlate.glb", title: "Pressure plate", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" }
];

function changeModel(direction) {
    currentModelIndex += direction;
    if (currentModelIndex < 0) {
        currentModelIndex = models.length - 1;
    } else if (currentModelIndex >= models.length) {
        currentModelIndex = 0;
    }

    var modelViewer = document.getElementById("modelViewer");
    var modelTitle = document.getElementById("modelTitle");
    var modelDescription = document.getElementById("modelDescription");

    modelViewer.setAttribute("src", models[currentModelIndex].src);
    modelTitle.innerText = models[currentModelIndex].title;
    modelDescription.innerText = models[currentModelIndex].description;
    toggleHotspots();
    closeAssemblyPopup(); // Close the popup when changing models
}

function showAssemblyPopup() {
  var assemblyPopup = document.getElementById("assemblyPopup");
  var assemblyGif = document.getElementById("assemblyGif");
  var overlay = document.getElementById("overlay");

  assemblyGif.setAttribute("src", models[currentModelIndex].gif);
  assemblyPopup.style.display = "block";
  overlay.style.display = "block";
}

function closeAssemblyPopup() {
  var assemblyPopup = document.getElementById("assemblyPopup");
  var overlay = document.getElementById("overlay");

  assemblyPopup.style.display = "none";
  overlay.style.display = "none";
}

function toggleAnnotation(hotspotIndex) {
const annotations = document.querySelectorAll('.annotation');

annotations.forEach(function(annotation, index) {
    if (index === hotspotIndex) {
        annotation.style.display = (annotation.style.display === 'none' || annotation.style.display === '') ? 'block' : 'none';
    } else {
        annotation.style.display = 'none';
    }
});
}

function toggleHotspots() {
const modelTitle = document.getElementById('modelTitle');
const hotspots = document.querySelectorAll('.hotspot');

if (modelTitle.innerText !== 'Overview') {
  hotspots.forEach(function(hotspot) {
    hotspot.style.display = 'none';
  });
} else {
  hotspots.forEach(function(hotspot) {
    hotspot.style.display = (hotspot.style.display === 'none' || hotspot.style.display === '') ? 'block' : 'none';
  });
}
}

function toggleFullscreen() {
const modelViewer = document.getElementById('modelViewer');
if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
} else {
  if (modelViewer.requestFullscreen) {
    modelViewer.requestFullscreen();
  } else if (modelViewer.mozRequestFullScreen) {
    modelViewer.mozRequestFullScreen();
  } else if (modelViewer.webkitRequestFullscreen) {
    modelViewer.webkitRequestFullscreen();
  } else if (modelViewer.msRequestFullscreen) {
    modelViewer.msRequestFullscreen();
  }
}
}