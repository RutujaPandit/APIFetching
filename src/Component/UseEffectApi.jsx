import {useState,useEffect} from 'react';
const UseEffectApi = () => {

    const [user,setUser] = useState([])

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());
       }


    useEffect(() =>{
        getUser()
    },[])



    return(
        <>
     <h1>List of GitHub Users</h1>                
       <div className="container-fluid mt-5">
           <div className="row text-center">
            {
                user.map((curElem)=>{

                    const {login,id,avatar_url,type} =curElem;
                    return(
                        <div>
                             <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                    <div className="d-flex align-item-center">
                    <div className="image"><img src={avatar_url} alt="picture" className="rounded" width="155px"></img></div>
                    <div className="ml-3 w-100">
                    <h2>Name:{login}</h2>
                    <h5>Type:{type}</h5>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats ">
                    <div className="d-flex flex-colum"><span>Articles:</span><span>20</span></div>
                    <div className="d-flex flex-colum"><span>Followers:</span><span>250</span></div>
                    <div className="d-flex flex-colum"><span>Rating:</span><span>8.9</span></div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                            
                        </div>
                    )

                })

            }

               
           </div>
           </div>
        
         </>
    );
}

export default UseEffectApi; 