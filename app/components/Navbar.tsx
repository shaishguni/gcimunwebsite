

const Navbar = () => {
  return (
    <div className='flex space-x-6  items-center justify-between p-4 m-2'>
      <div>GCI MUN</div>
      <div>
        <ul className='flex space-x-6 text-slate-500'>
          <li>Home</li>
          <li>Committees</li>
          <li>Secretariat</li>
          <li>Schedule</li>
          <li>Sponsor</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar