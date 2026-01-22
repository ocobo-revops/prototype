import type React from 'react';
import { Button } from '../../atoms';
import { DashboardIllustration } from '../../illustrations';
import HeroSplit from '../../layout/HeroSplit';
import { Container } from '../../organisms';

const HeroSection: React.FC = () => {
	return (
		<Container className="pt-40 pb-24 relative overflow-hidden">
			<HeroSplit gap={16} className="relative z-10">
				<HeroSplit.Content>
					<h1 className="font-display text-4xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight opacity-0 animate-hero-reveal [animation-delay:0.1s]">
						L'architecture
						<br />
						qui fait tenir
						<br />
						<span className="text-gray-400">votre croissance.</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium max-w-xl opacity-0 animate-hero-reveal [animation-delay:0.2s]">
						Voici comment nous transformons la croissance en{' '}
						<span className="underline decoration-ocobo-yellow decoration-[3px] underline-offset-[6px]">
							expérience simple, fluide et pilotable.
						</span>
					</p>

					<div className="mb-14 py-1.5 opacity-0 animate-hero-reveal [animation-delay:0.3s]">
						<p className="font-display text-lg md:text-xl font-normal text-ocobo-dark leading-tight tracking-tight">
							Le RevOps n'est pas un outil : c'est{' '}
							<span className="font-bold">
								la science qui organise votre revenu.
							</span>
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-6 items-start opacity-0 animate-hero-reveal [animation-delay:0.4s]">
						<Button variant="primary" to="/contact">
							Rencontrer un architecte
						</Button>
					</div>
				</HeroSplit.Content>

				<HeroSplit.Media className="flex justify-center lg:justify-end items-center">
					<DashboardIllustration />
				</HeroSplit.Media>
			</HeroSplit>
		</Container>
	);
};

export default HeroSection;
