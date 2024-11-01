import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { data } from "../../constants";
import Quote from "../../assets/blockquote.svg";
import "./Testimonals.css";

const Testimonals = () => {
	return (
		<section
			className="slider-wrapper flex__center section__padding app__wrapper app__bg "
			id="testimonals"
		>
			<div className="title">
				<h2 className="headtext__cormorant">Opinie</h2>
				<p
					className="p__opensans"
					style={{ color: "#AAAAAA", marginTop: "2rem" }}
				>
					Co Klienci O Nas Mówią.
				</p>
			</div>

			<div className="slider-container ">
				<blockquote>
					<img className="top-quote quote" src={Quote} alt="quote" />
					<img className="bottom-quote quote" src={Quote} alt="quote" />
				</blockquote>

				<Splide
					options={{
						perPage: 1,
						autoplay: true,
						speed: 1000,
						rewind: true,
						rewindByDrag: true,
					}}
				>
					{data.reviews.map((review) => (
						<SplideSlide key={review.id}>
							<img className="review-img" src={review.image} alt="" />
							<div className="content">
								<p className="text">{review.text}</p>
								<div className="info">
									<div className="rating">
										<span className="star">&#9733;</span>
										<span className="star">&#9733;</span>
										<span className="star">&#9733;</span>
										<span className="star">&#9733;</span>
										<span className="star">&#9734;</span>
									</div>
									<p className="user">{review.name}</p>
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	);
};

export default Testimonals;
