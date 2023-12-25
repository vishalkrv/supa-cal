'use client'

import InputText from "@/components/Input/InputText"
import Link from "next/link"
import ErrorText from "@/components/Typography/ErrorText"
import Intro from "@/components/Intro"


export default function LoginPage () {

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType, value)
    }


    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl shadow-xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div className="">
                        <Intro></Intro>
                    </div>
                    <div className="py-24 px-10">
                        <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
                        <form onSubmit={ (e) => console.log(e) }>
                            <div className="mb-4">
                                <InputText type="emailId" defaultValue={ 'test@email.com' } updateType={ 'emailId' } containerStyle={ 'mt-4' } labelTitle={ "Email Id" } updateFormValue={ updateFormValue }></InputText>

                                <InputText type="password" defaultValue={ 'password' } updateType={ 'password' } containerStyle={ 'mt-4' } labelTitle={ "Password" } updateFormValue={ updateFormValue }></InputText>
                            </div>

                            <div className="text-right text-primary">
                                <Link href="/auth/forgot">
                                    <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200"> Forgot Password?</span>
                                </Link>
                            </div>
                            <ErrorText styleClass={ 'mt-8' }>
                                Incorrect Credentials
                            </ErrorText>
                            <button type="submit" className="btn mt-2 w-full btn-primary">Login</button>
                            <div className="text-center mt-4"> Don't have an account yet?&nbsp;
                                <Link href="/auth/register">
                                    <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}