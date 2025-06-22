import { projects, blogs, skills, contacts } from "../data";
import ThemeToggle from "./themeToggle";
import { MoveUpRight } from "lucide-react";

const Main = () => {
    return (
        <main className="flex flex-col pt-12 pb-6">
            {/* hero */}
            <section className="flex flex-col ">
                <h1 className="text-xl font-semibold">About</h1>
                <p className="opacity-50 text-sm">
                    I mess around with stuff that scales big, runs fast, and doesn’t flop over when you poke it.
                </p>
                <p>
                    <span className="opacity-50 text-sm">Feel free to message me on</span>
                    <span className="py-[3px] px-[10px] font-light rounded-3xl bg-[#F4F4F5] hover:bg-black  dark:bg-[#3F3F46] text-black text-[11px] w-fit ml-2">
                        <a href="https://twitter.com/DavidAjibola_" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            Twitter
                        </a>
                    </span>
                    <span className="opacity-50 text-sm"> or</span>
                    <span className="py-[3px] px-[10px] font-light rounded-3xl bg-[#F4F4F5] hover:bg-black dark:bg-[#3F3F46] text-black text-[11px] w-fit ml-2">
                        <a href="https://discordapp.com/users/1130889766666240111" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            Discord!
                        </a>
                    </span>
                </p>
            </section>

            {/* Projects */}
            <section className="flex flex-col gap-6 mt-16">
                <div className="flex flex-col items-center space-y-2">
                    <p className="bg-black dark:bg-[#3F3F46] text-white w-fit rounded-md py-1 px-3 text-sm">My Projects</p>
                    <h1 className="text-4xl font-bold text-center">Check out my latest work</h1>
                    <p className="text-center font-light text-lg opacity-50">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
                </div>
                <div className="flex flex-col justify-center flex-wrap gap-4 sm:gap-3 sm:flex-row items-center opacity-80 mt-3">
                    {projects.map((project) => (
                        <article
                            className="group flex flex-col gap-2 border border-gray-300 dark:border-gray-50/20 border-opacity-70 hover:shadow-sm px-4 py-3 rounded-md w-full sm:w-[49%] h-fit sm:h-[17rem]"
                            key={project.link}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-md w-full h-[30%] sm:h-[60%] object-cover"
                                    />
                                    <h3 className="font-medium mt-3">{project.title}</h3>
                                    <p className="text-sm opacity-70 mt-2">{project.about}</p>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* Blog */}
            <section className="flex flex-col gap-5 mt-10">
                <h2 className="text-2xl font-semibold">Blogs</h2>
                <ul className="space-y-5">
                    {blogs.map((blog) => (
                        <li key={blog.link} className="flex space-x-3 group">
                            <a
                                href={blog.link}
                                className="flex"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-col">
                                    <span className="opacity-80 group-hover:text-[#6161FF] group-hover:underline">{blog.title}</span>
                                    <p className="opacity-40 text-sm">
                                        {blog.preview}
                                    </p>
                                </div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-24 w-40 object-cover"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills */}
            <section className="text-xl font-semibold mt-8 flex flex-col space-y-2">
                <h2>Skills</h2>
                <div className="flex flex-wrap items-center gap-[6px]">
                    {skills.map((skill) => (
                        <div className="py-[1px] px-[10px] font-light rounded-3xl bg-[#F4F4F5] dark:bg-[#3F3F46] text-black dark:text-white text-[11px] w-fit">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="flex flex-col gap-4 mt-20">
                <div className="flex flex-col items-center space-y-2">
                    <p className="bg-black dark:bg-[#3F3F46] text-white w-fit rounded-md py-1 px-3 text-sm">Contact</p>
                    <h1 className="text-4xl font-bold text-center">Get in Touch</h1>
                    <p className="text-center font-light text-lg opacity-50">
                        Want to chat? Shoot me a dm
                        <span className="hover:underline text-[#6161FF] hover:text-[#3B82F6] mx-2">
                            <a href="https://twitter.com/DavidAjibola_" target="_blank" rel="noopener noreferrer">
                                on Twitter
                            </a>
                        </span>
                        to collaborate on artistic projects, bold ideas, or just to say hello.
                    </p>
                </div>
            </section>

            <section className="flex justify-between mt-14 border-t border-gray-100 border-opacity-70 dark:border-opacity-10 pt-2">
                <div className="flex flex-wrap items-center gap-[6px]">
                    {contacts.map((contact) => (
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center py-[2.5px] px-[10px] font-light rounded-3xl bg-[#efeff0] hover:bg-black hover:text-white dark:bg-[#3F3F46] dark:hover:bg-[#57575d] text-black dark:text-white text-[13px] w-fit"
                        >
                            <span>{contact.name}</span>
                            <span><MoveUpRight size={12} strokeWidth={1.5} /></span>
                        </a>
                    ))}
                </div>
                <ThemeToggle />
            </section>
        </main>
    );
};

export default Main;
