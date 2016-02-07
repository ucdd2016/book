class UserList extends React.Component {
  render(){
    return <div>
      <div>ToDo: List of Users
        <pre>{JSON.stringify(this.props.users)}</pre>
      </div>      
    </div>
  }
}

MyComponents.UserList = UserList
