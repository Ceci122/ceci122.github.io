import { useEffect, useRef } from "react";

export default function Projects() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollInterval = setInterval(() => {
            // smooth scroll
            const scrollAmount = Math.min(360, Math.floor(carousel.clientWidth * 0.8));
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });

            // if near the end, reset back to start
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                setTimeout(() => {
                    carousel.scrollTo({ left: 0, behavior: "smooth" });
                }, 800); // small pause before looping
            }
        }, 3000); // scroll every 3 seconds

        return () => clearInterval(scrollInterval);
    }, []);

    // Portfolio projects section
    return (
        <section id="projects" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-center text-2xl font-bold text-primary">
                Projects</div>
            </div>

            {/* auto-scrolling carousel */}
            <div 
            ref={carouselRef} 
            className="carousel carousel-center max-w-full p-4 sm:p-6 lg:p-8 space-x-4 sm:space-x-6 lg:space-x-8 bg-neutral rounded-box overflow-x-scroll scroll-smooth"
            >
            {/* Financial Dash App */}
            <div className="carousel-item">
                <div className="card bg-base-100 w-72 sm:w-80 md:w-96 shadow-sm">
                <figure>
                    <img
                    src="/nextjs-financial-dashboard.png"
                    alt="Financial Dashboard Screenshot" 
                    className="rounded-t-box w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Financial Dashboard Application</h2>
                    <p>
                        Developed with Next.js. Visualize your financial data with interactive charts and graphs.
                    </p>
                    <div className="card-actions justify-end">
                        <a 
                        className="btn btn-soft" 
                        href="https://nextjs-financial-dashboard-cecilia-ramirezs-projects.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            View Live
                        </a>
                        <a className="btn btn-soft btn-secondary" 
                        href="https://github.com/Ceci122/nextjs-financial-dashboard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>

            {/* Pokemon API Integration Project */}
            <div className="carousel-item">
                <div className="card bg-base-100 w-72 sm:w-80 md:w-96 shadow-sm">
                <figure>
                    <img
                    src="/Pokedex_demo.png"
                    alt="Pokemon Pokedex Demo Screenshot" 
                    className="rounded-t-box w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Pokemon API PokeDex Project</h2>
                    <p>
                        Developed with Vite + React + Tailwind + Bootstrap. Explore the world of Pokemon with real-time data from the PokeAPI.
                    </p>
                    <div className="card-actions justify-end">
                    <a 
                        className="btn btn-soft" 
                        href="https://ceci122.github.io/Pokemon-API-Demo/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Live
                    </a>
                    <a 
                        className="btn btn-soft btn-secondary" 
                        href="https://github.com/Ceci122/Pokemon-API-Demo/tree/main" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </a>
                    </div>
                </div>
                </div>
            </div>
                
            {/* TicTacToe Game */}
            <div className="carousel-item">
                <div className="card bg-base-100 w-72 sm:w-80 md:w-96 shadow-sm">
                <figure>
                    <img
                    src="/tictactoeReact.png"
                    alt="Tic Tac Toe Game Screenshot" 
                    className="rounded-t-box w-full object-cover"
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title">A simple Tic Tac Toe game built with React.</h2>
                <p>Developed with React. Enjoy a classic game with a modern twist.</p>
                <div className="card-actions justify-end">
                <a 
                className="btn btn-soft" 
                href="https://Ceci122.github.io/tictactoeReact" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    View Live
                </a>
                <a 
                className="btn btn-soft btn-secondary" 
                href="https://github.com/Ceci122/tictactoeReact" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    Source Code
                </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}
