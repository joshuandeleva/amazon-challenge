import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__images"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG47.png"
						rating={5}
					/>
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG50.png"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG35.png"
						rating={5}
					/>
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG48.png"
						rating={5}
					/>
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG49.png"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="123445"
						title="Vans"
						price={29.99}
						image="http://pngimg.com/uploads/vans/vans_PNG44.png"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
