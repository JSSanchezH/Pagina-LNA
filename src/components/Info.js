export const Info = ({
	gremio
}) => {
	return (
		<section className="info">
			{gremio.map((item, index) => (
				<article key={index} className="info__columna">
					<h2 className="info__titulo"> {item.title}</h2>
					<p className="info__txt"> {item.paragraph} </p>
				</article>
			))}
		</section>
	)
}
