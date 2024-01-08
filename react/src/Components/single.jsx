import { useState , useEffect } from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";

function Unique() {
    
    const { iduser } = useParams();
    const nav = useNavigate();
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        axios.post("http://localhost:8000/single", {code : iduser}).
        then(res => setUser(res.data))
    },[iduser])

    const handleDelete = async (id) => {
        await axios.post("http://localhost:8000/delete", {id})
        nav("/");
    }
    
    const handleUpdate = (id) => {
        nav(`/update/${id}`);
    }
    
    return ( 
        <div>
            {user.length == 0 ? <h1>User Not Found</h1> : 
                <div>
                    <h1>Bonjour {user[0].nom}</h1>
                    <div className="card p-3 m-auto mt-5" style={{width:"20rem"}}>
                        <h3>{user[0].nom}</h3>
                        <b>{user[0].email}</b>
                        <h3>{user[0].telephone}</h3>
                        <div className="w-100 p-3">
                            <button className="btn btn-success w-50" onClick={() => handleUpdate(user[0].code)}>Update</button>
                            <button className="btn btn-danger w-50 m-1" onClick={() => handleDelete(user[0].code)}>Delete</button>
                        </div>
                    </div>
                </div>
            }
        </div>
     );

}

export default Unique;