import React , { useRef ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GithubFilled } from '@ant-design/icons'
import './index.css'

import { Helmet } from 'react-helmet'

const Projects = () => {
    const navigate = useNavigate()
    const sliderBraillesense = useRef(null);
    const sliderAiditor = useRef(null);
    const sliderNSC = useRef(null)

    const ProjectOverdive = useRef(null)
    const BrailleSense = useRef(null)
    const Aiditor = useRef(null)

    const elementsToAnimate = useRef([]);

    const moveToProjectoverdive = () => {
        navigate('/Projects/#Projectoverdive');
        
        const projectElement = document.getElementById("Projectoverdive");
        if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth' });
        }
        

        if (ProjectOverdive.current) {
            ProjectOverdive.current.classList.remove("animate__zoomIn");
            void ProjectOverdive.current.offsetWidth; 
            ProjectOverdive.current.classList.add("animate__zoomIn");
        }
    };


    const moveToBraillSense = () => {
        navigate('/Projects/#Braillesense');
        
        const projectElement = document.getElementById("Braillesense");
        if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth' });
        }

        if (BrailleSense.current) {
            BrailleSense.current.classList.remove("animate__zoomIn");
            void BrailleSense.current.offsetWidth; 
            BrailleSense.current.classList.add("animate__zoomIn");
        }
    };

    const moveToAiditor = () => {
        navigate('/Projects/#Aiditor');
        
        const projectElement = document.getElementById("Aiditor");
        if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth' });
        }

        if (Aiditor.current) {
            Aiditor.current.classList.remove("animate__zoomIn");
            void Aiditor.current.offsetWidth; 
            Aiditor.current.classList.add("animate__zoomIn");
        }
    };

    const moveToStart = () => {
        navigate('/Projects/#Start');

        const projectElement = document.getElementById("Start");
        if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__zoomIn');
                    } else {
                        entry.target.classList.remove('animate__animated', 'animate__zoomIn');
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        elementsToAnimate.current.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []); 



    const scrollBraillsense = (scrollOffset) => {
        if (sliderBraillesense.current) {
          sliderBraillesense.current.scrollTo({
            left: sliderBraillesense.current.scrollLeft + scrollOffset,
            behavior: 'smooth'
          });
        }
    };
    const scrollAiditor = (scrollOffset) => {
        if (sliderAiditor.current) {
            sliderAiditor.current.scrollTo({
                left: sliderAiditor.current.scrollLeft + scrollOffset,
                behavior: 'smooth'
            });
        }
    }
    const scrollNSC = (scrollOffset) => {
        if (sliderNSC.current) {
            sliderNSC.current.scrollTo({
                left: sliderNSC.current.scrollLeft + scrollOffset,
                behavior: 'smooth'
            });
        }
    }
  return (
    
    <div className="flex flex-col overflow-x-hidden">
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
        <div className="w-screen h-screen flex flex-col ">
            <div className="fixed text-black flex flex-row bg-white h-[10%] justify-between w-screen items-center py-2 px-10 cursor-pointer border-b-2 border-black z-10">
            <div className="k2d-bold text-5xl mb-1">Schierke</div>
            <div className="flex flex-row justify-end cursor-pointer">
                <div
                className="k2d-semibold text-3xl text-black underline hover:text-white hover:bg-black hover:no-underline hover:px-4 hover:rounded-3xl mr-10"
                onClick={() => {
                    navigate("/");
                }}
                >
                Home
                </div>
                <div className="k2d-semibold text-3xl text-black underline hover:text-white hover:bg-black hover:no-underline hover:px-4 hover:rounded-3xl mr-10" onClick={moveToStart}>
                Projects
                </div>
                <div className="k2d-semibold text-3xl text-black underline hover:text-white hover:bg-black hover:no-underline hover:px-4 hover:rounded-3xl mr-10">
                Skill
                </div>
            </div>
            </div>
            {/* Add padding or margin-top here */}
            <div className="flex flex-col w-full p-10 text-black bg-white mt-[4%] marker:">
                <div className="flex flex-row mb-5" id="Start">
                    <div className="text-center p-4 k2d-bold">
                        กดหัวข้อเพื่อเลื่อนไปยังผลงาน : 
                    </div>
                    <div className="border-2 p-4 rounded-3xl border-black k2d-bold mr-5 cursor-pointer animate__animated animate__zoomIn" onClick={moveToProjectoverdive}>Project Overdive</div>
                    
                    <div className="cursor-pointer mr-5 border-2 p-4 rounded-3xl border-black k2d-bold animate__animated animate__zoomIn" onClick={moveToBraillSense}>Braille Sense</div>
                    
                    <div className="cursor-pointer mr-5 border-2 p-4 rounded-3xl border-black k2d-bold animate__animated animate__zoomIn" onClick={moveToAiditor}>Aiditor </div>
                    
                </div>
                <div id="Projectoverdive" className="border-b-2 border-black pb-12 animate__animated animate__zoomIn" ref={ProjectOverdive}>
                    <div className="k2d-semibold text-black text-7xl " >Project Overdive</div>
                    <div className="k2d-regular text-xl mt-2 ml-4" >โปรเจคโอเวอร์ไดร์ฟ : ปั่นงานสุดชีวิต</div>
                    <div className="flex flex-row w-full mt-4 ml-8  items-center " >
                        <div className="h-[40%] p-4 rounded-3xl border-2 border-black ">
                            {/* <img src="/assets/NSC2024/NSC2.jpg" alt="NSC2-Picture" className="rounded-3xl"/> */}
                            <video width="100%" height="auto" controls>
                                <source src="/assets/NSC2024/NSCvideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="flex flex-col ml-10">
                            <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-3/4">
                                <div className="flex flex-row"> 
                                    <div className="k2d-bold text-2xl">รายละเอียด</div>
                                </div>
                                
                                <div className="k2d-regular ml-4 mt-2">
                                    <span className="k2d-bold">โปรเจคโอเวอร์ไดฟ์ </span>เป็น<span className="k2d-bold">เกมการ์ดที่เน้นการวางกลยุทธ์และการทำงานเป็นทีม</span> ผู้เล่นจะแบ่งออกเป็นสองฝ่าย คือฝ่ายคนในบริษัทที่ต้องเก็บสะสมการ์ดโปรเจคให้ครบตามเป้าหมาย และฝ่ายคนนอกบริษัทที่ต้องคอยขัดขวางไม่ให้โปรเจคสำเร็จ ทั้งสองฝ่ายต้องใช้การวางแผนและกลยุทธ์เพื่อบรรลุเป้าหมายของตนเองในขณะที่พยายามทำให้อีกฝ่ายพ่ายแพ้   
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-[50%] mt-4 justify-center">
                                    <div className="flex flex-row"> 
                                        <div className="k2d-bold text-xl">เครื่องมือที่ใช้</div>
                                    </div>
                                    <div className="flex flex-row items-center mt-2">
                                        <div className="w-40 ">
                                            <img src="/assets/NSC2024/Unity_Logo.png" alt="Unity-Logo"/>
                                        </div>
                                        <div className="w-40 ml-4">
                                            <img src="/assets/NSC2024/Netcode_Logo.png" alt="Netcode-Logo"/>
                                        </div>
                                    </div>    
                                </div>
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-[17%] ml-4 mt-4">
                                    <div className="k2d-bold text-xl">ซอร์ดโค้ด</div>
                                    <a href='https://github.com/SCIERke/NSC2024'>
                                        <div className="text-7xl ml-1" >
                                            <GithubFilled />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 k2d-bold text-2xl ml-9 w-[45%] text-center">
                        วิดีโอเกมเพลย์
                    </div>
                    <div className="w-full  text-black" >
                        <div className="k2d-bold text-3xl ml-5" >รูปภาพอื่นๆ </div>
                        <div className="flex flex-row" >
                            <div className="w-[50%]" >
                                <div className="flex flex-row h-80 mt-4 gap-x-5 overflow-x-scroll no-scrollbar" ref={sliderNSC}>
                                    <img src="/assets/NSC2024/imageslide/1.jpg" alt="slide-image-1" className="rounded-3xl"/>
                                    <img src="/assets/NSC2024/imageslide/2.jpg" alt="slide-image-2" className="rounded-3xl"/>
                                    <img src="/assets/NSC2024/imageslide/3.jpg" alt="slide-image-3" className="rounded-3xl"/>
                                </div>
                                <div className='w-full flex flex-row justify-center mt-5 '>
                                    <button 
                                        onClick={() => scrollNSC(-200)} 
                                        className="py-4 px-6  bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❮
                                    </button>
                                    <button 
                                        onClick={() => scrollNSC(200)} 
                                        className="py-4 px-6 bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❯
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 p-4 border-2 border-black rounded-3xl w-[50%]" >
                                <div className="k2d-medium text-xl">เอกสารเพิ่มเติม</div>
                                <embed src="/assets/NSC2024/NSC_Document.pdf" height="330px"/>
                            </div>
                        </div>               
                    </div>
                </div>
                <div id="Braillesense" className="pt-10 border-b-2 border-black pb-12 animate__animated animate__zoomIn" ref={BrailleSense}>
                    <div className="k2d-semibold text-black text-7xl">BrailleSense</div>
                    <div className="k2d-regular text-xl mt-2 ml-4">ถุงมืออ่าน-เขียนเบรลล์สำหรับคนพิการทางสายตา</div>
                    <div className="flex flex-row w-full mt-4 ml-8  items-center">
                        <div className="w-[90%] p-4 rounded-3xl border-2 border-black">
                            <img src="/assets/BrailleSense/Innovation_Draft.png" alt="Innovation_Draft-SIC" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col ml-10">
                            <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-3/4">
                                <div className="flex flex-row"> 
                                    <div className="k2d-bold text-2xl">รายละเอียด</div>
                                </div>
                                
                                <div className="k2d-regular ml-4 mt-2">
                                     เป็นอุปกรณ์ในรูปแบบถุงมือที่ออกแบบมาเพื่อช่วยเหลือผู้ที่มีความบกพร่องทางการมองเห็นและผู้ที่สนใจในอักษรเบรลล์ ได้มีโหมดการทำงาน 3 โหมด ได้แก่ โหมดการเขียน(เขียนเหมือนเครื่องเขียนเบรลล์ดั้งเดิม) , โหมดการอ่าน , โหมดครอนโทรล โดยอุปกรณ์นี้จะทำให้ผู้พิการสามารถเข้าถึงอุปกรณ์อิเล็กทรอนิกส์ได้
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-[50%] mt-4">
                                    <div className="flex flex-row"> 
                                        <div className="k2d-bold text-xl">เครื่องมือที่ใช้</div>
                                    </div>
                                    <div className="flex flex-row items-center mt-2">
                                        <div className="w-24 ">
                                            <img src="/assets/BrailleSense/nodered-logo.png" alt="Nodered-Logo"/>
                                        </div>
                                        <div className="w-24 ml-4">
                                            <img src="/assets/BrailleSense/react-logo.png" alt="React-Logo"/>
                                        </div>
                                        <div className="w-40 ml-4">
                                            <img src="/assets/BrailleSense/mongo-logo.png" alt="Mongo-Logo"/>
                                        </div>
                                    </div>    
                                </div>
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-32 ml-4 mt-4 h-36">
                                    <div className="k2d-bold text-xl">ซอร์ดโค้ด</div>
                                    <a href='https://github.com/SCIERke/Brailesense'>
                                        <div className="text-7xl ml-1" >
                                            <GithubFilled />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 k2d-bold text-2xl  w-[40%] text-center">
                        รูปอุปกรณ์
                    </div>
                    <div className="w-full  text-black">
                        <div className="k2d-bold text-3xl ml-5">รูปภาพอื่นๆ </div>
                        <div className="flex flex-row">
                            <div className="w-[70%]">
                                <div className="flex flex-row h-80 mt-4 gap-x-5 overflow-x-scroll no-scrollbar" ref={sliderBraillesense}>
                                    <img src="/assets/Braillesense/imageslide/1.jpg" alt="slide-image-1" className="rounded-3xl"/>
                                    <img src="/assets/Braillesense/imageslide/2.jpg" alt="slide-image-2" className="rounded-3xl"/>
                                    <img src="/assets/Braillesense/imageslide/3.jpg" alt="slide-image-3" className="rounded-3xl"/>
                                    <img src="/assets/Braillesense/imageslide/4.jpg" alt="slide-image-4" className="rounded-3xl"/>
                                    <img src="/assets/Braillesense/imageslide/5.jpg" alt="slide-image-5" className="rounded-3xl"/>
                                    <img src="/assets/Braillesense/imageslide/6.jpg" alt="slide-image-6" className="rounded-3xl"/>
                                </div>
                                <div className='w-full flex flex-row justify-center mt-5 '>
                                    <button 
                                        onClick={() => scrollBraillsense(-200)} 
                                        className="py-4 px-6  bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❮
                                    </button>
                                    <button 
                                        onClick={() => scrollBraillsense(200)} 
                                        className="py-4 px-6 bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❯
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 p-4 border-2 border-black rounded-3xl w-[30%]">
                                <div className="k2d-medium text-xl">เอกสารเพิ่มเติม</div>
                                <a href="https://www.canva.com/design/DAF-7vMJIFM/BmIN_RS1zEU8hmzgokumqQ/edit?ui=eyJIIjp7IkEiOnRydWV9fQ">
                                    <img src="/assets/BrailleSense/SIC_document.jpg" alt="SIC Document" className="hover:border-2 hover:border-blue-500 rounded-2xl cursor-pointer"/>
                                </a>
                            </div>
                        </div>               
                    </div>
                </div>
                <div id="Aiditor" className="pt-10 border-b-2 border-black pb-12 animate__animated animate__zoomIn" ref={Aiditor}>
                    <div className="k2d-semibold text-black text-7xl">AIDITOR</div>
                    <div className="k2d-regular text-xl mt-2 ml-4">แอปพลิเคชันตรวจจับและแจ้งเตือนความผิดปกติของข้อมูลร้านค้า</div>
                    <div className="flex flex-row w-full mt-4 ml-8  items-center">
                        <div className="preview_aiditor p-4 rounded-3xl border-2 border-black">
                            <video width="" height="auto" controls>
                                <source src="/assets/AIditor/link_preview.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        
                        <div className="flex flex-col ml-10">
                            <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-3/4">
                                <div className="flex flex-row"> 
                                    <div className="k2d-bold text-2xl">รายละเอียด</div>
                                </div>
                                
                                <div className="k2d-regular ml-4 mt-2">
                                AI Auditor เป็นโครงการที่ผมพัฒนาขึ้นจากทาง CAI Mentor ได้ระบุถึงปัญหา การตรวจจับความผิดปกติของข้อมูลบัญชีภายในร้านสะดวกซื้อ เซเว่นหลากหลายสาขา      
                                โดยใช้ AI ซึ่งโมเดลที่ผมเลือกใช้นั้นก็คือ AutoEncoder ที่เป็น Model ในการทำ Anomaly และใช้ Restruction Data มาทำการ Classified ด้วย Random Forest อีกทีครับ
                                และผมจะนำข้อมูลที่ไปแสดงผลผ่านแอปพลิเคชั่นที่สร้างขึ้นด้วยเฟรมเวิร์ก Flutter และ Fastapi เป็น Backend โดยผมใช้ Firebase ในการ Deploy ครับ
                                และนอกจากนี้ผมยังได้ลองใช้ Supabase ซึ่งเป็น Database อีกด้วย (แต่ไม่ใช้ในการ Deploy จริง)
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-[50%] mt-4">
                                    <div className="flex flex-row"> 
                                        <div className="k2d-bold text-xl">เครื่องมือที่ใช้</div>
                                    </div>
                                    <div className="flex flex-row items-center mt-2">
                                        <div className="flex flex-col">
                                            <div className="w-40 ">
                                                <img src="/assets/AIditor/fastapi-logo.png" alt="FastAPI-Logo"/>
                                            </div>
                                            <div className="w-40">
                                                <img src="/assets/AIditor/firebase-logo.png" alt="Firebase-Logo"/>
                                            </div>
                                        </div>
                                        <div className="w-20 ml-4">
                                            <img src="/assets/AIditor/flutter-logo.png" alt="Flutter-Logo"/>
                                        </div>
                                        <div className="w-20 ml-4">
                                            <img src="/assets/AIditor/supabase-logo.png" alt="Supabase-Logo" className="rounded-3xl"/>
                                        </div>
                                    </div>    
                                </div>
                                <div className="flex flex-col p-4 border-2 border-black rounded-3xl w-80 ml-4 mt-4 h-36">
                                    <div className="k2d-bold text-xl">ซอร์ดโค้ด</div>
                                    <div className="flex flex-row">    
                                        <div className="text-7xl ml-1" >
                                            <GithubFilled />
                                        </div>
                                        <ul className="ml-10 flex flex-col list-disc k2d-regular underline">
                                            <a href='https://github.com/SCIERke/CAI_Branch'>
                                                <li>Frontend-Branch Code</li>
                                            </a>
                                            <a href="https://github.com/SCIERke/CAI_Backend">
                                                <li>Backend Code</li>
                                            </a>
                                            <a href='https://github.com/SCIERke/CAI_Audit'>
                                                <li>Frontend-Audit Code</li>
                                            </a>
                                              
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" k2d-bold text-2xl  w-[45%] text-center">
                        วิดีโอพรีวิว
                    </div>
                    <div className="w-full  text-black">
                        <div className="k2d-bold text-3xl ml-5">รูปภาพอื่นๆ </div>
                        <div className="flex flex-row">
                            <div className="w-[50%]">
                                <div className="flex flex-row h-80 mt-4 gap-x-5 overflow-x-scroll no-scrollbar" ref={sliderAiditor}>
                                    <img src="/assets/AIditor/imageslide/1.jpg" alt="slide-image-1" className="rounded-3xl"/>
                                    <img src="/assets/AIditor/imageslide/2.jpg" alt="slide-image-2" className="rounded-3xl"/>
                                    <img src="/assets/AIditor/imageslide/3.jpg" alt="slide-image-3" className="rounded-3xl"/>
                                    <img src="/assets/AIditor/imageslide/4.jpg" alt="slide-image-4" className="rounded-3xl"/>
                                    <img src="/assets/AIditor/imageslide/5.jpg" alt="slide-image-5" className="rounded-3xl"/>
                                </div>
                                <div className='w-full flex flex-row justify-center mt-5 '>
                                    <button 
                                        onClick={() => scrollAiditor(-200)} 
                                        className="py-4 px-6  bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❮
                                    </button>
                                    <button 
                                        onClick={() => scrollAiditor(200)} 
                                        className="py-4 px-6 bg-black text-white rounded-full mx-2 opacity-50 hover:opacity-80"
                                    >
                                        ❯
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 p-4 border-2 border-black rounded-3xl w-[50%]">
                                <div className="k2d-bold text-3xl">
                                        เอกสารเพิ่มเติม
                                </div>
                                <div className=" ml-4 mt-2 flex flex-col h-full ">
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col list-disc ml-5">
                                            <li className="k2d-regular text-xl">Data Flow</li>
                                        </ul>
                                        <div className="ml-2">
                                            <img src="/assets/AIditor/flowchart-AI.png" alt="FlowchartAI-Aiditor"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col list-disc ml-5">
                                            <li className="k2d-regular text-xl">Data Flow</li>
                                        </ul>
                                        <div className="ml-2">
                                            <img src="/assets/AIditor/one_page.png" alt="FlowchartAI-Aiditor"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>               
            </div>
            
        </div>
    </div>
  )
}

export default Projects
