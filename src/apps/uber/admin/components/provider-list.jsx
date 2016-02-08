class ProviderList extends React.Component {
  render(){
    return <div>
      <div>ToDo: List of Providers
        <pre>{JSON.stringify(this.props.providers)}</pre>
      </div>
    </div>
  }
}

MyComponents.ProviderList = ProviderList
