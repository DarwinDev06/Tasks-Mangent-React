
import './Headers.css'

import logo from '../assets/portapapeles.png'
import gitHub from '../assets/github.png'

function Headers () {
    return (
       <>
        <div className="Title">
            <img src={logo} alt='logo' className='logoTask'/>
            <h1>Task Managent</h1>
        </div>
        <div className="Subtitle">
            <img src={gitHub} alt='logoGitHub' className='logoGitHub'/>
            <h4>By DarwinDev</h4>
        </div>
        
       </>
    );
}

export {Headers}