/** Component Imports */


/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */
import drawers from '../images/drawers.jpg'
import Image from './components/Image.jsx'
import TextSection from './components/Text-Section.jsx'
import avatar from '../images/avatar-michelle.jpg'
import './App.css'
import ShareIcon from '../images/icon-share.svg'
const App = () => {
  return (

    <div className ="main-container">
      <div className ='img-container'>
      
      
      <Image src = {drawers} />
    </div>

    <div className ='details-container'>
 
      <TextSection />

      

    <section>
    <div className ='author-info'>
    <div className ='authorImg'>
      <Image src ={avatar} />
    </div>

      <div className = 'nameDetails'>
      <h5>Michelle Appleton</h5>
      <p>28 Jun 2020</p>
      </div>
      </div>
    
      {/* <button className = 'share-btn'>Share</button> */}
     
      <button className='share-icon'><Image src ={ShareIcon}  /></button>
      

    </section>

    </div>
   </div>
   
   
  )
}

export default App