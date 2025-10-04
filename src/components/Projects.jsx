// Portfolio projects section
export default function Projects() {
    return (
        <section id="projects" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-center">Projects</div>
            </div>
            {/* Financial Dash App */}
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="/nextjs-financial-dashboard.png"
                alt="Financial Dashboard Screenshot" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Financial Dashboard Application</h2>
                <p>Developed with Next.js. Visualize your financial data with interactive charts and graphs.</p>
                <div className="card-actions justify-end">
                <a className="btn btn-soft" href="https://nextjs-financial-dashboard-cecilia-ramirezs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
                <a className="btn btn-soft btn-secondary" href="https://github.com/Ceci122/nextjs-financial-dashboard" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            </div>
            {/* Pokemon API Integration Project */}
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="/pokemon-api-integration.png"
                alt="Pokemon API Integration Screenshot" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Pokemon API Integration Project - Coming Soon!</h2>
                <p>Developed with Next.js. Explore the world of Pokemon with real-time data from the PokeAPI.</p>
                <div className="card-actions justify-end">
                <a className="btn btn-soft" href="https://nextjs-financial-dashboard-cecilia-ramirezs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
                <a className="btn btn-soft btn-secondary" href="https://github.com/Ceci122/nextjs-financial-dashboard" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            </div>
            {/* TicTacToe Game */}
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="/tictactoe-react.png"
                alt="Tic Tac Toe Game Screenshot" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">A simple Tic Tac Toe game built with React. Play against a friend in the browser!</h2>
                <p>Developed with React. Enjoy a classic game with a modern twist.</p>
                <div className="card-actions justify-end">
                <a className="btn btn-soft" href="https://Ceci122.github.io/tictactoeReact" target="_blank" rel="noopener noreferrer">View Live</a>
                <a className="btn btn-soft btn-secondary" href="https://github.com/Ceci122/tictactoeReact" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            </div>
        </section>
    )
}