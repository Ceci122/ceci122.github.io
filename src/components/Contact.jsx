export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-gray-100">
        <div className="flex w-full flex-col">
            <div className="divider divider-center text-2xl font-bold text-success">Contact</div>
            </div>
            <div className="my-8 px-4 sm:px-0 flex justify-center">
            <div className="card bg-base-100 shadow-xl p-6 sm:p-8 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center">Contact me</h3>
                <form className="space-y-4">
                <div>
                <label htmlFor="email" className="label">
                    <span className="label-text">Email address</span>
                </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    required
                    aria-required="true"
                    />
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        We'll never share your email with anyone else.
                    </p>
                </div>

                <div>
                <label htmlFor="password" className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-2">
                    <input type="checkbox" className="checkbox" aria-label="Confirm not a bot" />
                        <span className="label-text">Verify you're not a bot.</span>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-full" aria-label="Submit contact form">
                    Submit
                </button>
                </form>
                </div>
            </div>
    </section>
    )
}