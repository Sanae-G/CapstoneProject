import { useNavigate } from 'react-router-dom';

function CreatePage() {

    const navigate = useNavigate();

    function handleClick(){

        navigate("/");
    }
 
    return (
        <>
        <h1>CreatePage</h1>
        <button onClick={handleClick}>Go back to Homepage</button>
        </>
    );
  }
  
  export default CreatePage;