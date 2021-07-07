import React,{useContext,useState} from 'react'
import './signup.css'
import ListContext from '../Context/Context'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Signup() {

    const [List, setList] = useContext(ListContext)

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        timezone: '',
        captcha: 'true'
      })

      const handleChange = (e) => {
        setState((prev) =>({   
          ...prev,
          [e.target.name] : e.target.value
        }))
      }


      const onclick =(e) =>{
        e.preventDefault()
        
        //const value = e.target.value;
        setList(previos=>([...previos,
         state]
         ))}

      

console.log(List);

    return (
        <div className="auth-inn">
    <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <header className="card-header">
          <h4 className="card-title mt-2">Sign-Up</h4>
        </header>
        <article className="card-body">
            <form onSubmit={onclick} >
            
            <div className="form-row">
            <div className="form-group ">
              <div className="col form-group">
                <label>First name </label>
                <input 
                type="text" 
                name="firstName" 
                value={state.firstName}
                onChange={handleChange}
               
                className="form-control" placeholder="First Name" />
              </div>
              <div className="col form-group">
                <label>Last name</label>
                <input 
                type="text" 
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                className="form-control" 
                placeholder=" Last Name" />
              </div>
              </div>
              </div>
            
            <div className="form-group">
            
              <label>Username</label>
              <input
                type="text"
                name="username" 
                value={state.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
            
              <label>Email</label>
              <input
                type="email"
                name="email" 
                value={state.email}
                onChange={handleChange}
                className="form-control"
                placeholder="example: hashtag@gmail.com"
              />
              <small className="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
              
            </div>

            <div className="form-row">
              
                <label>Password</label>
                <input
                  type="password"
                  name="password" 
                  value={state.password}
                  onChange={handleChange}
                 
                  className="form-control"
                  placeholder="Password"
                />
              
              
            </div>
            
            <div className="form-row">
              


            <label for="cars">Choose a Time Zone</label>
            
              <input
                type="text"
                name="timezone" 
                value={state.timezone}
                onChange={handleChange}
                className="form-control"
                placeholder="timezone"
              />





<div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"
                        name="captcha"
                        value={state.captcha}
                        onChange={handleChange}
                        id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Captcha</label>
                    </div>  
              </div>
            
            
            <div className="form-group">
            
              <button type="submit" className="btn btn-primary btn-block">
                Add
              </button>
              
              
            </div>
            
           
            <small className="text-muted"></small>
            
          </form>
          
          
          </article>
          </div>
          </div>
          </div>
          </div>
    )
}

export default Signup
