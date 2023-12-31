import {GitHub, Gitlab, Linkedin} from "react-feather";

function Footer() {
  return (
    <div className='relative w-full h-full z-1 backdrop-brightness-50 text-white pt-6' >
      <ul className={'grid grid-cols-1 md:grid-cols-4 gap-x-8 px-8'}>
        <li><a className={'flex inline-flex mb-6'} href="https://github.com/benmtz" target="_blank"><GitHub className={'mr-2'}/>Github</a></li>
        <li><a className={'flex inline-flex mb-6'} href="https://gitlab.com/IB3n" target="_blank"><Gitlab  className={'mr-2'}/>Gitlab</a></li>
        <li><a className={'flex inline-flex'} href="https://www.linkedin.com/in/benjamin-mertz-5470a1108" target="_blank"><Linkedin  className={'mr-2'}/>Linkedin</a></li>
      </ul>
    </div>
  )
}

export default Footer
