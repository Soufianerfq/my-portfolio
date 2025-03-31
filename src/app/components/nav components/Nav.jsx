export default function Nav({ aboutme, portfolio, skills }){
    return (
        <nav className=" mt-[10px] mr-[20px] flex  justify-around">
            <button
                className="not-Clicked"
                onClick={() =>
                    aboutme.current?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                About me
            </button>
            <button
                className="not-Clicked"
                onClick={() =>
                    skills.current?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                Skills
            </button>
            <button
                className="not-Clicked"
                onClick={() =>
                    portfolio.current?.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            >
                Portfolio
            </button>
        </nav>
    )
}