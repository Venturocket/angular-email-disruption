/**
 * Author: Derek Gould
 * Date: 12/17/13
 * Time: 5:50 PM
 */

angular.module('vr.directives.email', ['vr.directives.email.disruption']);

angular.module('vr.directives.email.disruption', [])
	.directive('roofie', function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attr) {
				var bob = attr.bob;
				var foo = '';
				var html = '';
				var arbitrary = attr.roofie != 'surprise'
				if(!arbitrary) {
					foo = elem.text();
					html = "<span>"+bob+"<span style='display:none;'>iie8732hfwni</span>@<span style='display:none;'>zbnbqyt87</span>"+foo+"</span>";
				} else {
					foo = attr.roofie;
					html = elem.html();
					if(html.substr(0,1) != '<') {
						html = "<span>"+elem.text()+"</span>";
					}
				}
				
				
				var reversed = bob+'@'+foo;
				var email = reversed.split('').reverse().join('');
				var link = $("<a href='mailto:"+email+"'>"+html+"</a>");
				
				html = $(html);
				
				elem = $(elem);
				elem.empty().append(html);
				
				if(!arbitrary) {
					elem.css('direction', 'rtl');
					elem.css('unicode-bidi', 'bidi-override');
				}
				
				elem.on('mouseover', function() {
					elem.append(link);
					html.remove();
				}).on('mouseout', function() {
					elem.append(html);
					link.remove();
				});
			}
		}
	});
