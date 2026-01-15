import { Background } from "@/components/Background";
import { config } from "@/utils/config";
export default function Main() {
	return (
		<Background>
			 <div className="flex min-h-screen items-center justify-center px-6">
				<div className="relative text-center select-none">
					<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-glow">
						{config.name}
					</h1>
					<div className="mt-6 flex flex-col items-center gap-3 md:mt-0">
						<div className="text-sm md:text-base text-white hover:text-white transition-colors text-glow md:absolute md:-top-40 md:left-1/2 md:-translate-x-1/2">
							<a href={config.links.sobre} target="_blank" rel="noreferrer">
								sobre
							</a>
						</div>
						<div className="text-sm md:text-base text-white hover:text-white transition-colors text-glow md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-64">
							<a href={config.links.foto} target="_blank" rel="noreferrer">
								foto
							</a>
						</div>
						<div className="text-sm md:text-base text-white hover:text-white transition-colors text-glow md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-64">
							<a href={config.links.video} target="_blank" rel="noreferrer">
								vídeo
							</a>
						</div>
						<div className="w-max text-sm md:text-base text-white hover:text-white transition-colors text-glow md:absolute md:left-1/2 md:translate-x-[-50%] md:mt-40">
							<a href={config.links.texto} target="_blank" rel="noreferrer">
								texto
							</a>
						</div>
					</div>
				</div>
			</div>
		</Background>
	);
}