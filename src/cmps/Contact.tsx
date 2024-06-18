import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [txt, setTxt] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_12b795o', 'template_b52o50f', form.current, 'Vya5pj6jvkGDYwvFl')
        .then(
          () => {
            console.log('SUCCESS!')
            setName('')
            setEmail('')
            setTxt('')
            toast.success(`Mail sent successfully`)
          },
          (error) => {
            console.log('FAILED...', error.text)
            toast.error(`Failed to send mail`)
          },
        )
    }
  }

  return (
    <section className='mt-12 border border-t-gray' id='contact'>
      <h1 className='gradient-text text-center capitalize text-3xl tracking-wider font-semibold my-4 flex justify-center'>contact</h1>
      <div className='flex justify-center items-center text-white gap-4'>
        <a href="https://www.linkedin.com/in/amir-yankolovich/" target="_blank"><FaLinkedin className='text-2xl hover:text-linkedin duration-100' /></a>
        <a href="https://github.com/Amir2210" target="_blank"><FaGithub className='text-2xl hover:text-github duration-100' /></a>
      </div>
      <form className='flex flex-col items-center' ref={form} onSubmit={sendEmail}>
        <input onChange={(ev) => setName(ev.target.value)} value={name} placeholder='Full Name' className='outline outline-offset-1 outline-2 outline-gradient-purple p-2 rounded-sm border-none w-full max-w-xs my-4 bg-bg-dark text-white' type="text" name="from_name" required />
        <input onChange={(ev) => setEmail(ev.target.value)} value={email} placeholder='Email Address' className='outline outline-offset-1 outline-2 outline-gradient-purple p-2 rounded-sm border-none w-full max-w-xs my-4 bg-bg-dark text-white' type="email" name="from_email" required />
        <textarea onChange={(ev) => setTxt(ev.target.value)} value={txt} className='outline outline-offset-1 outline-2 outline-gradient-purple p-2 rounded-sm border-none my-4 w-full max-w-xs  bg-bg-dark text-white' placeholder='Your Message' name="message" required />
        <input className='outline outline-offset-1 outline-2 outline-gradient-purple p-2 rounded-sm border-none my-4 w-32 max-w-xs bg-bg-dark text-white' type="submit" value="Send" />
      </form>
    </section>
  );
}
