import './App.css';


function App() {

  return (
    <div className='log_main'>
    <h2 className='head'>Login Your Account</h2>
      <form>
        <input className='inpt1' id="u_name" type='text' placeholder='Email Id'></input>
        <p></p>
        <input className='inpt1' type='password' placeholder='Password'></input>
        <p></p>
        <button className='btn1' type='button' >Login</button>
        <p></p>
        <button className='btn2' type='button' >Signup</button>
        <p></p>

        <a className='link' href="www.google.com">Forgot password?</a>
       
      </form>
    </div>
  );
}

export default App;