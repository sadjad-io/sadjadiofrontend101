function run() {
    var cube = document.getElementById("cube");
    // var style = window.getComputedStyle(cube);
    cube.style.marginRight = parseInt(cube.style.marginRight.replace('px','')) + parseInt(10) + "px";
    console.log(parseInt(cube.style.marginRight.replace('px','')) + 1 + "px");
}