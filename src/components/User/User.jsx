import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} = user;
    const userStyle ={
        border: '2px solid yellow',
        padding:'5px',
        borderRadius:'20px'
    }

    const navigate = useNavigate();
    const handleShowDetail = () =>{
        navigate(`/user/${id}`);
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
            <br />
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default User;