MyComponents.About = React.createClass({
render: function() {
return (
<div className="card grey lighten-1">
      <div className="row">
        <div className="col s4">
          <div className="card grey darken-1">
            <div className="card-image">
              <img src="https://avatars0.githubusercontent.com/u/3654470?v=3&s=460"/>
            </div>
          </div>
        </div>

        <div className="col s8">
          <div className="card grey lighten-1">
            <div className="card-content black-text">
              <span className="card-title">About Me</span>
              <p>Frederik Lohner</p>
              <p>Major: Computer Science</p>
              <p>Minor: Economics</p>
              <p><a href="https://github.com/FredLoh">Github</a></p>
            </div>
          </div>
        </div>

      </div>

      </div>
);
}
});
