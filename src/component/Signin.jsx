const SignIn = () => {
    return ( 
        <form>
                <div className="form__control">
                    <input className="input" type="text" placeholder="Email" />
                    </div>
                <div className="form__control">
                    <input className="input" type="text" placeholder="Password" />
                    </div>
                <div className="control_penal">
                <label>
                    <input type="checkbox" name="Check 1"/> Remember me
                </label>
                <a href="*">Forgot Password?</a>
            </div>
            <div className="btn1">
                <button>Log in</button>
            </div>
            
           
        </form>
     );
}
 
export default SignIn;