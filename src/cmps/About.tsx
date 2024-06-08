export function About() {
  return (
    <section className='align-elemets min-h-72 text-white'>
      <div className='mt-10 sm:flex gap-5'>
        <div className=''>
          <h1 className='capitalize text-6xl gradient-text font-semibold tracking-wider'>amir yankolovich</h1>
          <h2 className='capitalize mt-4 text-3xl'>full stack / frontend developer</h2>
          <p className='mt-4 tracking-wide'>Full Stack programmer specializing in Frontend development. I focus on creating engaging user experiences and solving complex problems. I really like reading books and sports</p>
        </div>
        <div>
          <img src="src/assets/avatar.png" alt="" />
        </div>
      </div>
    </section>
  )
}