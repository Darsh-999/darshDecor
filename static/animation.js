
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var base_cabinet1 = "";
var base_cabinet2 = "";
var base_cabinet3 = "";
var base_cabinet4 = "";

var Backsplash_01 = "";
var floor = "";
var wall = "";

var sink0 = "";
var sink1 = "";
var sink2 = "";

var wallCabinet = "";

var cabinethandle = "";

const scene = new BABYLON.Scene(engine);

// /**** Set camera and light *****/
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.5, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 1, 0));
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 3;
camera.upperRadiusLimit = 3;
camera.upperBetaLimit = Math.PI / 2;

// const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0),scene);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.5, 0.6, 0.2), scene);

// const light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.1, 1, 0),scene);

const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);

var page_url = window.location.href
var model_name = page_url.split("/")[6];
// console.log(model_name)
// function set_model_name(_name){
//     model_name = _name.split("/")[1];
//     console.log("The function has been called!");
// }

const result = BABYLON.SceneLoader.ImportMeshAsync("", "/upload/models/", model_name, scene).then((result) => {


    // It gives value of all the present components in a model
    for (let i = 0; i < result.meshes.length; i++){
        console.log(result.meshes[i].id)
    }

    // wall = scene.getMeshByName("Walls_primitive0");

    wall0 = scene.getMeshByName("Walls_primitive0");
    wall1 = scene.getMeshByName("Walls_primitive1");

    // floor = scene.getMeshByName("Floor_Wood_01");

    floor0 = scene.getMeshByName('Floor 12"*24"');
    floor1 = scene.getMeshByName('Floor 24"*24"');

    wallCabinet = scene.getMeshByName("Wall Cabinet_01");

    countertop1 = scene.getMeshByName("Countertop_01");
    countertop2 = scene.getMeshByName("Countertop_02");

    base_cabinet0 = scene.getMeshByName("BasCabinet_primitive0");
    base_cabinet1 = scene.getMeshByName("BasCabinet_primitive1");
    // base_cabinet3 = scene.getMeshByName("Base cabinet_03");
    // base_cabinet4 = scene.getMeshByName("Base cabinet_04");

    // Backsplash_01 = scene.getMeshByName("Backsplash_01");

    Backsplash = scene.getMeshByName("BackSplash");

    // sink0 = scene.getMeshByName("Sink_01_primitive0");
    // sink1 = scene.getMeshByName("Sink_01_primitive1");
    // sink2 = scene.getMeshByName("Sink_01_primitive2");

    sink0 = scene.getMeshByName("Faucet");
    sink1 = scene.getMeshByName("WashBasin_primitive0");
    sink2 = scene.getMeshByName("WashBasin_primitive1");

    cabinethandle = scene.getMeshByName("Handles");

});
// Add your code here matching the playground format
const createScene = async function () {


    // const tvMat = new BABYLON.StandardMaterial("tvMat");
    // tvMat.diffuseTexture = new BABYLON.Texture(val)
    // tv.material = tvMat;


    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });


    return scene;

};

createScene();


