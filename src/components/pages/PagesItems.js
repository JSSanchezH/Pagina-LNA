import { LNAItems, TItems, OEItems, LHItems, SWCOLItems } from "../InfoItems"
import { LNAEvents, TEvents, OEEvents, LHEvents, SWCOLEvents } from "../EventsItems"

export const PagesItems = [
	{
		info: LNAItems,
		events: LNAEvents,
		to: "/LNA",
	},
	{
		info: TItems,
		events: TEvents,
		to: "/Titanes",
	},
	{
		info: OEItems,
		events: OEEvents,
		to: "/OrionEspectral",
	},
	{
		info: LHItems,
		events: LHEvents,
		to: "/LastHope",
	},
	{
		info: SWCOLItems,
		events: SWCOLEvents,
		to: "/SWCOL",
	},
]
