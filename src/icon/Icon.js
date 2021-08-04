import React from "react"

export const Icon = ({ dataIcon, className, viewBox, d, onClick}) => {
	return (
		<svg
			data-icon={dataIcon}
			className={className}
			onClick={onClick}
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox}
		>
			<path fill="currentColor" d={d}></path>
		</svg>
	)
}
