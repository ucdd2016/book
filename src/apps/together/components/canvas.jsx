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

MyComponents.Canvas = Canvas