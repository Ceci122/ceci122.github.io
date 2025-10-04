// GH contributions + language charts
export default function Stats() {
    return (
        <section id="stats" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-center">Stats</div>
            </div>
            <div className="my-12">
                {/* Placeholder for stats content */}
                <a href="https://github.com/Ceci122">
                    <img align="center" src="https://github-readme-stats.vercel.app/api?username=Ceci122&show_icons=true&theme=radical" />
                </a>
                <a href="https://github.com/Ceci122">
                    <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=Ceci122&layout=compact&langs_count=6&theme=radical" />
                </a>

            </div>
        </section>
    )
}