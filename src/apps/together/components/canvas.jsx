class Canvas extends React.Component {
    render(){
        var drawing = this.props.drawings;
        return(
/*
            <div id="set-canvas">
                    <div className="center-align">
                            <div className="container">
                                <div id="colorholder"></div>
                                <canvas id="drawing-canvas" width="480" height="420">
                                    {
                                        setcanvas()
                                    }
                                </canvas>
                            </div>
                    </div>
            </div>
            */
            <div id="set-canvas">
                <div className="center-align">
                    <div className="col s9">
                        <div className="container">
                            <div id="colorholder"></div>
                            <canvas id="drawing-canvas" width="480" height="420"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

$(document).ready(function () {
    //Set up some globals
    var currentColor = "000";
    // Set up our canvas
    var myCanvas = document.getElementById('drawing-canvas');
    var myContext = myCanvas.getContext ? myCanvas.getContext('2d') : null;
    if (myContext == null) {
        alert("You must use a browser that supports HTML5 Canvas to run this demo.");
        return;
    }
    var outlineImage = new Image();
    outlineImage.onload = function() {
        myContext.drawImage(outlineImage, 0, 0, 480, 420);
    };
    outlineImage.src = "images/map.png";
    //Setup each color palette & add it to the screen
    var colors = ["fff","000","f00","0f0","00f","88f","f8d","f88","f05","f80","0f8","cf0","08f","408","ff8","8ff", "aed081", "eee"];
    for (c in colors) {
        var item = $('<div/>').css("background-color", '#' + colors[c]).addClass("colorbox");
        item.click((function () {
            var col = colors[c];
            return function () {
                currentColor = col;
            };
        })());
        item.appendTo('#colorholder');
    }
    // Add callbacks that are fired any time the pixel data changes and adjusts the canvas appropriately.
    // Note that child_added events will be fired for initial pixel data as well.
    var drawPixel = function(snapshot) {
        var coords = snapshot.key().split(":");
        var object = snapshot.val();
        myContext.fillStyle = "#" + object.curColor;
        var radius = object.curSize;
        myContext.fillRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius);
    };
});

MyComponents.Canvas = Canvas