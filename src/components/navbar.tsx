import animeImage from "../assets/anime-img.jpg";

const Navbar = () => {
  const links = [
    { name: "Github", href: "https://github.com/Davidthecode" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/david-ajibola" },
    { name: "Twitter", href: "https://twitter.com/DavidAjibola_" },
  ];

  return (
    <nav className="flex justify-between items-center">
      <a href="/">
        <img
          src={animeImage}
          alt="animeImage"
          className="w-10 h-10 rounded-full"
        />
      </a>
      <ul className="flex gap-4 text-sm">
        {links.map((link) => (
          <li key={link.name} className="hover:text-[#6161FF] hover:underline">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
