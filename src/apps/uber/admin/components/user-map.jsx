class UserMap extends React.Component {
  render(){
    return <div>
      <div>ToDo: Show All Users on a Map
        <pre>{JSON.stringify(this.props.providers)}</pre>
      </div>
    </div>
  }
}

MyComponents.UserMap = UserMap
