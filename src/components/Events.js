import { EventsItems } from "./EventsItems"

export const Events = () => {
	return (
		<section className="eventos">
			<h2 className="section__titulo">Eventos</h2>
			{EventsItems.map((item, index) => (
				<div key={index} className="eventos__columna">
					<img
						src={item.img}
						alt={item.alt}
						className="eventos__img"
					/>
					<a href={item.href} className="eventos__descripcion">
						<h3 className="eventos__titulo">{item.title}</h3>
						<p className="eventos__txt">{item.paragraph}</p>
					</a>
				</div>
			))}
		</section>
	)
}
