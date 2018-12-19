import metisMenu from 'metismenu';

$(document).ready(function(){
	$('.sidebar-menu > ul').metisMenu();

	$('[data-toggle="sidebar-left"]').on('click', function(){
		$('.venus-admin').toggleClass('open-sidebar-left');
	});
});