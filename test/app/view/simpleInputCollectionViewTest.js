/**
 * Created by nrheckman on 7/18/14.
 */

/**
 * Assert that the simple input collection view shows the entire collection
 */
define(['jquery', 'view/SimpleInputCollectionView', 'collection/InputCollection'], function($, InputCollectionView, InputCollection) {
	describe('SimpleInputCollectionView', function () {

		describe('render', function () {
			var inputCollection = new InputCollection([
				{ },
				{ 'label' : 'More text:' },
				{ 'label' : 'Defaulted:', 'value' : 'Some default value' }
			]);
			var view = new InputCollectionView({ 'collection' : inputCollection });
			var el = $(view.render().el);
			var inputElementList = el.find('input');
			var labelElementList = el.find('label');
			it('Should have the correct number of inputs', function() {
				expect(inputElementList.length).to.equal(inputCollection.length);
			});
			it('Should have the correct number of labels', function() {
				expect(labelElementList.length).to.equal(inputCollection.length);
			});
		});
	});
});