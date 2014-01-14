describe("Unit: Email Disruption Directive", function() {

	var $compile;
	var $rootScope;
	var $scope;
	var element;

	beforeEach(module('vr.directives.email'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	
	describe('with arbitrary html', function() {
		beforeEach(function() {
			$scope = $rootScope.$new();
			element = $compile("<span roofie='emos' bob='moc.liame'>blah</span>")($scope);
			$scope.$digest();
		});
		
		it('should not change the contents', function() {
			expect(element.text()).toBe("blah");
		});
		
		it('should add an anchor when moused over', function() {
			element.triggerHandler('mouseover');
			
			var link = element.find('a');
			expect(link.length).toBe(1);
			expect(link.prop('href')).toBe("mailto:some@email.com");
		});
		
		it('should add the original html back when moused out', function() {
			element.triggerHandler('mouseover');
			element.triggerHandler('mouseout');
			
			var link = element.find('a');
			expect(link.length).toBe(0);
			expect(element.text()).toBe("blah");
		});
	});
	
	describe('with generated html', function() {
		beforeEach(function() {
			$scope = $rootScope.$new();
			element = $compile("<span roofie='surprise' bob='moc.liame'>emos</span>")($scope);
			$scope.$digest();
		});
		
		it('should add the disrupted email html', function() {
			expect(element.html()).toBe("<span>moc.liame<span style=\"display:none;\">iie8732hfwni</span>@<span style=\"display:none;\">zbnbqyt87</span>emos</span>");
			expect(element.css('direction')).toBe('rtl');
			expect(element.css('unicode-bidi')).toBe('bidi-override');
		});
		
		it('should add an anchor when moused over', function() {
			element.triggerHandler('mouseover');
			
			var link = element.find('a');
			expect(link.length).toBe(1);
			expect(link.prop('href')).toBe("mailto:some@email.com");
		});
		
		it('should add the original html back when moused out', function() {
			element.triggerHandler('mouseover');
			element.triggerHandler('mouseout');
			
			var link = element.find('a');
			expect(link.length).toBe(0);
			expect(element.html()).toBe("<span>moc.liame<span style=\"display:none;\">iie8732hfwni</span>@<span style=\"display:none;\">zbnbqyt87</span>emos</span>");
		});
	});

});
