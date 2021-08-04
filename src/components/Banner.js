export const Banner = ({ alt, img }) => {
	return (
		<div className="banner">
			<img src={img} alt={alt} className="banner__img" />
			<div className="contenedor">
				{/* <h2 className=" banner__titulo"></h2>
				<p className="banner__txt"></p> */}
			</div>
		</div>
	)
}
