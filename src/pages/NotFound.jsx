import { useNavigate } from "react-router-dom";

function NotFound(){
    const nav = useNavigate();

    function handleClick() {
        nav('/')
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
            textAlign: 'center'
          }}>
            <h1>404 Not Found</h1>
            <button onClick={handleClick}>Go Back</button>
          </div>
    )
}

export default NotFound;