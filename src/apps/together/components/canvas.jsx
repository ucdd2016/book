class Canvas extends React.Component {

    refresh(){
    var pixelDataRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+this.props.groupName+'/drawing');
    var mapRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+this.props.groupName+'/Map');
    var myCanvas = document.getElementById('drawing-canvas');
    var myContext = myCanvas.getContext ? myCanvas.getContext('2d') : null;
    var transImage = new Image();
    var outlineImage = new Image();
    outlineImage.onload = function() {
        myContext.drawImage(outlineImage, 0, 0, 480, 420);
    };
    mapRef.on('value',function(snapshot) {
        var mapurl = snapshot.val();
        outlineImage.src = mapurl;
    });
    transImage.onload = function() {
        myContext.drawImage(transImage, 0, 0, 480, 420);
    };
    transImage.src = "images/watermelon-duck-outline.png";
    pixelDataRef.remove();
    }

    resetMap(){
        var gmap = {
            address:    "",
            mapurl:     "http://maps.google.com/maps/api/staticmap?markers=",
            mapsensor:  "true",
            mapsize:    "480x420",
            urlpostfix: "",

            init: function(address){

                if(! (address)) {
                    console.log("init: all 3 parameters should be set");
                    return;
                }
                // Set variables
                this.address = encodeURIComponent(address);
                this.urlpostfix = "&size="+this.mapsize+"&sensor="+this.mapsensor;

                var inputurl = this.generateURL();
                return inputurl;
            },

            generateURL: function(){
                var res = this.mapurl+this.address+this.urlpostfix;
                return res;
            }
        };
        var address = document.getElementById('Address').value;
        var mapRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+this.props.groupName+'/Map');
        var res = gmap.init(address);
        mapRef.set(res);
        this.refresh();
    }

    render(){
        return(

            <div id="set-canvas">
                <div className="row">
                <div className="center-align">
                    <div className="container">
                            <div id="colorholder"></div>
                            <canvas id="drawing-canvas" width="480" height="420"></canvas>
                    <div className="col s6 push-s3">
                    <fieldset>
                        <textarea id="Address" placeholder ="Please enter your destination!" rows="1"></textarea>
                        <a className="waves-effect waves-light btn lime accent-2" onClick={this.resetMap.bind(this)}>Go</a>
                    </fieldset>
                    </div>
                    <div className="col s8 push-s1">
                        <br></br>
                        <a className="waves-effect waves-light btn green accent-4 col s3 push-s1" id="new" onClick={this.refresh.bind(this)}>Refresh</a>

                        <a className="waves-effect waves-light btn light-blue lighten-2 col s3 push-s2" id="small">Small</a>

                        <a className="waves-effect waves-light btn purple lighten-3 col s3 push-s3" id="medium">Medium</a>

                        <a className="waves-effect waves-light btn orange darken-1 col s3 push-s4" id="large">Large</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        $(document).ready(function () {
            //Set up default values
            var pixSize=2, lastPoint = null, currentColor = "000", mouseDown = 0;
            small.onclick = function() {
                pixSize = 2;
            };
            medium.onclick = function() {
                pixSize = 4;
            };
            large.onclick = function() {
                pixSize = 8;
            };
            // Set up our canvas
            var myCanvas = document.getElementById('drawing-canvas');
            var myContext = myCanvas.getContext ? myCanvas.getContext('2d') : null;
            if (myContext == null) {
                alert("You must use a browser that supports HTML5 Canvas to run this demo.");
                return;
            }

            var outlineImage = new Image();
            outlineImage.onload = function() {
                //myContext.save();
                //myContext.globalAlpha = 0.7;
                myContext.globalCompositeOperation='destination-over';
                myContext.drawImage(outlineImage, 0, 0, 480, 420);
                //myContext.restore();
            };
            outlineImage.src = this.props.mapURL;

            //Create a reference to the pixel data for our drawing.
            var pixelDataRef = new Firebase('https://wetravel.firebaseio.com/Groups/'+this.props.groupName+'/drawing');
            var drawings = this.props.drawings;
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
            //Keep track of if the mouse is up or down
            myCanvas.onmousedown = function () {mouseDown = 1;};
            myCanvas.onmouseout = myCanvas.onmouseup = function () {
                mouseDown = 0; lastPoint = null;
            };
            var drawLineOnMouseMove = function(e) {
                if (!mouseDown) return;
                e.preventDefault();
                var offset = $('canvas').offset();
                var x1 = Math.floor((e.pageX - offset.left) / pixSize - 1),
                    y1 = Math.floor((e.pageY - offset.top) / pixSize - 1);
                var x0 = (lastPoint == null) ? x1 : lastPoint[0];
                var y0 = (lastPoint == null) ? y1 : lastPoint[1];
                var dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
                var sx = (x0 < x1) ? 1 : -1, sy = (y0 < y1) ? 1 : -1, err = dx - dy;
                while (true) {
                    if(currentColor=="fff"){
                        //pixelDataRef.child(x0 + ":" + y0).set(null);
                        this.props.actions.draw(null,null,x0,y0);
                    }else{
                        this.props.actions.draw(currentColor,pixSize,x0,y0);
                    }
                    if (x0 == x1 && y0 == y1) break;
                    var e2 = 2 * err;
                    if (e2 > -dy) {
                        err = err - dy;
                        x0 = x0 + sx;
                    }
                    if (e2 < dx) {
                        err = err + dx;
                        y0 = y0 + sy;
                    }
                }
                lastPoint = [x1, y1];
            }.bind(this);

            $(myCanvas).mousemove(drawLineOnMouseMove);
            $(myCanvas).mousedown(drawLineOnMouseMove);

            var drawPixel = function(snapshot) {
                var coords = snapshot.key().split(":");
                var object = snapshot.val();
                myContext.fillStyle = "#" + object.curColor;
                var radius = object.curSize;
                console.log('>>>>',radius,'>>>>',object.curColor);
                //myContext.save();
                //myContext.globalAlpha = 1.0;
                myContext.globalCompositeOperation='source-over';
                myContext.fillRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius);
                //myContext.restore();
            };
            var clearPixel = function(snapshot) {
                var coords = snapshot.key().split(":");
                var object = snapshot.val();
                var radius = object.curSize;
                myContext.clearRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius);
            };
            pixelDataRef.on('child_added', drawPixel);
            pixelDataRef.on('child_changed', drawPixel);
            pixelDataRef.on('child_removed', clearPixel);
            //this.props.actions.loadHistory(myContext);

            Object.keys(drawings).map(function(lineKey) {
                var line = drawings[lineKey];
                var coords = lineKey.split(":");
                var object = line;
                myContext.fillStyle = "#" + object.curColor;
                var radius = object.curSize;
                myContext.fillRect(parseInt(coords[0]) * radius, parseInt(coords[1]) * radius, radius, radius)
            });
        }.bind(this));
    }
}

MyComponents.Canvas = Canvas;