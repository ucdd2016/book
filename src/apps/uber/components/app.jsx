class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
    </div>
  }
}

MyComponents.App = App
