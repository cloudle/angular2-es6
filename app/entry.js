import 'zone.js'
import 'reflect-metadata'
import 'angular2/angular2_sfx'

let Application = ng.Component({
	selector: 'application',
	template: `
		<h1>Hello!</h1>
	`
});

Application.Class({
	constructor() {
		this.name = "Loin";
	}
});

ng.bootstrap(Application);