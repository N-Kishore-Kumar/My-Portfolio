import React from "react"
import image from "../wallpaper.jpeg"

export default function Home() {
    return (
        <main className="relative bg-green-100 min-h-screen p-12 relative overflow-x-hidden">
            <section  
                className="relaive justify-center min-h-screen text-center"
            >
                <div className="flex justify-center text-center">
                    <img 
                            src={image} 
                            alt="My Wallpaper" 
                            className="ml-200 rounded-full w-50 h-60 p-200"
                    /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h1> 
                        <span className="text-blue-900 cursive home-name">KISHORE</span>
                        <span className="text-purple-600 cursive home-name mr-auto pr-auto"> KUMAR N</span><br></br>
                        <span className="text-black-900 home-details">+91 9449456930</span>
                        <span className="font-bold home-details"> | </span>
                        <span className="text-gray-500 home-details">NKISHOREKUMAR237@GMAIL.COM</span>
                    </h1>
                </div>
                <p className="ml-auto">
                        
                    </p>
                <br/><br/>
                <p className="text-gray-600 cursive leading-none lg:leading-snug pt-150 home-about">
                    I am an Undergraduate majoring in Computer Science and Engineering from VIT, Vellore. I am a Web Developer and 
                    Software Engineer.
                </p>
            </section>      

        </main>
    )
}