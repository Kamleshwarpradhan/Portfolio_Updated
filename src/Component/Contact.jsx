import React from 'react'

const Contact = () => {
  return (
    <section 
       id='contact'
      className='max-w-contentContainer mx-auto flex flex-col justify-center items-center
      gap-4 py-10 lg:py-32'>
          <h2 className='text-textGreen text-sm font-titleFont font-bold'>03. What's Next?</h2>
          <h1 className='text-5xl text-textLight font-titleFont font-bold'>Get In Touch</h1>
          <p className='max-w-containerxs text-center text-sm text-textDark'>If you have any kind of query related to me or want to know more about me My email box is always open. I am seeking for an opportunity so that I can showcase my skills so just click the button and say Hello</p>
          <div className='mt-4 flex justify-center items-center'>
                  <button className='w-36 h-12 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 px-1'>
                      Say Hello 👋
                  </button>
          </div>
    </section>
  )
}

export default Contact