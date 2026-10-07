$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 200, 50);
    createPlatform(250, 0, 50, 450, "red"); 
    createPlatform(50, 400, 200, 50);
    createPlatform( 300, 610, 50, 60);
    createPlatform( 500, 530, 50, 60);
    createPlatform( 700, 410, 50, 60);
    createPlatform( 900, 300, 50, 60);
    createPlatform( 1100, 200, 100, 60);
    createPlatform( 1200, 200, 50, 1000);



    // TODO 3 - Create Collectables
    createCollectable("database", 200, 170, 0.5, 0.7);
    createCollectable("database", 300, 170, 0.5, 0.7);
    createCollectable("database", 500, 170, 0.5, 0.7);
    createCollectable("database", 700, 170, 0.5, 0.7);
    createCollectable("database", 900, 170, 0.5, 0.7);
    createCollectable("database", 1100, 170, 0.5, 0.7);
    createCollectable("database", 1300, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    
    createCannon("right", 50, 1045);
    createCannon("right", 100, 3360);
    createCannon("right", 150, 2610);
    createCannon("right", 200, 5000);
    createCannon("right", 250, 3793);
    createCannon("right", 300, 3060);
    createCannon("right", 350, 4602);
    createCannon("right", 400, 26200);
    createCannon("right", 450, 5500);
    createCannon("right", 500, 7500);
    createCannon("right", 550, 2020);
    createCannon("right", 600, 4040);
    createCannon("right", 650, 7000);
    createCannon("top", 650, 5000);
    createCannon("top", 400, 5000);
    createCannon("top", 860, 5000);
    createCannon("top", 1100, 5000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
