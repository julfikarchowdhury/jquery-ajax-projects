<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery project</title>
    <link rel="stylesheet" href="style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
</head>

<body>

    <div class="container" style="margin-top:50px;">

        <div style="width:50%;margin: 0 auto;">
            <h2>Jquery form</h2>
            <!-- form to submit multiple data in database together -->
            <form action="insertData.php" method="post" style="border: 1px solid black;padding:50px;">
                <div class="row">
                    <div class="form-group col-10" id="new_feild">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name[]">
                    </div>

                    <div class="col-2 pt-4">
                        <button type="button" id="add_btn" class="btn btn-outline-success form-control mt-2">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="row more-input">
                </div>
                <div class="row">
                    <div class="col-12">
                        <div style="text-align: center;">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <div class="container" style="margin-top:50px;">
        <!-- searchbar -->
        <div style="width:50%;margin:auto;">
            <input type="search" id="searchbar" class="form-control" 
            style="width:50%;float:right;margin-bottom:20px;margin-right:5px;" 
            placeholder="Search">
        </div>
        <!-- showing data in table -->
        <div class="searchdata" style="width:50%;margin: 0 auto;">
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="index.js"></script>
</body>

</html>