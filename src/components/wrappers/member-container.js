import React, {useState} from 'react'


const MemberContainer = ()=>{
    const [data, setData] = useState()
    
    const handleClick = async ()=>{
        const response = await fetch('https://portafolio-env.eba-d3j6tvyk.us-east-1.elasticbeanstalk.com/api/score')
        const responseJson = await response.json()
        setData(JSON.stringify(responseJson))
    }

    return (
        <div>
            <h1>Member</h1>
            <button ><a href="https://portafolio-env.eba-d3j6tvyk.us-east-1.elasticbeanstalk.com/api/pdf">Get PDF</a></button>
            <button onClick={handleClick}>Get DATA</button>
            <p>{data}</p>
        </div>
    )
}

export default MemberContainer;