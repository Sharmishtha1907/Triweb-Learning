function FirstComponent(props){
    return <div className="modal">
        <h1>{props.owner} react application</h1>
        <p> Its my first react application {props.reason}</p>
        <button>Close</button>
      </div>
}

export default FirstComponent;