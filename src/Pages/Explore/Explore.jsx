import React from 'react'
import "./explore.css"
import Explorepost from '../../Components/ExplorePost/Explorepost'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { PostExplore } from '../../Components/data'
export default function Explore() {
  return (
    <div>
      <div>
          <div className='homesubcontainer'>
              <div className='homesidebar'>
                  <Sidebar />
              </div>
              <div className='Explorerightbar'>
                {PostExplore.map((item)=>(
                  <Explorepost item={item}/>
                ))}
              </div>
          </div>
      </div>
    </div>
  )
}
