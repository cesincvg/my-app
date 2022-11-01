import {useState} from "react";


export default function LoginPage(props){
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  function onSubmit(e){
    e.preventDefault();
    currUser.username = username;
    props.toggleState();

    navigate('/account'); //must match what is in your router
  }
}
