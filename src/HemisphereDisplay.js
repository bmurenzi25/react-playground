import northern from './images/northern-hemisphere.webp'
import southern from './images/southern-hemisphere.jpeg'

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere'
    const image = latitude > 0 ? northern : southern
    return (
        <>
            <img src={image} alt={hemisphere} />
            <p>You are in {hemisphere}</p>
        </>
    )
}

export default HemisphereDisplay