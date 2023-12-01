"use client"
import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import CongratsAnimation from "../../../public/animation/Animation - 1701458906029.json";
import CongratsAnimation2 from "../../../public/animation/Animation - 1701458960822.json";
function Timer({ datetime, rockLinke }) {

    const [dayz, setDayz] = useState()
    const [data, setData] = useState([])
    const [hourz, setHourz] = useState()
    const [minutesz, setMinutesz] = useState()
    const [secondsz, setSecondsz] = useState()
    const [isfinal, setIsfinale] = useState(false)
    const [rockLink, setRocklinke] = useState(rockLinke)

    const calculateTimeleft = () => {
        const now = new Date()
        const actualDate = new Date(datetime).getTime()
        const finalFormat = actualDate - now

        if (finalFormat <= 0) {
            return setIsfinale(true)
        }

        const days = Math.floor(finalFormat / (1000 * 60 * 60 * 24));
        const daysnum = parseInt(days)
        setDayz(daysnum)

        const hours = Math.floor((finalFormat % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const hoursnum = parseInt(hours)
        setHourz(hoursnum)

        const minutes = Math.floor((finalFormat % (1000 * 60 * 60)) / (1000 * 60));
        const minutesnum = parseInt(minutes)
        setMinutesz(minutesnum)

        const seconds = Math.floor((finalFormat % (1000 * 60)) / 1000);
        const secondsnum = parseInt(seconds)
        setSecondsz(secondsnum)

        return { days: daysnum, hours: hoursnum, minutes: minutesnum, seconds: secondsnum };
    }
    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeleft()
        }, 1000)
    }, [])

    return (
        <div className=' flex flex-col h-screen w-screen items-center relative justify-center'>

            <div className={isfinal === true ? "hidden" : ' flex items-center text-center gap-5 flex-col justify-center'}>
                <h1 className=' text-3xl sm:text-6xl text-center top-3 font-black text-white'>Grand Theft Auto <span className=' text-pink-600'></span></h1>
                <h1 className=' text-white text-2xl duration-150 font-bold max-w-xs'>{dayz}d  {hourz}h  {minutesz}m {secondsz}s</h1>
            </div>
            <div className={isfinal === true ? " flex items-center w-full relative h-full justify-center" : "hidden"}>
                <div className=' flex items-center h-screen w-screen relative  justify-center flex-col'>
                    <h1 className='text-3xl sm:text-6xl top-3 font-black text-white'>Grand Theft Auto<span className=' text-pink-600'>VI</span></h1>
                    <Lottie height={100} width={100} className=' absolute top-4 right-2 ' animationData={CongratsAnimation2} loop={true} />
                    <Lottie height={100} width={100} className=' absolute top-4 left-2 ' animationData={CongratsAnimation2} loop={true} />
                    <Lottie height={100} width={100} className='  ' animationData={CongratsAnimation} loop={true} />
                    <div className=' flex items-center gap-3 justify-center flex-col'>
                        <h1 className=' text-white'>GTA VI Trailer</h1>
                        <a className=' p-1 px-10 bg-violet-400 rounded-lg cursor-pointer text-white' href={rockLink} target='_blank' >Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer