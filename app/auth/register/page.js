'use client'

import InputText from "@/components/Input/InputText";
import Intro from "@/components/Intro";
import Link from "next/link"
import ErrorText from "@/components/Typography/ErrorText"

export default function Register () {

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType, value)
}

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className=''>
            <Intro></Intro>
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
            <form onSubmit={ (e) => console.log(e) }>

              <div className="mb-4">


                <InputText defaultValue={ 'Test' } updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={ updateFormValue } />

                <InputText defaultValue={ 'test@test.com'} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={ updateFormValue } />

                <InputText defaultValue={ 'password' } type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={ updateFormValue } />

              </div>



              <ErrorText styleClass="mt-8">{ 'Invalid Data' }</ErrorText>
              <button type="submit" className={ "btn mt-2 w-full btn-primary"}>Register</button>

              <div className='text-center mt-4'>Already have an account? <Link href="/auth/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}