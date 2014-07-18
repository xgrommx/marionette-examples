/**
 * Tests basic view and model interactions
 */

/**
 * Assert that the simple input view connects with the required fields from the input model
 */
define(['jquery', 'view/SimpleInputView', 'model/InputModel'], function($, InputView, InputModel) {
	describe('SimpleInputView', function() {

		describe('render with defaults', function() {
			// Test with default values
			var anInput = new InputModel({ });
			var el = $(new InputView({model: anInput}).render().el);
			var inputElement = el.find('input');
			var labelElement = el.find('label');
			it('Should have a non-empty name', function() {
				expect(inputElement.attr('name')).to.not.equal('');
			});
			it('Should have an empty value', function() {
				expect(inputElement.val()).to.equal('');
			});
			it('Should have an non-empty label', function() {
				expect(labelElement.innerHTML).to.not.equal('');
			});
		});

		describe('render with defined attributes', function() {
			// Create an input with custom values
			var anInput = new InputModel({
				'name' : 'default',
				'value' : 'Default Value',
				'label' : 'Your text:'
			});
			var theRenderedViewHtml = new InputView({model: anInput}).render().el.innerHTML;
			it('Should have the correct name', function() {
				expect(theRenderedViewHtml).to.contain(' name="' + anInput.attributes.name + '"');
				expect(theRenderedViewHtml).to.contain(' for="' + anInput.attributes.name + '"');
			});
			it('Should have the correct value', function() {
				expect(theRenderedViewHtml).to.contain(' value="' + anInput.attributes.value + '"');
			});
			it('Should have the label text', function() {
				expect(theRenderedViewHtml).to.contain(anInput.attributes.label);
			});
		});
	});
});