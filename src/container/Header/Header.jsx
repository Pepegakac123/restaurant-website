import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Odkryj Nowy Smak" />
			<h1 className="app__header-h1">Klucz do Wykwintnej Kuchni</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Usiądź wygodnie i zanurz się w niezapomnianym smaku. Finezja i jakość w
				każdym kęsie. Połączenie klasyki i nowoczesności, tworzące wyjątkowe
				doznania kulinarne. Znajdź swoją ulubioną potrawę i doświadcz kuchni,
				która zachwyca smakiem i wyrafinowaniem.{" "}
			</p>
			<button type="button" className="custom__button">
				Odkryj Menu
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.welcome} alt="header_img" />
		</div>
	</div>
);

export default Header;
