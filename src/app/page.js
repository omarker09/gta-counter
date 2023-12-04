import Image from 'next/image'
import ViPalme from "../../public/GARanHiXUAA9Xbx.jpg"
import Timer from './componnent/timer'
export default function Home() {
  const endDate = new Date('2023-12-05T15:00:00');
  const Rockstarlink = "https://www.youtube.com/watch?v=QdBZY2fkU-0"
  return (
    <div style={{height: "100dvh"}} className=' main h-full bg-slate-100 w-full'>
      <div className=' text-black h-full flex flex-col justify-center items-center w-full'>
        <Timer datetime={endDate} rockLinke={Rockstarlink} />
      </div>
    </div>
  )
}
