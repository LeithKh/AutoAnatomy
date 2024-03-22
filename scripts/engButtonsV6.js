var currentModelIndex = 0;
var models = [
    { src: "/models/v6/overview.glb", title: "Overview", description: "//todo add text", gif: "/images/v6/overview.gif" },
    { src: "/models/v6/block.glb", title: "Engine block", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/v6/crankshaft.glb", title: "Crankshaft", description: "//todo add text", gif: "/images/v6/crank.gif" },
    { src: "/models/v6/ConrodPiston.glb", title: "Connecting rods and pistons", description: "//todo add text", gif: "/images/v6/conrod.gif" },
    { src: "/models/v6/oilpan.glb", title: "Oil Pan", description: "//todo add text", gif: "/images/v6/oilpan.gif" },
    { src: "/models/v6/cylHead.glb", title: "Cylinder head", description: "//todo add text", gif: "/images/v6/cylHead.gif" },
    { src: "/models/v6/spark.glb", title: "Spark plugs and ignition coils", description: "//todo add text", gif: "/images/v6/spark.gif" },
    { src: "/models/v6/cams.glb", title: "Camshafts", description: "//todo add text", gif: "/images/v6/camshafts.gif" },
    { src: "/models/v6/camGears.glb", title: "Camshaft gears", description: "//todo add text", gif: "/images/v6/camGears.gif" },
    { src: "/models/v6/chainTensShoe.glb", title: "Timing chains", description: "//todo add text", gif: "/images/v6/timingChains.gif" },
    { src: "/models/v6/timingCover.glb", title: "Timing chains cover", description: "//todo add text", gif: "/images/v6/timingChainCover.gif" },
    { src: "/models/v6/harm.glb", title: "Crankshaft pulley/harmonic balancer", description: "//todo add text", gif: "/images/v6/harm.gif" },
    { src: "/models/v6/waterpumpNPulley.glb", title: "Water pump", description: "//todo add text", gif: "/images/v6/water.gif" },
    { src: "/models/v6/exhaust.glb", title: "Exhaust manifold", description: "//todo add text", gif: "/images/v6/exhaust.gif" },
    { src: "/models/v6/alter.glb", title: "Alternator", description: "//todo add text", gif: "/images/v6/alter.gif" },
    { src: "/models/v6/powersteering.glb", title: "Powerseeting pump", description: "//todo add text", gif: "/images/v6/powersteering.gif" },
    { src: "/models/v6/cylHeadCover.glb", title: "Cylinder head cover", description: "//todo add text", gif: "/images/v6/CylHeadCover.gif" },
    { src: "/models/v6/beltTens.glb", title: "Belt tensioners", description: "//todo add text", gif: "/images/v6/beltTens.gif" },
    { src: "/models/v6/intake.glb", title: "Intake/Supercharger", description: "//todo add text", gif: "/images/v6/intake.gif" },
    { src: "/models/v6/throttle.glb", title: "Throttle body", description: "//todo add text", gif: "/images/v6/throttle.gif" },
    { src: "/models/v6/injectors.glb", title: "Fuel injectors", description: "//todo add text", gif: "/images/v6/injec.gif" },
    { src: "/models/v6/oilfilter.glb", title: "Oil filter", description: "//todo add text", gif: "/images/v6/oil.gif" },
    { src: "/models/v6/engineCover.glb", title: "Engine cover", description: "//todo add text", gif: "/images/v6/engineCover.gif" },
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