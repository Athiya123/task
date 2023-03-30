import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import './fetch.css';

const Details =() =>{
    const[UserDetails,setUserDetails] = useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setUserDetails(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])


    return (
        <div className="card-container">
            {UserDetails.map((user)=>(
                // <div key={user.userId} className="card">
                <div className="card">{user.userId}
                    <div className="card-header">{user.id}</div>
                    <div className="card-body">
                        <h1 className="card-title">{user.title}</h1>
                        <p className="card-text">{user.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;




// import React from 'react';
// import { useState, useEffect} from 'react';
// import axios from 'axios';
// import './fetch.css';

// const Details =() =>{
//     const[UserDetails,setUserDetails] = useState([]);
//     useEffect(() =>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             setUserDetails(response.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }, [])

//     return (
//         <div>
//             {UserDetails.map((user)=>(
//                 <div key={user.id} className="card">
//                     <div className="card-header">{user.title}</div>
//                     <div className="card-body">
//                         <h5 className="card-title">{user.userId}</h5>
//                         <p className="card-text">{user.body}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Details;



// import React from 'react';
// import { useState,useEffect}  from 'react';
// import axios from 'axios';

// const Details =() =>{
//     const[UserDetails,setUserDetails] = useState([]);
//     useEffect(() =>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             setUserDetails(response.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }, [])
//     return (
//         <div>
//             {UserDetails.map((user)=>(
//                 <div key={user.id} >
                    
//                      {user.userId} 
//                     {user.title}
//                     {user.body}
                   
            
//                 </div>
//             ))}
           
//         </div>
//     )
// }

// export default Details