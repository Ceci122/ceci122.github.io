// Tell my story about how I got into coding, my journey, and what I want to do with it.
// Basically my how, when, why of coding. Like the landing page of my portfolio.
// Also add a stats section with GitHub stats, languages, etc.
// Maybe a fun fact or two about me.
// React + Tailwind CSS + DaisyUI + Bootstrap
export default function About() {
    return (
        <section id="about" className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Profile Image */}
            <div className="md:col-span-3 flex justify-center">
                <img
                src="/profilepic.jpg"
                alt="About Me"
                className="img-fluid"
                style={{ maxWidth: "190px", borderRadius: "50%" }}
                />
            </div>
            {/* About Text */}
            <div className="md:col-span-9">
                <h1 className="text-3xl font-bold mb-4">
                    Software Engineer | IT Professional. Eager to learn more.
                </h1>
                <p className="mb-4">
                    I am a creative web developer with a passion for creating appealing and
                    functional websites. My journey in web development started with a simple
                    <span className="italic"> 'Hello world'</span> HTML page. Since then, I have 
                    sharpened my skills in HTML,
                    CSS, JavaScript and Python, and I am always eager to learn more. 🌱
                </p>
                <p>
                    In my free time, I enjoy exploring new coding challenges, hiking, biking,
                    reading, traveling, and gaming.
                </p>
                </div>
            </div>
            </div>
            </section>
        );
    }