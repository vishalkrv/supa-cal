'use client'

import InputText from "@/components/Input/InputText"
import Link from "next/link"
import ErrorText from "@/components/Typography/ErrorText"
import Intro from "@/components/Intro"
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'
import { useState } from "react"

export default function ForgotPassword () {

  const [linkSent] = useState(false);

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType, value)
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className=''>
            <Intro />
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Forgot Password</h2>

            {
              linkSent &&
              <>
                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                <p className='my-4 text-xl font-bold text-center'>Link Sent</p>
                <p className='mt-4 mb-8 font-semibold text-center'>Check your email to reset password</p>
                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

              </>
            }

            {
              !linkSent &&
              <>
                <p className='my-8 font-semibold text-center'>We will send password reset link on your email Id</p>
                <form onSubmit={ (e) => console.log(e) }>

                  <div className="mb-4">

                    <InputText type="emailId" defaultValue={ 'test@test.com' } updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={ updateFormValue } />


                  </div>

                  <ErrorText styleClass="mt-12">{ 'Invalid Credentials' }</ErrorText>
                  <button type="submit" className={ "btn mt-2 w-full btn-primary"}>Send Reset Link</button>

                  <div className='text-center mt-4'>Dont have an account yet? <Link href="/auth/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</button></Link></div>
                </form>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}