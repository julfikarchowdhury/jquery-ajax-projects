
$(document).ready(function () {
    
	//adding new input feild
    $("#add_btn").on("click", function () {
        let content = ''
        content +=  '<div class="mb-3 col-10"  id="new_feild">'+
                        '<label for="name" class="form-label">Name</label>'+
                        '<input type="text" class="form-control x" id="name" placeholder="Enter name"  name="name[]">'+
                    '</div>'+
                    '<div class="mb-3 col-2 pt-4">' +
                        '<button type="button" class="btn btn-outline-danger form-control mt-2 remove-btn" >' +
                            '<i class="fa fa-times"></i>' +
                        '</button>' +
                    '</div><div><p style="color:red;" class="validation"></p></div>';
        $(".more-input").append(content);
        $("#submit").prop("disabled",true);
    })
    //simple validation
    $(document).on("keyup", ".x", function () {
        var data =$(this).val();
        var datalength = data.length;
        if(datalength<4){
            $("#submit").prop("disabled",true);
            $(".validation").html('<b>The name must be more than 3 characters</b>')
        }else{
           $(".validation").hide()
            $("#submit").prop("disabled",false);
        }
    })
    
    //removing field
    $(document).on("click", ".remove-btn", function () {
        $(this).parent().prev().remove();
        $(this).parent().remove(); 
    })

	//showing all data from database
    function allData(){
        $.ajax({
            url: 'http://localhost/jquery-ajax-projects/datashow.php',
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
			function allData(){
                $.ajax({
                    url: 'http://localhost/jquery-ajax-projects/datashow.php',
                    type: "post",
                    
                    success: function (response) {
                        //alert(response)
                        $(".searchdata").html(response);
                    }
                });
            }
            allData();
		}
		try {
			$.ajax({
				url: 'http://localhost/jquery-ajax-projects/livesearchdata.php',
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
