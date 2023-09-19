import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const users = useLoaderData();
    const {name,id} = users;
    
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1); // -1 dile 1 step pisone jabe.
    }

    const {userId} = useParams();
    console.log(userId);

    return (
        <div>
            <h2>Details About user: {id} , name: {name}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;