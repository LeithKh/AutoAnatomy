var currentModelIndex = 0;
var models = [
    { src: "/models/i4/overview.glb", title: "Overview", description: "//todo add text", gif: "/images/i4/overview.gif" },
    { src: "/models/i4/block.glb", title: "Engine Block", description: "//todo add text", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/i4/crankshaft.glb", title: "Crankshaft", description: "//todo add text", gif: "/images/i4/crankshaft.gif" },
    { src: "/models/i4/ConRodsPistons.glb", title: "Connecting rods and pistons", description: "//todo add text", gif: "/images/i4/rods.gif" },
    { src: "/models/i4/oilPan.glb", title: "Oil Pan", description: "//todo add text", gif: "/images/i4/pan.gif" },
    { src: "/models/i4/header.glb", title: "Header", description: "//todo add text", gif: "/images/i4/header.gif" },
    { src: "/models/i4/camshafts.glb", title: "Camshafts", description: "//todo add text", gif: "/images/i4/cam.gif" },
    { src: "/models/i4/sparkCoil.glb", title: "Sparkplugs and Coils", description: "//todo add text", gif: "/images/i4/coil.gif" },
    { src: "/models/i4/headerCover.glb", title: "Header cover", description: "//todo add text", gif: "/images/i4/headCover.gif" },
    { src: "/models/i4/camshaftGears.glb", title: "Camshaft gears", description: "//todo add text", gif: "/images/i4/camGears.gif" },
    { src: "/models/i4/timingBeltCover.glb", title: "Timing belt and timing cover", description: "//todo add text", gif: "/images/i4/timing.gif" },
    { src: "/models/i4/crankshaftPulley.glb", title: "crankshaft pulley", description: "//todo add text", gif: "/images/i4/crankPul.gif" },
    { src: "/models/i4/waterpump.glb", title: "Water Pump", description: "//todo add text", gif: "/images/i4/water.gif" },
    { src: "/models/i4/powersteering.glb", title: "Powersteering pump", description: "//todo add text", gif: "/images/i4/powersteer.gif" },
    { src: "/models/i4/alternator.glb", title: "Alternator", description: "//todo add text", gif: "/images/i4/altenator.gif" },
    { src: "/models/i4/tensionerNBelts.glb", title: "Tensioner and belts", description: "//todo add text", gif: "/images/i4/belts.gif" },
    { src: "/models/i4/injectors.glb", title: "Fuel injectors", description: "//todo add text", gif: "/images/i4/injec.gif" },
    { src: "/models/i4/intakeChamber.glb", title: "Intake chamber", description: "//todo add text", gif: "/images/i4/intake.gif" },
    { src: "/models/i4/throttlebody.glb", title: "Throttlebody", description: "//todo add text", gif: "/images/i4/throttle.gif" },
    { src: "/models/i4/headerExhaustNShield.glb", title: "Exhaust manifold", description: "//todo add text", gif: "/images/i4/exhaust.gif" },
    { src: "/models/i4/turbo.glb", title: "Turbo", description: "//todo add text", gif: "/images/i4/turbo.gif" },
    { src: "/models/i4/starter.glb", title: "Starter", description: "//todo add text", gif: "/images/i4/starter.gif" },
    { src: "/models/i4/oilFilter.glb", title: "Oil Filter", description: "//todo add text", gif: "/images/i4/oilFil.gif" },
    { src: "/models/i4/fuelFilter.glb", title: "Fuel Filter", description: "//todo add text", gif: "/images/i4/fuelFil.gif" }
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

function toggleFullscreen() {
    const modelViewer = document.getElementById('modelViewer');
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