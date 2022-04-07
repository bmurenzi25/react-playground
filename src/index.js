import React from 'react';
import { createRoot } from 'react-dom/client'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { latitude: null, error: null }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude, error: null })
            },
            (error) => {
                this.setState({ error: error.message, latitude: null })
            }
        )
    }
    render() {
        
        return (
            <div>
                <p>Data</p>
                <p>{this.state.error ? this.state.error : ''}</p>
                <p>{this.state.latitude ? this.state.latitude : ''}</p>
            </div>
        )
    }
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


export default App