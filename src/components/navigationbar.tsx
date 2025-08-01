export default function NavigationBar() {
    return (
        <div className="px-5 py-5 bg-react-lightgray text-white w-[100%] space-x-10 fixed flex justify-center">
            <div className="flex flex-row w-fit space-x-10">
                <a href="#aboutme">About Me</a>
                <a href="#talents">Talents</a>
                <a href="#projects">Projects</a>
            </div>
        </div>
    );
}
