import axios from "axios";
import { useEffect , useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
function Search() {
    
    const { search } = useParams();
    const nav = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8000/search', {search : search}).
        then(res => setUsers(res.data))
    })

    const handleDelete = async (id) => {
        await axios.post("http://localhost:8000/delete", {id})
        nav("/");
    }
    
    const handleUpdate = (id) => {
        nav(`/update/${id}`);
    }

    return ( 
        <div>
            {users.length == 0 ? <h1>User {search} not Found</h1> :
                <div>
                    {users.map((u, i) => {
                        return(
                            <div key={i} className="card p-3 m-auto mt-5" style={{width:"20rem"}}>
                                <h3>{u.nom}</h3>
                                    <b>{u.email}</b>
                                <h3>{u.telephone}</h3>
                                <div className="w-100 p-3">
                                    <button className="btn btn-success w-50" onClick={() => handleUpdate(u.code)}>Update</button>
                                    <button className="btn btn-danger w-50 m-1" onClick={() => handleDelete(u.code)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
     );
}

export default Search;