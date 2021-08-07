export const Info = ({
	info
}) => {
	return (
		<section className="info">
			{info.map((item, index) => (
				<article key={index} className="info__columna">
					<h2 className="info__titulo"> {item.title}</h2>
					<p className="info__txt"> {item.paragraph} </p>
				</article>
			))}
		</section>
	)
}
