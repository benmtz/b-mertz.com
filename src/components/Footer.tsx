type Props = {
  tile: string
}

function Footer({tile}: Props) {
  return (
    <div className={"relative"}>
      <div className='absolute w-full h-full z-0 bg-repeat bg-mj box-content' style={{ backgroundImage: `url(/tiles/tiling_${tile}.png)` }} />
      <div className='relative w-full h-full z-1 flex backdrop-brightness-50 text-white' >
        <ul>
          <li><a href="https://github.com/benmtz" target="_blank">Github</a></li>
          <li><a href="https://gitlab.com/IB3n" target="_blank">gitlab</a></li>
          <li><a href="https://www.linkedin.com/in/benjamin-mertz-5470a1108" target="_blank">linkedin</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
