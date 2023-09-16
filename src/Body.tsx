import avatar from './assets/avatar.png';
import './Body.css'
import Events from './Events';

function Body() {
  return (
    <div>
        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
        <div className="body-content">
            <Events />
        </div>
    </div>
  )
}

export default Body
