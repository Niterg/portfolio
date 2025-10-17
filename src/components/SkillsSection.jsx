const SkillsSection = ({ skills }) => {
    return (
        <div className="flex flex-col gap-10 lg:px-10 md:p-5 -mt-5 pb-10 ">
            <div className="lg:text-3xl text-2xl px-10">
                {skills.map((skill, index) => (
                    <div key={index} className="g-5">
                        <div className="lg:text-5xl/[1.875rem] text-3xl my-2 text-orange-500">
                            <span className={`relative inline-block `}>
                                <span className="relative z-10"> <h5>{skill.name}</h5></span>
                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 ease-in-out hover:w-full"></span>
                            </span>
                        </div>
                        <div className="text-xl lg:text-3xl text-end ">
                            {skill.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;

// In your component



