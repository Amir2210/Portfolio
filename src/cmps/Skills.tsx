export function Skills() {
  return (
    <section className='align-elemets px-4 py-2'>
      <h1 className='capitalize text-2xl gradient-text text-center font-semibold mb-4'>my skills:</h1>
      <div className='grid grid-cols-2 sm:grid-cols-5 sm:gap-3 place-items-center'>
        <div className='sm:p-4'>
          <img className='size-14' src="src/assets/js.png" alt="js logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/css.png" alt="css logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/html.png" alt="html logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/ts.png" alt="ts logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/react.png" alt="react logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/sass.png" alt="sass logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/tailwind.png" alt="tailwind logo" />
        </div >
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/redux.png" alt="redux logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/node.png" alt="node logo" />
        </div>
        <div className='p-2 sm:p-4'>
          <img className='size-14' src="src/assets/mongo.png" alt="mongo logo" />
        </div>
      </div>
    </section>
  )
}