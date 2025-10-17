const Introduction = () => {
    return (
        <div class="relative sticky h-screen bg-gradient-to-b from-orange-500 to-neutral-900 animate-fadeIn">
            <div class="flex flex-col  items-center justify-center gap-10 p-10">
                <div class="flex flex-col items-center justify-center gap-3 2xl:mt-9  ">
                    <h1 class="text-white lg:text-9xl text-8xl">Parag Niraula</h1>
                    <h4 class="text-neutral-800 text-center lg:text-5xl  font-semibold sm:mt-2 text-3xl">DevOps Engineer</h4>
                    <h4 class="text-white lg:text-3xl text-2xl items-center justify-center text-center">  AWS / Kubernetes / Terraform </h4>
                    <h4 class="text-white lg:text-4xl text-2xl">  Open to Remote</h4>
                </div>

            </div>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="w-10 h-16 border-3 border-white rounded-full flex justify-center items-start p-2">
                    <div class="w-1 h-3 bg-gradient-to-b from-neutral-500 to-orange-400 rounded-full animate-bounce">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Introduction;