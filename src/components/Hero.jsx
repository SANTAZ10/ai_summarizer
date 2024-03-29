import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex pt-3 mb-10 w-full justify-between items-center">
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />
        <button className="black_btn" type="button" onClick={() => window.open('https://github.com/SANTAZ10/ai_summarizer')}>
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Sumarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
      Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
