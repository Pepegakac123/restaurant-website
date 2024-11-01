import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<div className="app__wrapper_info">
			<SubHeading title="Kontakt" />
			<h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
				Odwiedź Nas
			</h1>
			<div className="app__wrapper-content">
				<p className="p__opensans">Kraków, Stare Miasto 14A</p>
				<p
					className="p__cormorant"
					style={{ color: "#DCCA87", margin: "2rem 0" }}
				>
					Godziny Otwarcia
				</p>
				<p className="p__opensans">Pn - Pt: 8:00 - 22:00</p>
				<p className="p__opensans">St - Nd: 10:00 - 20:00</p>
			</div>
			<button
				type="button"
				className="custom__button"
				style={{ marginTop: "2rem" }}
			>
				Zarezerwuj Stolik
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.findus} alt="finus_img" />
		</div>
	</div>
);

export default FindUs;
