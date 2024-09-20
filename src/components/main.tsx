const Main = () => {
    const blogs = [
        {
            title: "Custom hooks, Use Context, and States in React",
            preview: "One time, I ran into a problem in my React project and was working on it for a while..",
            link: "https://pulse-blog.vercel.app/@ajiboladavid0963/custom-hooks-use-context-and-states-in-react-mOwsn3iuCULl"
        },
        {
            title: "TypeScript vs JavaScript: What's the Difference?",
            preview: "TypeScript and JavaScript are two popular programming languages used in web development...",
            link: "https://pulse-blog.vercel.app/@ajiboladavid0963/typescript-vs-javascript-whats-the-difference-wCKZXFdGqvbX"
        },
        {
            title: "Building a serverless web application with React and Firebase",
            preview: "A serverless web application is a web application built using a serverless architecture...",
            link: "https://davidts.hashnode.dev/building-a-serverless-web-application-with-react-and-firebase"
        }
    ]

    return (
        <main className="flex flex-col my-12">
            {/* hero */}
            <section className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Hi, I'm David</h1>
                <p className="opacity-70">
                   I enjoy building robust software systems that scale. although i'm particular about front-end development, I enjoy diving into all aspects of web development. Currently, I'm digging into real-time updates and performance optimization while contributing to open-source projects I care about.
                </p>
                <p className="opacity-70">Feel free to message me on Twitter or Discord!</p>
            </section>

            {/* Projects */}
            <section className="flex flex-col gap-4 mt-8">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between opacity-80">
                    <article className="group flex flex-col gap-2 border px-4 py-3 rounded-md w-full sm:w-[49%]">
                        <a href="https://pulse-blog.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3 className="font-medium group-hover:text-[#6161FF] group-hover:underline">Pulse</h3>
                            <p className="text-sm opacity-80">A Medium-style blogging platform with rich text editor.</p>
                        </a>
                    </article>
                    <article className="group flex flex-col gap-2 border px-4 py-3 rounded-md w-full sm:w-[49%]">
                        <a href="https://taskmaster-pm.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3 className="font-medium group-hover:text-[#6161FF] group-hover:underline">TaskMaster</h3>
                            <p className="text-sm opacity-80">A modern, fast task management web-app for easy task management and collaboration.</p>
                        </a>
                    </article>
                </div>
            </section>

            {/* Blog */}
            <section className="flex flex-col gap-5 mt-10">
                <h2 className="text-2xl font-semibold">Blog</h2>
                <ul className="space-y-5">
                    {blogs.map((blog, index) => (
                        <li key={index} className="flex flex-col">
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
