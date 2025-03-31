import { Home, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Layover = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const icons = [
    { id: "home", icon: Home, href: "/" },
    { id: "github", icon: Github, href: "https://github.com/Davidthecode" },
    { id: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/david-ajibola/" },
    { id: "twitter", icon: Twitter, href: "https://twitter.com/DavidAjibola_" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-2 py-2 px-4 bg-white border border-gray-200 rounded-full shadow-md transition-all duration-300 ease-in-out ${
          hoveredIcon ? "w-52" : "w-44"
        }`}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {icons.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="relative flex items-center justify-center w-9 h-9"
            onMouseEnter={() => setHoveredIcon(item.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`absolute inset-0 bg-gray-100 rounded-full scale-0 transition-transform duration-300 ${
                hoveredIcon === item.id ? "scale-100" : ""
              }`}
            />
            <div className="relative p-2">
              <item.icon size={17} className="text-gray-700" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Layover;