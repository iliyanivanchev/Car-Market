import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section id="login">
            <div className="container">
                <form id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr />

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text" />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />
                    <input type="submit" className="registerbtn" value="Login" />
                </form>
                <div className="signin">
                    <p>Dont have an account?
                        <Link to="/register">Sign up</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
}