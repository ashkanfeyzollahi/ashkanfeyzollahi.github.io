import { Badge } from "./badges";
import { Button } from "./buttons";
import Technologies from "../technologies.svg";

export default function Header() {
    return (
        <div
            id="aboutme"
            className="app-header bg-react-lightgray h-[100vh] flex flex-col justify-center px-10 pt-20 pb-20 gap-y-20 border-b border-react-lightgray-border"
        >
            <div className="w-[100%] flex justify-center">
                <div className="max-w-[900px] flex">
                    <div className="flex flex-col gap-y-10 me-10">
                        <Badge>
                            Ashkan Feyzollahi &nbsp;&middot;&nbsp; Software
                            Developer
                        </Badge>
                        <h1 className="text-white text-[60px] leading-none">
                            Providing
                            <br></br>
                            the best
                            <br></br>
                            project experience
                        </h1>
                        <p className="text-slate-400 text-lg">
                            I'm a software developer with 5 years of experience
                            in Website and etc. Checkout my portfolio and
                            talents.
                        </p>
                        <Button>
                            <a href="#talents">View more</a>
                        </Button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <img
                            alt="technologies"
                            src={Technologies}
                            className="max-w-[100%] h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// 16:46
