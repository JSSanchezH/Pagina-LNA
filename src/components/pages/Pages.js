import { Info } from "../Info"
import { Events } from "../Events"

export const Pages = ({
	gremio
}) => {
	return (
		<div>
			<Info gremio={gremio} />
			<Events/>
		</div>
	)
}