function changeWall(_src) {
    const color = _src.target.attributes.mycolor.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const wallMat0 = new BABYLON.StandardMaterial("Walls_primitive0");
    const wallMat1 = new BABYLON.StandardMaterial("Walls_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    wallMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    wallMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    wall0.material = wallMat0;
    wall1.material = wallMat1;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Change Floor Pattern
function changeFloor(_src) {
    console.log(_src)
    
    const floorMat = new BABYLON.StandardMaterial('Floor 12"*24"');

    floorMat.diffuseTexture = new BABYLON.Texture(_src)

    floor0.material = floorMat;
    floor1.material = floorMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Backsplash
function changeBackSplash(_src) {
    console.log(_src)

    const backSplash = new BABYLON.StandardMaterial("BackSplash");
    backSplash.diffuseTexture = new BABYLON.Texture(_src)

    Backsplash.material = backSplash;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//CounterTop
function changeCountertop(_src) {
    console.log(_src)
    const counterTopMat = new BABYLON.StandardMaterial("Countertop_01");
    counterTopMat.diffuseTexture = new BABYLON.Texture(_src)

    countertop1.material = counterTopMat;
    countertop2.material = counterTopMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//base_cabinet2
function changebaseCabinet2(_src) {
    // console.log(_src)
    // const counterTopMat = new BABYLON.StandardMaterial("Countertop_01");
    // counterTopMat.diffuseTexture = new BABYLON.Texture(_src)

    // base_cabinet1.material = counterTopMat;
    // base_cabinet2.material = counterTopMat;
    // base_cabinet3.material = counterTopMat;
    // base_cabinet4.material = counterTopMat;

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const counterTopMat0 = new BABYLON.StandardMaterial("BasCabinet_primitive0");
    const counterTopMat1 = new BABYLON.StandardMaterial("BasCabinet_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    counterTopMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    counterTopMat1.diffuseColor = new BABYLON.Color3(r, g, b);

    base_cabinet0.material = counterTopMat0;
    base_cabinet1.material = counterTopMat1;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of changebaseCabinet2

//cabinethandle
function changecabinethandle(_src) {
    // console.log(_src)
    // const counterTopMat = new BABYLON.StandardMaterial("Countertop_01");
    // counterTopMat.diffuseTexture = new BABYLON.Texture(_src)

    // base_cabinet1.material = counterTopMat;
    // base_cabinet2.material = counterTopMat;
    // base_cabinet3.material = counterTopMat;
    // base_cabinet4.material = counterTopMat;

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const cabinethandleMat = new BABYLON.StandardMaterial("Handles");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    cabinethandleMat.diffuseColor = new BABYLON.Color3(r, g, b);

    cabinethandle.material = cabinethandleMat;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}// end of cabinethandle

//Wall Cabinet
function changeWallCabinet(_src) {
    console.log(_src)
    const wallcabinet = new BABYLON.StandardMaterial("Wall Cabinet_01");
    wallcabinet.diffuseTexture = new BABYLON.Texture(_src)

    wallCabinet.material = wallcabinet;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}

//Sink
function changeSink(_src) {
    // console.log(_src)
    // const sink = new BABYLON.StandardMaterial("Wall Cabinet_01");
    // sink.diffuseTexture = new BABYLON.Texture(_src)

    // sink0.material = sink;
    // sink1.material = sink;
    // sink2.material = sink;

    const color = _src.target.attributes.mycolor.value
    console.log(_src)

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const sinkMat0 = new BABYLON.StandardMaterial("Faucet");
    const sinkMat1 = new BABYLON.StandardMaterial("WashBasin_primitive0");
    const sinkMat2 = new BABYLON.StandardMaterial("WashBasin_primitive1");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    sinkMat0.diffuseColor = new BABYLON.Color3(r, g, b);
    sinkMat1.diffuseColor = new BABYLON.Color3(r, g, b);
    sinkMat2.diffuseColor = new BABYLON.Color3(r, g, b);

    sink0.material = sinkMat0;
    sink1.material = sinkMat1;
    sink2.material = sinkMat2;

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

}


function printColor(ev) {
    const color = ev.target.value

    var r = parseInt(color.substr(1, 2), 16)
    var g = parseInt(color.substr(3, 2), 16)
    var b = parseInt(color.substr(5, 2), 16)

    r = r / 100;
    g = g / 100;
    b = b / 100;

    const groundMat = new BABYLON.StandardMaterial("BasCabinet_primitive0");

    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    groundMat.diffuseColor = new BABYLON.Color3(r, g, b);
    // groundMat.diffuseColor = new BABYLON.Color3.Red();

    wall.material = groundMat

    engine.runRenderLoop(function () {
        scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    return scene;

} // end of printColor