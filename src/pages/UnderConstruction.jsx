import logo from '../assets/logo/Logo-01.png'

function UnderConstruction() {
  return (
    <div className='w-screen h-screen grid'>
      <div className='flex items-center justify-center flex-col '>
        <img src={logo} className='w-[300px] pb-16' />
        <ul className='text-xl flex flex-col gap-4 text-center'>
          <li>- Strona w trakcie tworzenia</li>
          <li>- Website under construction</li>
          <li>- Сторінка в розробці</li>
          <li>- Страница в разработке</li>
          <li className='pt-16'>office@holdhand.eu</li>
        </ul>
      </div>
    </div>
  )
}

export default UnderConstruction
