
const Register = () => {
    return (
        <div className="border bg-zinc-400">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl text-center mb-4">Please Register</h2>
                <form>
                    <input className="w-full h-8 mb-3 rounded-lg p-4 bg-white" type="email" name="email" placeholder="Enter your E-mail"  id="" /> <br />
                    <input className="w-full h-8 mb-3 rounded-lg p-4 bg-white" type="password" name="password"placeholder="Enter your password" id="" /><br />
                    <input className="w-full rounded-lg text-xl bg-purple-800 py-2 mb-6" type="submit" value="Register" />
                </form>

            </div>
        </div>
    );
};

export default Register;