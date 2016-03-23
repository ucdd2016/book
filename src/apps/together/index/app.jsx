class App extends React.Component {
    render(){
        return <div>
                <MyComponents.NavBar
                    user={this.props.data.user}
                    loginAction={this.props.actions.login}
                    logoutAction={this.props.actions.logout} />
                <MyComponents.Groups groups={this.props.data.group} />
            </div>
    }
}

MyComponents.App = App