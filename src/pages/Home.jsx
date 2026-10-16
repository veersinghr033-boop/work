import { heroImage } from "../assets/heroImages";

function Home() {
    return (
        <main>

            {/* Hero */}
            <section
                id="home"
                className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950"
            >

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url('${heroImage}')`,
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Orange Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 lg:px-8">

                    <div className="max-w-3xl">

                        {/* Small Heading */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-orange-500" />

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                                Quality • Strength • Precision
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                            Built With
                            <span className="block text-orange-500">
                                Strength.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                            Premium stainless steel products and precision fabrication
                            solutions built for residential, commercial and industrial
                            projects.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                            <a
                                href="#products"
                                className="rounded-lg bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-600"
                            >
                                Explore Products
                            </a>

                            <a
                                href="#contact"
                                className="rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                            >
                                Request a Quote
                            </a>

                        </div>

                        {/* Stats */}
                        <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-7">

                            <div>
                                <p className="text-3xl font-black text-white">
                                    20+
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-black text-white">
                                    500+
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-black text-white">
                                    100%
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                    Quality
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Bottom Scroll Indicator */}
                <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                        Scroll
                    </span>

                    <div className="h-10 w-[1px] bg-gradient-to-b from-orange-500 to-transparent" />
                </div>

            </section>

        </main>
    );
}

export default Home;