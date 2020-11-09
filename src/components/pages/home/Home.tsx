import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const about_data="In 1852, Levi Strauss, an immigrant from Bavaria, opened a dry goods company in San Francisco at the height of the California Gold Rush. While he was working, he recognized a need among hardworking people: clothes built to endure anything. He and tailor Jacob Davis combined copper rivet reinforcements with tough denim, leading to the first manufactured waist overalls in 1873. Today, we call them blue jeans."
function Home(){
    
    return(
        <div className='home_container'>
            <div className='about'>{about_data}</div>
            <div className='home'>
                <Link to='/products' className='home_button'>
                    Start Buying</Link>
            </div>
        </div>
    )
}

export default Home