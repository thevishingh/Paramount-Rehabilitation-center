(function ($) {
    "use strict";

$(document).ready(function() {


	if (jQuery(".popular-classes-wrapper").length > 0) {
    $('.popular-classes-wrapper').imagesLoaded(function() {
      // init Isotope
      var $container = $('.popular-classes-wrapper').isotope({
        itemSelector: '.popular-class-item',
        layoutMode: 'fitRows',
      });

      // bind filter button click
      $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $container.isotope({
          filter: filterValue
        });
      });
      // change is-checked class on buttons
      $('.popular-class-buttons').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
        });
      });
      //****************************
      // Isotope Load more button
      //****************************
      var initShow = 6; //number of items loaded on init & onclick load more button
      var counter = initShow; //counter for load more button
      var iso = $container.data('isotope'); // get Isotope instance

      loadMore(initShow); //execute function onload

      function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
          return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
          jQuery("#see-load-more").hide();
        } else {
          jQuery("#see-load-more").show();
        };

      }
      //when load more button clicked
      $("#see-load-more").on('click', function() {
        if ($('#filters').data('clicked')) {
          //when filter button clicked, set initial value for counter
          counter = initShow;
          $('#filters').data('clicked', false);
        } else {
          counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
      });

      //when filter button clicked
      $("#filters").on('click', function() {
        $(this).data('clicked', true);

        loadMore(initShow);
      });
    });

	}



	//=======================================================================
	// Ajax On Photo Gallary
	//=======================================================================
	if (jQuery(".gallery-images").length > 0) {
		$('.gallery-images').imagesLoaded(function() {
			var $containerg = $('.gallery-images').isotope({
				itemSelector: '.gallery-image',
			});
			// bind filter button click
			$('#controls').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				// use filterFn if matches value
				$containerg.isotope({
					filter: filterValue
				});
			});
			// change is-checked class on buttons
			$('#controls').each(function(i, buttonGroup) {
				var $buttonGroup = $(buttonGroup);
				$buttonGroup.on('click', 'button', function() {
					$buttonGroup.find('.active').removeClass('active');
					$(this).addClass('active');
				});
			});

			// Gallary Load more button
			//****************************
			var initShowg = 6; //number of items loaded on init & onclick load more button
			var counterg = initShowg; //counter for load more button
			var isog = $containerg.data('isotope'); // get Isotope instance

			loadMoreg(initShowg); //execute function onload

			function loadMoreg(toShowg) {
				$containerg.find(".hidden").removeClass("hidden");

				var hiddenElems = isog.filteredItems.slice(toShowg, isog.filteredItems.length).map(function(item) {
					return item.element;
				});
				$(hiddenElems).addClass('hidden');
				$containerg.isotope('layout');

				//when no more to load, hide show more button
				if (hiddenElems.length == 0) {
					jQuery("#load-photos").hide();
				} else {
					jQuery("#load-photos").show();
				};

			}
			//when load more button clicked
			$("#load-photos").on('click', function() {
				if ($('#controls').data('clicked')) {
					//when filter button clicked, set initial value for counter
					counterg = initShowg;
					$('#controls').data('clicked', false);
				} else {
					counterg = counterg;
				};

				counterg = counterg + initShowg;

				loadMoreg(counterg);
			});

			//when filter button clicked
			$("#controls").on('click', function() {
				$(this).data('clicked', true);

				loadMoreg(initShowg);
			});
		});
	}

	//=======================================================================
	// ajax curse page
	//=======================================================================

	if (jQuery(".grid-wrapper").length > 0) {
		//Grid view
		var items = $(".grid-wrapper .list-item");
		var numItems = items.length;
		var perPage = 6;
		var paginationItemNum = numItems;
		items.slice(perPage).hide();
		$('.total-curse-count').text(numItems);
		$('.pagination-container.has-paginate-grid').pagination({
			items: paginationItemNum,
			itemsOnPage: perPage,
			prevText: "<i class='icofont-long-arrow-left'>",
			nextText: "<i class='icofont-long-arrow-right'>",
			onPageClick: function(pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).show();

			}
		});

	}

	if (jQuery(".list-wrapper").length > 0) {
		// list view
		var itemsList = $(".list-wrapper .list-item");
		var numItemsList = itemsList.length;
		var perPageList = 6;
		var paginationItemNumList = numItemsList;
		itemsList.slice(perPageList).hide();
		$('.pagination-container.has-paginate-list').pagination({
			items: paginationItemNumList,
			itemsOnPage: perPageList,
			prevText: "<i class='icofont-long-arrow-left'>",
			nextText: "<i class='icofont-long-arrow-right'>",
			onPageClick: function(pageNumber) {
				var showFromList = perPageList * (pageNumber - 1);
				var showToList = showFromList + perPageList;
				itemsList.hide().slice(showFromList, showToList).show();
			}
		});

	}
});

})(jQuery);