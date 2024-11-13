import React from 'react'
import Glass from './components/Glass'
import { GithubOutlined ,MailFilled} from '@ant-design/icons'
import Projects from './Projects'
import { useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

function AboutMe() {
    const navigate = useNavigate();
    return (
    <div className="flex flex-col w-screen h-screen bg-cat overflow-hidden">
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
        <div className="flex flex-row  w-screen h-16 k2d-regular text-4xl underline px-4 ">
            <div className="cursor-pointer" onClick={() => {
                navigate("/Projects");
            }}>Project</div>
        </div>
        <div className="flex flex-row w-screen h-5/6  justify-end pt-20 p-4 items-center pr-20">
            <div className="flex flex-col  w-[40%] pr-5">
                <div className="k2d-bold text-9xl animate__animated animate__fadeIn">PortFolio</div>
                <div className="flex flex-row justify-between mt-4 items-center">
                    <div className="k2d-bold text-3xl ml-10 titleName animate__animated animate__bounceIn">Peerapat Setsuk</div>
                    <div className="flex flex-row items-center cat-hand mr-7">
                        <div className="flex flex-col">
                            <div className='dot-cat bg-black relative left-3'/>
                            <div className="flex flex-row items-center">
                                <div className='dot-cat-middle bg-black mt-2 relative right-1'/>
                            </div>
                            <div className='dot-cat bg-black mt-2 relative left-3'/> 
                        </div>
                        <div className="bg-black h-20 rounded-l-full cat-increase-width"></div>    
                    </div>     
                </div>
            </div>        
        </div>
        <div className="flex flex-row justify-end relative px-16 top-28 z-0 w-screen h-1/6  animate__animated animate__fadeInUp">
            <div className="flex flex-row items-center mr-10 mt-1">
                <div className="text-6xl mr-5">
                    <MailFilled />
                </div>
                <div className="k2d-semibold text-2xl underline">peerapatsetsuk15@gmail.com</div>
            </div>
            <div className="flex flex-row items-center ">
                <div className="text-6xl mr-5">
                    <GithubOutlined />
                </div>
                <div className="k2d-semibold text-4xl underline">SCIERke</div>
            </div>
        </div>
        <div className="flex flex-row w-screen h-1/6 z-10">
            
            <div className="relative right-4">
                <Glass className=""/>
            </div>
            <div className="relative right-12">
                <Glass />
            </div>
            <div className="relative right-20">
                <Glass />
            </div>
            <div className="relative right-28">
                <Glass />
            </div>
            <div className="relative right-36">
                <Glass />
            </div>
            <div className="relative right-44">
                <Glass />
            </div>
            <div className="relative right-52">
                <Glass />
            </div>
            <div className="relative right-60">
                <Glass />
            </div>
            
            <div className="relative right-72">
                <Glass />
            </div>
            <div className="relative right-80">
                <Glass />
            </div>
            <div className="relative right-96">
                <Glass />
            </div>
            
        </div>
    </div>
  )
}

export default AboutMe
