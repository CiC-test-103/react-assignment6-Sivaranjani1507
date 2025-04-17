import styles from "./Text-Section.module.css"

function TextSection(){
    return(
        <div className = { styles['textSection']}>
        <div className = {styles['bold-text']}>
            <h2> Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
            
            
        </div>
        <div className = {styles['regular-text']}>
         <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        
       </div>
    </div>
    )
}

export default TextSection 