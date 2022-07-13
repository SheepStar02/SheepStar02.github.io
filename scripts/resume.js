function App () {
    return (
        <div className="main-container">
            <div className="resume-container">
                <Resume />
            </div>
        </div>
    )
}

class Resume extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="resume"></div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)