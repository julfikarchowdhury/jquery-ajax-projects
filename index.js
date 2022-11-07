
$(document).ready(function () {
	
	//adding new input feild
    $("#add_btn").on("click", function () {
        let content = ''
        content += '<div class="form-group col-10" id="new_feild">' +
                '<label for="name">Name:</label>' +
                '<input type="text" class="form-control" id="name" placeholder="Enter name" name="name[]">' +
            '</div>' +
            '<div class="col-2 pt-4">' +
                '<button type="button" class="btn btn-outline-danger form-control mt-2 remove-btn">' +
                    '<i class="fa fa-times"></i>' +
                '</button>' +
            '</div>';
        $(".more-input").append(content);
    })

    //removing field
    $(document).on("click", ".remove-btn", function () {
        $(this).parent().prev().remove();
        $(this).parent().remove(); 
    })

	//showing all data from database
    function allData(){
        $.ajax({
            url: 'http://localhost/jqueryprojects/datashow.php',
            type: "post",
            
            success: function (response) {
                //alert(response)
                $(".searchdata").html(response);
            }
        });
    }
    allData();

    //searching data
    $("#searchbar").on("keyup", function () {
        let target = $('.searchdata');
		target.empty();
		var search = $(this).val();
		if (search == '') {
			return false
		}
		try {
			$.ajax({
				url: 'http://localhost/jqueryprojects/livesearchdata.php',
				type: "post",
				data: {
					'search': search
				},
				success: function (response) {
                    $(".searchdata").html(response);
				},
				error: function (error) {
					toastr.error('Something went wrong !', 'Error !')
				}
			});
		} catch (error) {
			console.log(error)
		}
    })
})
