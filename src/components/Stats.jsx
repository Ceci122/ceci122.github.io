// GH contributions + language charts
export default function Stats() {
    return (
        <section id="stats" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-center text-2xl font-bold text-secondary">Stats</div>
            </div>
            <div className="my-12">
                {/* Placeholder for stats content */}
                <a href="https://github.com/Ceci122/github-readme-stats">
                <img height={200} align="center" src="https://github-readme-stats.vercel.app/api?username=Ceci122" />
                </a>
                <a href="https://github.com/Ceci122/convoychat">
                <img height={200} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=Ceci122&layout=compact&langs_count=8&card_width=320" />
                </a>

            </div>
        </section>
    )
}