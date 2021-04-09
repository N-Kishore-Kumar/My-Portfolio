import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-red-800">
            <div className="container mx-auto flex justify-between ml-60">
                <nav className="flex">   
                    <NavLink 
                        to="/" 
                        exact
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-300 text-yellow-300 text-lg"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink>
                    <NavLink 
                        to="/education"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-300 text-yellow-300 text-lg"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Education
                    </NavLink>
                    <NavLink 
                        to="/skill"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-300 text-yellow-300 text-lg"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Skills
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-300 text-yellow-300 text-lg"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 mr-60"> 
                    <SocialIcon 
                        url="https://www.linkedin.com/in/kishore-kumar-narayanan-6a552a1b2/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height:35, width:35}} 
                    />
                    <SocialIcon 
                        url="https://twitter.com/kishorekumar_6" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height:35, width:35}} 
                    />
                    <SocialIcon 
                        url="https://github.com/N-Kishore-Kumar" 
                        className="mr-20" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height:35, width:35}} 
                    />
                </div>
            </div>
        </header>
    )
}