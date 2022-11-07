// $("#button").on("click",function(){

//     $("p").html("<b>blah blah blah</b>")
//     $("p").attr("id", "disabled");


// })
$(document).ready(function () {

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
        // dom traversing
    })
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

    //search data
    $("#searchbar").on("keyup", function () {
        //var searchdata = $(this).val()
        let target = $('.searchdata');
		target.empty();
		var search = $(this).val();
        //alert(search)

		if (search == '') {
			return false
		}
		try {
			$.ajax({
				url: 'http://localhost/jqueryprojects/livesearchdata.php',
				type: "post",
				//dataType: 'json',
				data: {
					'search': search
				},
				success: function (response) {
                    //alert(response)
                    $(".searchdata").html(response);
					//let content = '';
					//let content2 = '';
					// if (response.success == true && response.data.length > 0) {
					// 	 //console.log(response.data[0].id)
					// 	content += '<div class="form-group mt-1">' +
					// 		'<ul class="list-group">';
					// 	for (let donator of response.data) {
					// 		content += '<li class="list-group-item list-group-item-action cursor-pointer donator-contact-suggest">' +
					// 			donator.phone
					// 		'</li>';

					// 	}
					// 	content += '</ul>' +
					// 		'</div >';
					// 	target.append(content)
					// } else {
					// 	target.empty()
					// 	// toastr.warning('No data found !', 'Oops !');
					// }
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
