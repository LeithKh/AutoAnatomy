var currentModelIndex = 0;
var models = [
    { src: "/models/i4/overview.glb", title: "Overview", description: "An inline 4 engine is a type of four-cylinder engine where the cylinders are arranged in a line along a common crankshaft. This layout is very common in cars and motorcycles, as it offers good primary balance and low complexity. Inline 4 engines can produce high power and efficiency, especially when turbocharged or supercharged. Some of the most popular inline 4 engines are the Mitsubishi 4G63T, the Honda F20C, the Volvo Redblock and the Ford EcoBoost 2.3L.", gif: "/images/i4/overview.gif" },
    { src: "/models/i4/block.glb", title: "Engine Block", description: "The displacement of an inline 4 engine can vary from less than 1 liter to more than 4 liters, depending on the application and fuel type. An inline 4 engine can have different valve configurations, such as single overhead camshaft (SOHC), dual overhead camshaft (DOHC) or four valves per cylinder, in this example we are looking at a DOHC (Dual-OverHead Camshaft) engine with 4 valves, the engine is mounted transversaly, with a single turbocharger.", gif: "/images/noAssemblyAnim.jpg" },
    { src: "/models/i4/crankshaft.glb", title: "Crankshaft", description: "An inline 4 engine crankshaft is a part of an internal combustion engine that converts the linear motion of the pistons into rotational motion. The crankshaft has four cylinders arranged in a straight line along a common axis, and each cylinder has a connecting rod that attaches to a crank pin on the crankshaft. The crank pins are offset from the main bearing journals, which are supported by the engine block. The distance between the center of the main journal and the center of the crank pin is called the crank radius or the crank throw, and it determines the stroke of the piston. The front and rear ends of the crankshaft have gears or pulleys that drive other components of the engine, such as the valve train, the alternator and the water pump.", gif: "/images/i4/crankshaft.gif" },
    { src: "/models/i4/ConRodsPistons.glb", title: "Connecting rods and pistons", description: "The cylinders are usually upright or slightly tilted, and they share a common crankshaft. The pistons move up and down inside the cylinders, and they are connected to the crankshaft by connecting rods. The connecting rods are metal rods that have two ends: the small end and the big end. The small end attaches to the piston by a pin, and the big end attaches to the crankshaft by a bearing. The piston rings are thin metal rings that fit around the piston and seal the gap between the piston and the cylinder wall. The piston rings prevent the combustion gases from leaking into the crankcase and reduce friction and wear.", gif: "/images/i4/rods.gif" },
    { src: "/models/i4/oilPan.glb", title: "Oil Pan", description: "An inline 4 engine oil pan is a component that holds the engine oil and protects it from dirt and debris. The oil pan is usually located at the bottom of the engine block and has a drain plug for changing the oil. The oil pan also helps to cool the engine by transferring heat from the oil to the air. Some inline 4 engines have different types of oil pans depending on the application, such as rear sump, front sump or engine saver. The oil pan should be compatible with the engine block, the crankshaft and the flywheel or flexplate. The oil pan should also be made of durable material, such as steel or aluminum, and have a proper seal to prevent leaks.", gif: "/images/i4/pan.gif" },
    { src: "/models/i4/header.glb", title: "Cylinder head", description: "An inline 4 engine is a type of four-cylinder engine where the cylinders are arranged in a line along a common crankshaft. This design has only one cylinder head, which reduces complexity and production cost. It also has perfect primary balance, meaning that the pistons move in pairs and cancel out each other's vibrations. However, it also has a secondary imbalance, caused by the different speeds of the pistons in the top and bottom halves of the crankshaft rotation. An inline 4 engine uses a cylinder head that consists of several ports, which allow the intake and exhaust gases to flow in and out of the combustion chamber. The cylinder head also houses the valves, which are actuated by pushrods and rocker arms or by overhead camshafts. The cylinder head is an important component for the performance and efficiency of an inline 4 engine.", gif: "/images/i4/header.gif" },
    { src: "/models/i4/camshafts.glb", title: "Camshafts", description: "An inline 4 engine is a type of engine that has four cylinders arranged in a straight line along the crankshaft. A dual overhead camshaft (DOHC) engine is a type of engine that has two camshafts per cylinder head, one for the intake valves and one for the exhaust valves. Four valves are for each cylinder, usually two for the intake and two for the exhaust, to improve airflow and performance. Therefore, an inline 4 engine with dual overhead camshafts has eight valves and two camshafts in total.", gif: "/images/i4/cam.gif" },
    { src: "/models/i4/sparkCoil.glb", title: "Sparkplugs and Coils", description: "An inline 4 engine is a type of engine that has four cylinders arranged in a straight line. The spark plugs are the devices that create a spark to ignite the air-fuel mixture in the cylinders. The overhead coils are the parts that provide high voltage to the spark plugs. They are also called coil-on-plug or COP ignition coils, because they are installed directly over the spark plugs. This setup reduces the need for spark plug wires and improves the ignition efficiency. ", gif: "/images/i4/coil.gif" },
    { src: "/models/i4/headerCover.glb", title: "Cylinder head cover", description: "An inline 4 engine cylinder head cover is a component that protects the top part of the engine, where the valves, camshafts and spark plugs are located. The cover is usually made of metal or plastic and has a gasket to seal it against oil leaks. The cover also helps to reduce engine noise and improve the appearance of the engine bay.", gif: "/images/i4/headCover.gif" },
    { src: "/models/i4/camshaftGears.glb", title: "Camshaft gears", description: "An inline 4 engine is a type of four-cylinder piston engine where the cylinders are arranged in a line along a common crankshaft. A DOHC camshaft is a type of overhead camshaft engine that has two camshafts per cylinder head, one for the intake valves and one for the exhaust valves. Camshaft gears are the components that connect the camshafts to the timing belt or chain, and synchronize the rotation of the camshafts with the crankshaft. An inline 4 engine with a DOHC camshaft and gears can have better airflow, higher horsepower and efficiency than an engine with a single overhead camshaft (SOHC). However, it also has more complexity, cost and maintenance requirements. Some examples of cars that use an inline 4 engine with a DOHC camshaft and gears are the Honda Civic, the Ford Focus and the Nissan Qashqai.", gif: "/images/i4/camGears.gif" },
    { src: "/models/i4/timingBeltCover.glb", title: "Timing belt and timing cover", description: "An inline 4 engine is a type of engine that has four cylinders arranged in a straight line. A timing belt is a rubber belt that synchronizes the rotation of the crankshaft and the camshaft, which control the opening and closing of the valves. A timing cover is a metal or plastic cover that protects the timing belt from dirt, debris, and oil." , gif: "/images/i4/timing.gif" },
    { src: "/models/i4/crankshaftPulley.glb", title: "crankshaft pulley", description: "An inline 4 engine crankshaft pulley is a circular metal component that is attached to the end of the crankshaft. The crankshaft pulley rotates as the engine runs and drives the serpentine belt, which powers various accessories such as the alternator, power steering pump, water pump and air conditioning compressor. The crankshaft pulley also has a harmonic balancer, which is a rubber ring that absorbs the engine vibrations and prevents damage to the crankshaft and other parts. The crankshaft pulley may have teeth or notches that are used by the crankshaft position sensor to monitor the engine speed and timing.", gif: "/images/i4/crankPul.gif" },
    { src: "/models/i4/waterpump.glb", title: "Water Pump", description: "An inline 4 engine water pump is a device that circulates coolant through the engine block, cylinder head and radiator to prevent overheating. It is usually driven by a belt or chain from the crankshaft or camshaft. An inline 4 engine water pump typically has one inlet and one outlet, and may have multiple impeller stages to increase the pressure and flow of the coolant. ", gif: "/images/i4/water.gif" },
    { src: "/models/i4/powersteering.glb", title: "Powersteering pump", description: "An inline 4 engine powersteering pump is a device that helps the driver steer the vehicle by reducing the effort needed to turn the steering wheel. It is usually mounted on the engine block and driven by a belt or a chain from the crankshaft. The pump generates hydraulic pressure that is sent to the steering rack or box, where it assists the movement of the steering linkage. There are different types of powersteering pumps, such as Saginaw, Ford, and GM, that vary in design and performance. Some powersteering pumps also include a reservoir that holds the fluid and prevents air from entering the system.", gif: "/images/i4/powersteer.gif" },
    { src: "/models/i4/alternator.glb", title: "Alternator", description: "An inline 4 engine alternator is a device that converts mechanical energy from the engine into electrical energy for the vehicle's electrical system. The alternator is usually mounted on the side of the engine and driven by a belt that connects to the crankshaft and the water pump. The alternator consists of a rotating magnet called a rotor and a stationary coil of wire called a stator. When the rotor spins, it creates a magnetic field that induces an alternating current in the stator. The alternating current is then converted to direct current by a rectifier and regulated by a voltage regulator. The alternator provides power to the battery, ignition system, lights, and other accessories.", gif: "/images/i4/altenator.gif" },
    { src: "/models/i4/tensionerNBelts.glb", title: "Tensioner and belts", description: "An inline 4 engine is a type of engine that has four cylinders arranged in a straight line. A belt tensioner is a device that applies pressure to the drive belt or belts that connect the engine to various components, such as the alternator, power steering pump, water pump, and air conditioner compressor. The belts transfer the rotational force of the engine to these components and allow them to function properly. The belt tensioner ensures that the belts have the right amount of tension and do not slip or break.", gif: "/images/i4/belts.gif" },
    { src: "/models/i4/injectors.glb", title: "Fuel injectors", description: "An inline 4 engine fuel injector is a device that sprays a precise amount of gasoline into the cylinder head of a four-cylinder engine. The injector uses direct injection technology to achieve high thermal efficiency and low emissions. The injector is controlled by a variable system that adjusts the fuel delivery according to the engine speed and load. The injector also atomizes the fuel into fine droplets that mix well with the air and burn faster in the combustion chamber. An inline 4 engine fuel injector is an essential component of modern four-cylinder engines that offer high performance and reliability.", gif: "/images/i4/injec.gif" },
    { src: "/models/i4/intakeChamber.glb", title: "Intake manifold", description: "An inline 4 engine intake manifold is a part of the engine that distributes the air-fuel mixture to the cylinders. It is usually made of aluminum or cast iron and has four ports that connect to the cylinder head. The intake manifold also has a flange that mounts the carburetor or fuel injection system. ", gif: "/images/i4/intake.gif" },
    { src: "/models/i4/throttlebody.glb", title: "Throttlebody", description: "An inline 4 engine is a type of four-cylinder piston engine where the cylinders are arranged in a line along a common crankshaft. A throttlebody is a component of the intake system that regulates the amount of air that flows into the engine. The throttlebody is usually connected to the accelerator pedal by a cable or an electronic sensor. The throttlebody can affect the performance, fuel economy and emissions of the engine.  ", gif: "/images/i4/throttle.gif" },
    { src: "/models/i4/headerExhaustNShield.glb", title: "Exhaust manifold", description: "An inline 4 engine exhaust manifold is a component that collects the exhaust gases from four cylinders that are arranged in a straight line. The exhaust manifold usually has four pipes that merge into two or one pipe, depending on the design. The purpose of the exhaust manifold is to improve the engine performance by scavenging the exhaust gas effectively and reducing the back pressure. The exhaust manifold also connects to the catalytic converter, which reduces the harmful emissions from the engine .", gif: "/images/i4/exhaust.gif" },
    { src: "/models/i4/turbo.glb", title: "Turbo", description: "An inline 4 engine turbocharger is a device that increases the power output of an engine by forcing more air into the combustion chambers. A turbocharger consists of a turbine and a compressor, which are connected by a shaft. The turbine is driven by the exhaust gases from the engine, and the compressor draws in fresh air and compresses it before sending it to the intake manifold. A turbocharged inline 4 engine can produce more power than a naturally aspirated inline 4 engine of the same displacement, because it can burn more fuel and air in each cycle. A turbocharged inline 4 engine can also be more fuel efficient than a larger naturally aspirated engine, because it can operate at lower engine speeds and use less fuel for the same power output. Turbochargers are not without drawbacks, however. One of the main disadvantages of a turbocharged inline 4 engine is turbo lag, which is the delay between pressing the accelerator pedal and feeling the boost from the turbo. Turbo lag can reduce the responsiveness and drivability of the engine, especially at low engine speeds. Another drawback of a turbocharged inline 4 engine is increased complexity and cost, as it requires additional components such as an intercooler, a wastegate, a blow-off valve, and sensors. Turbochargers also generate more heat and pressure than naturally aspirated engines, which can cause more wear and tear on the engine components and require more frequent maintenance.", gif: "/images/i4/turbo.gif" },
    { src: "/models/i4/starter.glb", title: "Starter", description: "An inline 4 engine starter is a device that helps to start the engine of a vehicle with four cylinders arranged in a straight line. The starter consists of an electric motor, a pinion gear, a solenoid, and a relay. The starter works by engaging the pinion gear with the flywheel of the engine, which rotates the crankshaft and allows the pistons to move. The starter is activated by turning the ignition key or pressing a button, which sends a signal to the relay. The relay then closes the circuit and supplies power to the solenoid, which pushes the pinion gear into position. The electric motor then spins the pinion gear and turns the flywheel, creating enough compression and spark to ignite the fuel-air mixture in the cylinders.", gif: "/images/i4/starter.gif" },
    { src: "/models/i4/oilFilter.glb", title: "Oil Filter", description: "An engine oil filter is a device that removes contaminants from the engine oil, such as dirt, soot, and water. These contaminants can cause wear and damage to the engine's components, such as the bearings and the oil pump. The engine oil filter is usually located near the oil sump or oil tank, where the oil is stored and pumped to the engine. The engine oil filter can be either a full-flow or a bypass type. A full-flow filter sends all the oil through the filter before it reaches the engine, while a bypass filter sends only a fraction of the oil through the filter and returns it to the sump or tank. The filter material is made of synthetic fiber or other materials that can trap and hold the particles. The filter has a metal can with a sealing gasket and a base plate with holes for the oil to enter and exit. The filter also has a central hole that is threaded to fit the oil filter assembly on the engine block.", gif: "/images/i4/oilFil.gif" },
    { src: "/models/i4/fuelFilter.glb", title: "Fuel Filter", description: "A fuel filter is a component of the fuel system that filters out potentially harmful dirt or debris that could enter the fuel system and cause starting or running issues. The fuel filter allows fuel to flow from the tank to the engine at the rate it needs to, and prevents any contamination from clogging up the fuel injection system or the carburetor. The fuel filter is usually made of a special paper that traps the impurities, and it can be either a disposable unit or a cartridge that can be replaced. Some newer cars do not have a separate fuel filter, but rely on a strainer attached to the fuel pump in the tank. Diesel engines may also have a drain tap at the bottom of the fuel filter to remove any water that may accumulate in the filter.", gif: "/images/i4/fuelFil.gif" }
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
    toggleHotspots() //removes hotspot if switching from overview to specific part
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