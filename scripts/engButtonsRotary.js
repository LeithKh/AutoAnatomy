var currentModelIndex = 0;
var models = [
    { src: "/models/rotary/overview.glb", title: "Overview", description: "//todo add text", gif: "/images/rotary/overview.gif" },
    { src: "/models/rotary/rotor.glb", title: "Rotor", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/rotary/crankshaft.glb", title: "E-Shaft", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/rotary/housing.glb", title: "Rotor housing", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/rotary/frontEndplate.glb", title: "Front plate", description: "//todo add text", gif: "/images/rotary/frontplate.gif" },
    { src: "/models/rotary/midplate.glb", title: "Mid plate", description: "//todo add text", gif: "/images/rotary/midplate.gif" },
    { src: "/models/rotary/endplate.glb", title: "End plate", description: "//todo add text", gif: "/images/rotary/endplate.gif" },
    { src: "/models/rotary/counterweight.glb", title: "Balancer", description: "//todo add text", gif: "/images/rotary/balancer.gif" },
    { src: "/models/rotary/chainNCover.glb", title: "Timing chain", description: "//todo add text", gif: "/images/rotary/chain.gif" },
    { src: "/models/rotary/timingCover.glb", title: "Timing cover/Engine cover", description: "//todo add text", gif: "/images/rotary/timing.gif" },
    { src: "/models/rotary/water.glb", title: "Secondary water pump", description: "//todo add text", gif: "/images/rotary/water2.gif" },
    { src: "/models/rotary/waterpump.glb", title: "Primary water pump", description: "//todo add text", gif: "/images/rotary/water.gif" },
    { src: "/models/rotary/harm.glb", title: "Harmonic balancer", description: "//todo add text", gif: "/images/rotary/harm.gif" },
    { src: "/models/rotary/distributor.glb", title: "Distributor", description: "//todo add text", gif: "/images/rotary/distri.gif" },
    { src: "/models/rotary/spark.glb", title: "Sparkplugs", description: "//todo add text", gif: "/images/rotary/spark.gif" },
    { src: "/models/rotary/tensBelt.glb", title: "Belts and tensioners", description: "//todo add text", gif: "/images/rotary/belts.gif" },
    { src: "/models/rotary/fan.glb", title: "Fan", description: "//todo add text", gif: "/images/rotary/fan.gif" },
    { src: "/models/rotary/alter.glb", title: "Alternator", description: "//todo add text", gif: "/images/rotary/alter.gif" },
    { src: "/models/rotary/exhaust.glb", title: "Exhaust manifold", description: "//todo add text", gif: "/images/rotary/exhaust.gif" },
    { src: "/models/rotary/intakeMani.glb", title: "Intake manifold", description: "//todo add text", gif: "/images/rotary/intake.gif" },
    { src: "/models/rotary/carb.glb", title: "Carburator", description: "//todo add text", gif: "/images/rotary/carb.gif" },
    { src: "/models/rotary/filter.glb", title: "Filter", description: "//todo add text", gif: "/images/rotary/filter.gif" },
    { src: "/models/rotary/oilpan.glb", title: "Oil pan", description: "//todo add text", gif: "/images/rotary/oilpan.gif" }
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