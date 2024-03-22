var currentModelIndex = 0;
var models = [
    { src: "/models/suspension/new/overview.glb", title: "Overview", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/conBot.glb", title: "Bottom connecting arm", description: "//todo add text", gif: "/images/suspension/new/part1.gif" },
    { src: "/models/suspension/new/conTop.glb", title: "Top connecting arm", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/steer.glb", title: "Toe link", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/sus.glb", title: "Suspension", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/disk.glb", title: "Brake disk assembly", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/stab.glb", title: "Stabilizer", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/brakes.glb", title: "Brake caliper, pads and master cylinder", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/suspension/new/hubMain.glb", title: "Hub assembly", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" }
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
    toggleHotspots()
    closeAssemblyPopup(); // Close the popup when changing models
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