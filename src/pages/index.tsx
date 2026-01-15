import { Background } from "@/components/Background";
import { config } from "@/utils/config";
export default function Main() {
	return (
		<Background>
			 <div className="flex min-h-screen items-center justify-center px-6">
        <div className="relative text-center select-none">
          <div className="absolute -top-28 md:-top-40 left-1/2 -translate-x-1/2 text-sm md:text-base text-white hover:text-white transition-colors text-glow">
            	<a href={config.links.sobre} target="_blank" rel="noreferrer">
              sobre
            </a>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-glow">
            {config.name}
          </h1>
          <div className="absolute -left-36 sm:-left-44 md:-left-64 top-1/2 -translate-y-1/2 text-sm md:text-base text-white hover:text-white transition-colors text-glow">
            <a href={config.links.foto} target="_blank" rel="noreferrer">
              foto
            </a>
          </div>
          <div className="absolute -right-36 sm:-right-44 md:-right-64 top-1/2 -translate-y-1/2 text-sm md:text-base text-white hover:text-white transition-colors text-glow">
		  <a href={config.links.video} target="_blank" rel="noreferrer">
			  video
		  </a>
          </div>
          <div className="absolute left-1/2 translate-x-[-50%] mt-28 md:mt-40 w-max text-sm md:text-base text-white hover:text-white transition-colors text-glow">
            <a href={config.links.texto} target="_blank" rel="noreferrer">
              texto
            </a>
          </div>
        </div>
      </div>
		</Background>
	);
}