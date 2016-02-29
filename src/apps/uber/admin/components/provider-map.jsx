class ProviderMap extends React.Component {
  render(){
    return <div>
      <div>ToDo Show All Providers on a Map
        <pre>{JSON.stringify(this.props.users)}</pre>
      </div>
    </div>
  }
}

MyComponents.ProviderMap = ProviderMap
