MyComponents.About = React.createClass({

  render: function() {
    return (
          <div className="card large">
            <div className="card-image">
              <img height="400" src={this.props.about.photo} />
              <span className="card-title">Tommy Liu</span>
            </div>
            <div className="card-content">
              <div>Major: {this.props.about.major}</div>
              <div>School: University of Colorado Boulder</div>
            </div>
            <div className="card-action">
              <div className="chip"><img src="git.png" /><a href={this.props.about.github}>github</a></div>             
            </div>
          </div>
    );
  }

});
