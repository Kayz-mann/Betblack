import React from 'react'
import '../App.css'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Games from '../components/Games'
import Burger from '../components/Nav/Burger'
import Platform from '../components/Platform'
import Roadmap from '../components/Roadmap'

function Screen() {
    return (
     <div>
        <div className="background-image">
           <Burger />
            <Platform />
        </div>
        <div className="roadmapbg">
            <Roadmap />
        </div>
        <div className="gamesbg">
            <Games />
        </div>
        <div className="contactbg">
            <Contact />
        </div> 
         <Footer />
    </div>
    )
}

export default Screen
