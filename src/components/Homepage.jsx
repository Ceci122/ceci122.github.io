// React + Tailwind CSS + DaisyUI + Bootstrap
export default function About() {
    return (
        <section id="about" className="py-12 sm:py-16 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Profile Image */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
                <img
                src="/profilepic.jpg"
                alt="Portrait of Cecilia Ramirez"
                className="w-28 sm:w-36 md:w-44 lg:w-52 rounded-full shadow"
                />
            </div>
            {/* About Text */}
            <div className="md:col-span-8 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                    Software Engineer | IT Professional. Eager to learn more.
                </h1>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base opacity-90">
                    I am a creative web developer with a passion for creating appealing and
                    functional websites. My journey in web development started with a simple
                    <span className="italic"> 'Hello world'</span> HTML page. Since then, I have 
                    sharpened my skills in HTML,
                    CSS, JavaScript and Python, and I am always eager to learn more. 🌱
                </p>
                <p className="text-sm sm:text-base opacity-90">
                    In my free time, I enjoy exploring new coding challenges, hiking, biking,
                    reading, traveling, and gaming.
                </p>
                </div>
            </div>
            </div>
            </section>
        );
    }