// GH contributions + language charts
export default function Stats() {
    return (
        <section id="stats" className="py-12 bg-gray-100">
            <div className="flex w-full flex-col">
            <div className="divider divider-center text-2xl font-bold text-secondary">Stats</div>
            </div>
            <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                <a href="https://github.com/Ceci122/github-readme-stats" aria-label="GitHub contribution stats">
                    <img className="w-[320px] sm:w-[380px] md:w-[420px] h-auto" src="https://github-readme-stats.vercel.app/api?username=Ceci122" alt="GitHub stats card" />
                </a>
                <a href="https://github.com/Ceci122/convoychat" aria-label="Top languages chart">
                    <img className="w-[320px] sm:w-[380px] md:w-[420px] h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=Ceci122&layout=compact&langs_count=8&card_width=320" alt="Top languages card" />
                </a>
            </div>
        </section>
    )
}