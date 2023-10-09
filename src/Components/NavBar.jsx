import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between pt-10 pb-5 xl:px-32 lg:px-18 px-10 bg-white sticky top-0 z-20 border-b-2 border-gray-200">
      <div className="text-3xl font-bold tracking-wider">A+ Studio</div>
      <div className="xl:flex lg:flex md:flex flex-row xl:gap-16 lg:gap-10 md:gap-5 hidden">
        <Link
          className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300"
          to="/"
        >
          Home
        </Link>
        <Link className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300" to="/">
          What We Do
        </Link>
        <Link className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300" to="/">
          Service
        </Link>
        <Link className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300" to="/">
          Project
        </Link>
        <Link className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300" to="/">
          Blog
        </Link>
        <Link className="text-xl transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 underline-offset-4 duration-300" to="/">
          Contact
        </Link>
      </div>
    </nav>
  );
};
