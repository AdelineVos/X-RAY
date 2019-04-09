var bar = $("#bar"); //with use of Jquery you don't need the select document by ID, CLASS or TAG..
var container = $("body");
var shell = $("#top");
// console.log(bar);
bar.on("mousedown", function() {
    //both bar, when mouse is pushes on it
    container.on("mousemove", function() {
        //and container, when  we want to do something
        //console.log(event.clientX);
        bar.css("left", event.clientX - 16 + "px"); //when the bar moves
        shell.css("width", event.clientX - 16 + "px"); // we want the container / picture also to resize along
    });
});

container.on("mouseup", function() {
    //add event listener when mouse is on the container
    container.off("mousemove"); //remove event listener when the mouse is from the container
});
