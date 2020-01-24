
import $ from 'jquery';


class Template
{
	Teste()
	{
		const teste = $('body');
		console.log( $('body') );
	}

	constructor($)
	{
		let self = this;

		self.Teste($);
	}
}

export default Template;