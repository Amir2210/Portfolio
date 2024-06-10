export function About() {
  return (
    <section className='align-elemets text-white'>
      <div className='sm:mt-10 mt-4 sm:flex gap-5 justify-center'>
        <div className=''>
          <h1 className='justify-center flex capitalize text-4xl sm:text-6xl gradient-text font-semibold tracking-wider'>amir yankolovich</h1>
          <h2 className='capitalize mt-4 text-xl sm:text-3xl justify-center flex sm:justify-start'>full stack / frontend developer.</h2>
          <p className='mt-4 tracking-wider text-gray text-center sm:text-left'>Full Stack programmer specializing in Frontend development. I focus on creating engaging user experiences and solving complex problems. I really like reading books and sports</p>
          <div className='hidden sm:flex sm:flex-wrap gap-5 my-4 items-center'>
            <div className='capitalize cursor-pointer purple-outline'>download CV</div>
            <div className='capitalize cursor-pointer purple-outline'>certifications</div>
          </div>
        </div>
        <div>
          <img src="src/assets/avatar.png" alt="avatar" />
          <div className='flex flex-wrap justify-center sm:hidden gap-5 my-4 items-center'>
            <div className='capitalize cursor-pointer purple-outline'>download CV</div>
            <div className='capitalize cursor-pointer purple-outline'>certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}