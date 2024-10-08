import "../output.css";
import Button from "./Button.jsx";

function HeroSection() {
  return (
    <section className="min-h-screen px-6 py-10 lg:py-16 lg:px-16 xl:px-20 2xl:px-28">
      <div
        className="border border-white rounded-lg min-h-screen lg:min-h-[50vh] 2xl:min-h-[60vh] flex flex-col items-center justify-center gap-9 py-16 text-center
         lg:flex-row lg:justify-between lg:items-center lg:px-14 2xl:px-52"
      >
        <div className="lg:flex-1 lg:text-left">
          <h1 className="text-white font-mono font-extrabold text-8xl sm:text-9xl xl:text-10xl">
            xBot
          </h1>
        </div>
        <div className="flex flex-col items-center gap-9 lg:items-end lg:flex-1">
          <h3 className="text-white font-sans font-normal text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
            Text Generation.
          </h3>
          <h3 className="text-white font-sans font-normal text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
            Next Generation.
          </h3>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-6">
            <Button text="Log in" className="lg:text-2xl 2xl:text-3xl"/>
            <Button text="Sign In" className="lg:text-2xl 2xl:text-3xl" />
          </div>
        </div>
      </div>
      <p className="text-white font-sans font-light text-sm sm:text-lg mt-4 text-center">
        <i>Made by Xynil Jhed Lacap</i>
      </p>
    </section>
  );
}

export default HeroSection;