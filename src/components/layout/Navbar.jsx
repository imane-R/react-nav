import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <NavLink to="/">MyApp</NavLink>
        <div className="flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}
