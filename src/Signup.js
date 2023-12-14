import React from 'react'
export default function Signup(){
    return(
        <div class="container1">
            <div class="Signup">
                <form>
                    <h1>Sign up</h1>
                    <hr/>
                    <p>Get started!!</p>
                    <label className='text'>First Name</label>
                    <input type="name" placeholder="Enter your First Name" required></input>
                    <label className='text'>Last Name</label>
                    <input type="name" placeholder="Enter your Last Name" required></input>
                    <label className='text'>Enter valid Mail ID</label>
                    <input type="email" placeholder="Enter your Mail ID" required></input>
                    <label className='text'>Create Password</label>
                    <input type="password" placeholder="Enter your Password" required></input>
                    <label className='text'>Confirm Password</label>
                    <input type="password" placeholder="Confirm your Password" required></input>
                    <button>Submit</button>
                </form>
            </div>  
        </div>
    )
}
