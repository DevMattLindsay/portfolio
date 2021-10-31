(function(window) {

	var PortfolioTheme = function() {

		var enableMenu = function() {
			// mobile toggle
			$('.sidebar-toggle').on('click', function() {
				if ($(this).hasClass('-active')) {
					$(this).removeClass('-active');
					$('.sidebar').removeClass('-active');
				} else {
					$(this).addClass('-active');
					$('.sidebar').addClass('-active');
				}
			});

			// scroll links
			$('.js-scroll-link').on('click', function(){
				$('html, body').animate({ scrollTop: $($(this).attr('js-scroll-to')).offset().top}, 100);

				$('.sidebar-toggle').trigger('click');
			});
		}

		var enableScrolloverAnimations = function() {

			function delay($el, delay) {
				setTimeout(function () {
					$el.addClass('animate');
				}, delay);
			}

			if ($('.js-animate').length > 0) {
				var threshold = 100;
				var scroll;
				var $targets;
				var index;
				$(window).scroll(function(){
					scroll = $(this).scrollTop() + $(this).height();
					$('.js-animate:not(.actived)').each(function(e) {
						if (scroll > $(this).offset().top + threshold) {
							if ($(this).hasClass('js-animate-target')) {
								$targets = $(this);
							} else {
								$targets = $(this).find('.js-animate-target');
							}
							$(this).addClass('actived');
							index = 0;
							$targets.each(function() {
								delay($(this), index*150);
								index++;
							});
						}
					});
				});
			}
		};

		var enableContactValidation = function() {

			var $inputs = $('.contact-form .form-input');

			var validate = function($input) {
				if ($input.val().length > 0) {
					$input.parent().removeClass('-input-invalid');
				} else {
					$input.parent().addClass('-input-invalid');
				}

				var isFilled = true;
				$inputs.each(function() {
					if ($(this).val().length === 0) {
						isFilled = false;
					}
				});

				if (isFilled) {
					$('.contact-submit').removeAttr('disabled');
				} else {
					$('.contact-submit').attr('disabled', true);
				}
			};

			$inputs.on('focus', function() {
				$(this).parent().addClass('-input-init');
			});
			$inputs.on('blur', function() {
				validate($(this));
			});
			$inputs.on('keyup', function() {
				validate($(this));
			});
		};

		this.enableMenu = enableMenu;
		this.enableScrolloverAnimations = enableScrolloverAnimations;
		this.enableContactValidation = enableContactValidation;

	};

	/* -------------------------------------------------------------------------- */

	$(document).ready(function() {
		porfolioTheme = new PortfolioTheme();
		porfolioTheme.enableMenu();
		porfolioTheme.enableScrolloverAnimations();
		porfolioTheme.enableContactValidation();

		window.porfolioTheme = porfolioTheme;

		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

})(window);
