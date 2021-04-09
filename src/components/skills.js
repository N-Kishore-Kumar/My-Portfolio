import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


export default function Skills() {
   {/* const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []); */ }

    return (
        <main className="bg-green-100 min-h-screen p-12 m-auto pl-200 ">
            <section className="text-center ">
                <h1 className="text-5xl flex justify-center cursive">SKILLS</h1><br/>
                <h2 className="text-lg text-black-100 flex justify-center mb-12">Programming Languages & Tools </h2>
                <div className="row">
                <div className="column" >
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">HTML</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">PHP</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">JavaScript</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                    <tr>
                        <td>✅</td>
                        <td className="text-gray-700">CSS</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">NodeJS</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">MySQL</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">Python</td>
                        </tr>
                    </table>
                </div>
                <div className="column">
                <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">Java</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">C Programming</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">C++ Programming</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">R Programming</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">MS Word</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">MS Excel</td>
                        </tr>
                    </table>
                    <table cellPadding="15" cellSpacing="10">
                        <tr>
                        <td>✅</td>
                        <td className="text-gray-700">MS PowerPoint</td>
                        </tr>
                    </table>
                </div>
                </div>
            </section>
        </main>
    )
}