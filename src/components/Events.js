import { Link } from "react-router-dom"

export const Events = ({ events }) => {
	return (
		<section className="eventos">
			<h2 className="section__titulo">Eventos</h2>
			{events.map((item, index) => (
				<div key={index} className="eventos__columna">
					<img
						src={item.img}
						alt={item.alt}
						className="eventos__img"
					/>
					<Link to={item.to} className="eventos__descripcion">
						<h3 className="eventos__titulo">{item.title}</h3>
						<p className="eventos__txt">{item.paragraph}</p>
					</Link>
				</div>
			))}
		</section>
	)
}
