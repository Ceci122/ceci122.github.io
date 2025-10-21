import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <section id="blog" className="py-12 bg-gray-100">
        <article className="prose lg:prose-xl">
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="/JR_Programmer.jpg"
                    alt="Coding Illustration" />
                </figure>
             <div className="card-body">
                <h2 className="card-title">My Journey to Becoming a Software Engineer</h2>
                <p>
                Transitioning from IT Professional to Software Engineer has been a challenging yet rewarding journey.
                It all started with a desire to create something more than just maintaining systems and networks.
                I wanted to build applications that could solve real-world problems and make a difference.
                </p>
                <div className="card-actions justify-end">
                    <Link to="/blog/my-journey" className="btn btn-primary">Read More</Link>
                </div>
             {/* <p>
                I knew I wanted to upgrade from my (almost embarrasing) basic GitHub portfolio.
                Plus, it would a awesome to be able to see my growth and be able to showcase that
                in hopes to I dunno maybe inspire others like me. Transitioning from being an <italics>
                IT Professional</italics> (and feeling stuck in it) to Software Engineer felt scary
                but in a good way. In a way that both challenged me and gave me motivation to learn.
                I had always been interested in designing apps and web sites. Ever since I created my Tumblr.
                That motivation and curiosity has motivated me to keep going no matter how overwhelming
                or scary it felt.
             </p>
            <h2>The How?</h2>
            <p>
                So I knew I had to start with the basics. Which framework and library was I going to use?
                Which plugin? Which theme? How was the file tree structure going to look like? Is it going
                to be SPA, like most Web Devs do, and all that good jazz. But no I wanted to be different
                I want to create a hybrid of both SPA and multi-page (React routing). 
            </p> */}
                </div>
            </div>
        </article>
        </section>
    );
}