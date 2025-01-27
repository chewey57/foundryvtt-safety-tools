import CONSTANTS from "./constants";

export class SafetyCardWindow extends Application {
	public icon: string;
	private readonly description: string;

	public constructor(title: string, description: string) {
		super({
			resizable: false,
			template: `modules/${CONSTANTS.MODULE_NAME}/templates/card.hbs`,
			title,
			height: 647,
			width: 400
		});
		this.description = description;
	}

	readonly getData = () => {
		return {
			description: this.description,
			icon: this.icon
		};
	};
}
