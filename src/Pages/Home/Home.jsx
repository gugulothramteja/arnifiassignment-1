import React from 'react'
import "./home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Rightbar from '../../Components/Rightbar/Rightbar'
export default function Home() {
  return (
      <div>
          <div className='homesubcontainer'>
              <div className='homesidebar'>
                  <Sidebar />
              </div>
              <div className='homerightbar'>
                  <Rightbar />
              </div>
          </div>
      </div>
  )
}
