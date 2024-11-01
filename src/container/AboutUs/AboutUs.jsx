import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="G_overlay" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">O Nas</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					Nasza restauracja to miejsce, w którym pasja do wyjątkowych smaków
					łączy się z niepowtarzalną atmosferą. Wierzymy, że każde danie powinno
					być podróżą przez aromaty i tekstury, które zostają w pamięci na
					długo. Nasz zespół szefów kuchni tworzy potrawy z najwyższą dbałością
					o każdy szczegół, używając tylko starannie wyselekcjonowanych
					składników.
				</p>
				<button type="button" className="custom__button">
					Dowiedz Się Więcej
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Historia</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					Historia naszej restauracji sięga pokoleń – od skromnych początków, po
					obecny status jednego z najbardziej uznanych lokali w okolicy. Nasze
					korzenie tkwią w tradycji, a pasja do kulinarnego rzemiosła
					przekazywana jest z pokolenia na pokolenie. Dziś łączymy klasykę z
					nowoczesnością, by oferować naszym gościom doznania, które
					przekraczają oczekiwania.
				</p>
				<button type="button" className="custom__button">
					Dowiedz Się Więcej
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
