import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer section__padding" id="login">
		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Skontaktuj Się</h1>
				<p className="p__opensans">Kraków, Stare Miasto 14A</p>
				<p className="p__opensans">+48 123 456 789</p>
			</div>

			<div className="app__footer-links_logo">
				<img src={images.gericht} alt="footer_logo" />
				<p className="p__opensans">
					&quot;Gotowanie to sztuka, która łączy smaki, zapachy i emocje,
					tworząc coś, co potrafi rozgrzać nie tylko ciało, ale i duszę.&quot;
				</p>
				<img
					src={images.spoon}
					className="spoon__img"
					style={{ marginTop: 15 }}
				/>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Godziny Otwarcia:</h1>
				<p className="p__opensans">Poniedziałek - Piątek:</p>
				<p className="p__opensans">08:00 - 22:00</p>
				<p className="p__opensans">Sobota - Niedziela:</p>
				<p className="p__opensans">08:00 - 20:00</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className="p__opensans">
				2024 @ Maison d’Or - Kacper Adamczyk. Wszelkie Prawa Zastrzeżone.
			</p>
		</div>
	</div>
);

export default Footer;
