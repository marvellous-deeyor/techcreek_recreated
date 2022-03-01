const Register = () => {
    return ( 
        <form>
        <div className="form__control">
            <input className="input" type="text" placeholder="First Name, Last Name" />
        </div>

        <div className="form__control">
            <input className="input" type="text" placeholder="email" />
        </div>

        <div className="form__control">
                <select className="input">
                    <option value>Please select.....</option>
                    <option value="enthusiast">Enthusiast</option>
                    <option value="service_professional">service professional</option>
                    <option value="Veteran">Veteran</option>
                </select>
            </div>
        
            <div className="form__control">
            <input className="input" type="text" placeholder="Passwword+" />
        </div>


    <div className="control_penal">
        <label>
            <input type="checkbox" name="Check 1"/> Remember me
        </label>
        <a href="*">Forgot Password?</a>
    </div>

    <div className="btn2">
        <button>Log in</button>
    </div>
   
</form>
     );
}
 
export default Register;