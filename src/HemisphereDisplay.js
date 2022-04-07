import './hemisphere.css'
import northernPic from './images/northern-hemisphere.webp'
import southernPic from './images/southern-hemisphere.jpeg'

const hemisphereConfig = {
    northern: {
        text: 'You are in northern hemisphere',
        picture: northernPic
    },
    southern: {
        text: 'You are in southern hemisphere',
        picture: southernPic
    }
}
const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'northern' : 'southern'
    const {text, picture} = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <img src={picture} alt={hemisphere} />
            <p>{text}</p>
        </div>
    )
}

export default HemisphereDisplay