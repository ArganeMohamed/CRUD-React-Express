import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Update() {
    const { iduser } = useParams();
    const [user, setUser] = useState({});
    const [newdata, setNewData] = useState({
        nom: null,
        email: null,
        telephone: null,
    });

    const nav = useNavigate();

    useEffect(() => {
        axios.post("http://localhost:8000/single", { code: iduser }).then((res) => setUser(res.data[0]));
    }, [iduser]);

    useEffect(() => {
        setNewData({
            nom: user.nom || "",
            email: user.email || "",
            telephone: user.telephone || "",
        });
    }, [user]);

    const obj = { nom: newdata.nom, email: newdata.email, telephone: newdata.telephone, code: iduser };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/update", obj).then(() => nav("/"));
    };

    return (
        <div className="container">
            {Object.keys(user).length === 0 ? (
                <h1>User Not Found</h1>
            ) : (
                <div>
                    <h1>Update User: {user.nom}</h1>
                    <form className=" w-75 m-auto mt-5" onSubmit={(e) => handleSubmit(e)}>
                        
                        <label className="form-label">Nom</label>
                        <input className="form-control text-center" type="text" onChange={(e) => setNewData({ ...newdata, nom: e.target.value })} value={newdata.nom} />

                        <label className="form-label">E-mail</label>
                        <input className="form-control text-center" type="email" onChange={(e) => setNewData({ ...newdata, email: e.target.value })} value={newdata.email} />

                        <label className="form-label">Telephone</label>
                        <input className="form-control text-center" type="text" onChange={(e) => setNewData({ ...newdata, telephone: e.target.value })} value={newdata.telephone} />

                        <input type="submit" value="Update" className="mt-2 btn btn-primary" />
                    
                    </form>
                </div>
            )}
        </div>
    );
}

export default Update;
