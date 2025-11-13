export default function Contact() {
    return (
        <section id="contact" className="py-12 sm:py-16 bg-base-200">
            <div className="flex w-full flex-col">
                <div className="divider divider-center text-2xl font-bold text-primary">Get In Touch</div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information Section */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-base sm:text-lg opacity-80 mb-6">
                                I'm always open to discussing new opportunities, interesting projects, 
                                or potential collaborations. Whether you're a recruiter looking for talent 
                                or a fellow developer wanting to connect, I'd love to hear from you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-1">Email</h3>
                                    <a href="mailto:your.email@example.com" className="text-primary hover:text-primary-focus transition-colors">
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-1">LinkedIn</h3>
                                    <a 
                                        href="https://www.linkedin.com/in/cecilia-nieves-348732164/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-focus transition-colors"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-1">GitHub</h3>
                                    <a 
                                        href="https://github.com/Ceci122" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-focus transition-colors"
                                    >
                                        View My Work
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-sm opacity-80">
                                <strong>Response Time:</strong> I typically respond within 24-48 hours. 
                                For urgent matters, please reach out via LinkedIn.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body p-6 sm:p-8">
                            <h3 className="card-title text-xl sm:text-2xl mb-2">Send a Message</h3>
                            <p className="text-sm opacity-70 mb-6">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                            
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                // Form submission logic can be added here
                                alert('Thank you for your message! I will get back to you soon.');
                            }}>
                                {/* Name */}
                                <div className="form-control">
                                    <label htmlFor="name" className="label">
                                        <span className="label-text font-semibold">Full Name <span className="text-error">*</span></span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="input input-bordered w-full"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label htmlFor="email" className="label">
                                        <span className="label-text font-semibold">Email Address <span className="text-error">*</span></span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john.doe@company.com"
                                        className="input input-bordered w-full"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                {/* Company (Optional) */}
                                <div className="form-control">
                                    <label htmlFor="company" className="label">
                                        <span className="label-text font-semibold">Company / Organization</span>
                                        <span className="label-text-alt opacity-60">Optional</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Acme Inc."
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="form-control">
                                    <label htmlFor="subject" className="label">
                                        <span className="label-text font-semibold">Subject <span className="text-error">*</span></span>
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="select select-bordered w-full"
                                        required
                                        aria-required="true"
                                    >
                                        <option value="">Select a subject...</option>
                                        <option value="job-opportunity">Job Opportunity</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="question">General Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="form-control">
                                    <label htmlFor="message" className="label">
                                        <span className="label-text font-semibold">Message <span className="text-error">*</span></span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your opportunity or how I can help..."
                                        className="textarea textarea-bordered h-32 resize-none"
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="form-control mt-6">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary w-full text-base"
                                        aria-label="Submit contact form"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>

                                <p className="text-xs text-center opacity-60 mt-4">
                                    By submitting this form, you agree to be contacted via the provided email address.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}