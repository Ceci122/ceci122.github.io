// Portfolio projects section
export default function Projects() {
    return (
        <section id="projects" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-start">Projects</div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="public/nextjs-financial-dashboard.png"
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
        </section>
    )
}