import avatar from '../assets/avatar.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='relative' >
      {/*<div className='absolute h-full w-full z-0 bg-repeat bg-mj box-content'/>*/}
      <div className="relative w-full h-full z-1 flex backdrop-brightness-50">
        <ul className="text-white flex container p-4 font-bold">
          <li className='p-2'><Link to="experiences">Experiences</Link></li>
          <li className='p-2'><Link to="projects">Projects</Link></li>
        </ul>
      </div>
      <div className="w-20 h-20 z-10 absolute left-1/2 -ml-10 -my-10 m-auto rounded-full ring-2 bg-cover ring-gray-300 dark:ring-gray-500" style={{ backgroundImage: `url(${avatar})` }}></div>
    </div>
  )
}

export default Header
