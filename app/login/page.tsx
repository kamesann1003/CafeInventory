import Link from "next/link";
import React from 'react';
export default function Login(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h2>Login</h2>
                <div>
                <p>Enter Username</p>
                <input type="text" />
                </div>
                <div>
                <p>Enter PassWord</p>
                <input type="text" />    
                </div>
            </div>
            <div><p>create a new account here</p>
                <Link href="/signup">SignUp Here</Link>
            </div>
        </main>
    )
}