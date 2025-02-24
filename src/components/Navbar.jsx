import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="flex p-6 items-center justify-between">
            <a href="#" className="w-42">
                <img src={logo} alt="" />
            </a>
            <ul id="menu-bar" className="hidden lg:flex">
                <li id="menu-item">Features</li>
                <li id="menu-item">Pricing</li>
                <li id="menu-item">What's New</li>
            </ul>
            <div id="auth-container">
                <button className="hidden lg:block">Login</button>
                <button className="cursor-pointer font-bold text-xl text-black bg-yellow-400 text px-6 py-3 rounded-xl">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
