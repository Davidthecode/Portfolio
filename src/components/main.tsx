import { projects, blogs } from "../data";

const Main = () => {
    return (
        <main className="flex flex-col my-12">
            {/* hero */}
            <section className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Hi, I'm David</h1>
                <p className="opacity-70">
                    I enjoy building robust software systems that scale. As a full-stack developer, I’m passionate about diving into all aspects of web development. Currently, I'm exploring distributed systems, real-time updates, and performance optimization while contributing to open-source projects I care about.
                </p>
                <p className="opacity-70">Feel free to message me on Twitter or Discord!</p>
            </section>

            {/* Projects */}
            <section className="flex flex-col gap-4 mt-8">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="flex flex-col flex-wrap gap-4 sm:gap-3 sm:flex-row items-center justify-between opacity-80">
                    {projects.map((project) => (
                        <article className="group flex flex-col gap-2 border px-4 py-3 rounded-md w-full sm:w-[49%]" key={project.link}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h3 className="font-medium group-hover:text-[#6161FF] group-hover:underline">{project.title}</h3>
                                <p className="text-sm opacity-80">{project.about}</p>
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* Blog */}
            <section className="flex flex-col gap-5 mt-10">
                <h2 className="text-2xl font-semibold">Blog</h2>
                <ul className="space-y-5">
                    {blogs.map((blog) => (
                        <li key={blog.link} className="flex flex-col">
                            <a
                                href={blog.link}
                                className="opacity-80 hover:text-[#6161FF] hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {blog.title}
                            </a>
                            <p className="opacity-40 text-sm">
                                {blog.preview}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;
