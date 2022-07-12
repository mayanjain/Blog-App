import {Box,TextField,Button,styled,Typography} from '@mui/material'
import { useState } from 'react'
import { API } from '../../service/api.js'

const Component = styled(Box)`
    width: 360px;
    margin: auto;
    // display: flex;
    box-shadow: 2px 2px 5px 2px rgb(0,0,0,0.2);
    margin-top: 40px;
`

const Image = styled("img")({
    width: '120px',
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0 0'
})

const Wrapper = styled(Box)`
    padding: 20px;
    display: flex;
    // align-items: center;
    // justify-conent: center;
    // flex-direction: column;
    flex: 1;
    flex-direction: column;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: red;
    margin-top: 10px;
    font-weight: 600;
`

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error,setError] = useState('');

    const toggleLogin = () => {
        account==='login'?toggleAccount('signup'):toggleAccount('login');
    }

    const onChangeInput = (e) =>{
        setSignup({...signup, [e.target.name]:e.target.value});
    }

    const signupUser = async() =>{
        API.userSignup(signup)
        // console.log(response);
        // if(response){
        //     console.log('success');
        //     setError("");
        //     setSignup(signupInitialValues);
        //     toggleAccount('login');
        // }
        // else{
        //     setError('Something went wrong! Try again later.');
        // }
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account==='login'?
                    <Wrapper>
                        <TextField style={{margin:'5px'}} variant='standard' label="Enter Username"></TextField>  
                        <TextField style={{margin:'5px'}} variant='standard' label="Enter Password"></TextField>

                        {error && <Error>{error}</Error>}

                        <Button style={{margin:'15px 5px'}}variant='contained'>Login</Button>
                        <Typography>OR</Typography>    
                        <Button style={{margin:'15px 6px',boxShadow:'1px 1px 5px 0px rgb(0,0,0.3)'}} onClick={()=>toggleLogin()}>Create an account</Button>
                    </Wrapper>  
                    :
                    <Wrapper>
                        <TextField style={{margin:'5px'}} variant='standard' name='name' label="Enter Name" onChange={(e)=>onChangeInput(e)}></TextField>
                        <TextField style={{margin:'5px'}} variant='standard' name='username' label="Enter Username" onChange={(e)=>onChangeInput(e)}></TextField>  
                        <TextField style={{margin:'5px'}} variant='standard' name='password' label="Enter Password" onChange={(e)=>onChangeInput(e)}></TextField>
                        
                        {error && <Error>{error}</Error>}

                        <Button style={{margin:'15px 6px',boxShadow:'1px 1px 5px 0px rgb(0,0,0.3)'}} onClick={()=>signupUser()} >Sign Up</Button>
                        <Typography>OR</Typography>    
                        <Button  style={{margin:'15px 5px'}}variant='contained' onClick={()=>toggleLogin()}>Already have an account</Button>
                    </Wrapper>
                }    
            </Box>
        </Component>
    )
}

export default Login;