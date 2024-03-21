import Link from "next/link";
import React from 'react';
export default function SignUp(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h2>SignUp</h2><div>
                <p>Enter Email</p>
                <input type="text" />
                </div>
                <div>
                <p>Enter Username</p>
                <input type="text" />
                </div>
                <div>
                <p>Enter PassWord</p>
                <input type="text" />    
                </div>
            </div>
            
            <div>YOU already have an account?
                <Link href="/login">Login Here</Link>
            </div>
        </main>
    )
}