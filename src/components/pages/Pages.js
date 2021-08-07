import { Info } from "../Info"
import { Events } from "../Events"

export const Pages = ({ info, events }) => {
	return (
		<div>
			<Info info={info} />
			<Events events={events}/>
		</div>
	)
}
