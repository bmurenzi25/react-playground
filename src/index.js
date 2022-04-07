import React from 'react';
import { createRoot } from 'react-dom/client'
import HemisphereDisplay from './HemisphereDisplay';
class App extends React.Component {

    state = { latitude: null, error: null }

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
        const { latitude, error } = this.state
        return (
            <div>
                <p>{!error && !latitude ? 'Loading....' : ''}</p>
                {latitude ? <HemisphereDisplay latitude={latitude} /> : null}
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