import React from 'react'
import { useForm } from 'react-hook-form'

type FormInputs = {
  email: string;
  password: string;
}

export const FormsPage = () => {

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: 'Phos@example.com',
      password: '12346'
    }
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log({myForm});
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>
        Formularios
      </h3>
      <div className='flex flex-col space-y-2 w-[500px]'>
        <input type="email" placeholder='email' className='border border-gray-300 p-2 rounded-xl' {...register('email', {required: true})} />
        <input type="password" placeholder='password' className='border border-gray-300 p-2 rounded-xl'  {...register('password', {required: true})}  />
        <button type='submit' className='px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-200 font-medium shadow-sm'
        >
          Ingresar
        </button>
      </div>
    </form>
  )
}
