
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-button").click(function(){
				var el = $("#carousel-button").children("span");
                if (el.hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                   el.removeClass('fa-pause');
                    el.addClass('fa-play');
                }
                else if (el.hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    el.removeClass('fa-play');
                    el.addClass('fa-pause');                    
                }
            });

			
			// Code for toggling  the Login and Reservation modals :assignments 4

			$("#loginButton").click(function(){
				$('#loginModal').modal('toggle');
			});

			$("#reserveTableButton").click(function(){
				$('#reserveModal').modal('toggle');
			});
        });

		

