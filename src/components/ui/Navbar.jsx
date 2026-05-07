import { Code2, Crown, Gamepad2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex  font-press items-center w-full border-b-secondary border-b p-5 fixed inset-x-0 top-0 bg-background z-50 justify-between ">
            <NavLink to="/">
                <span className="text-white font-press font-bold text-sm tracking-widest uppercase">
                    GameExplorer
                </span>
            </NavLink>

            <div className="flex items-center gap-10 ">
                <ul className="flex  text-[10px] items-center gap-5 justify-center">
                    <li>
                        <NavLink
                            className={"flex items-center gap-2 p-3"}
                            to="/games"
                        >
                            <Gamepad2 size={16} /> Games
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={"flex items-center gap-2 p-3"}
                            to="/creators"
                        >
                            <Crown size={16} /> Creators
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={"flex items-center gap-2 p-3"}
                            to="/developpers"
                        >
                            <Code2 size={16} /> Developers
                        </NavLink>
                    </li>
                </ul>
                <img
                    className="size-10 rounded-lg"
                    src="/user-icon.jpg"
                    alt=""
                />
            </div>
        </nav>
    );
};

export default Navbar;
