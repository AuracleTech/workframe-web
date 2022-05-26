const s = document.body.style;

// TODO : Get default automatically from the CSS
export default {
	GENERAL: {
		name: "Options",
	},
	LAYER_NAMES: {
		name: "Layer names",
		default: true,
		change: (value) => s.setProperty("--layer-name", value ? "block" : "none"),
	},
	FOCUS_COLOR: {
		name: "Focus color",
		default: "#0e75a4",
		change: (value) => s.setProperty("--focus-color", value),
	},
	MARGIN: {
		name: "Art margin",
		default: 0,
		range: [0, 64],
		change: (value) => s.setProperty("--art-margin", `${value}px`),
	},
};
