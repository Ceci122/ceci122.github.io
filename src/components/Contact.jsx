export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-gray-100">
        <div className="flex w-full flex-col">
            <div className="divider divider-center text-2xl font-bold text-success">Contact</div>
            </div>
            <div className="my-12">
            <div className="card bg-base-100 shadow-xl p-6 max-w-lg">
                <h3 className="text-xl font-semibold mb-4">Contact me</h3>
                <form className="space-y-4">
                <div>
                <label htmlFor="Email" className="label">
                    <span className="label-text">Email address</span>
                </label>
                    <input
                    type="email"
                    id="eemail"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    />
                    <p className="text-sm text-gray-500 mt-1">
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
                    <input type="checkbox" className="checkbox" />
                        <span className="label-text">Verify you're not a bot.</span>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
                </form>
                </div>
            </div>
    </section>
    )
}