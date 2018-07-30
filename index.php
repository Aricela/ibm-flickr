<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Lauren Li - IBM Front End Exercise</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css" rel="stylesheet">
    <!-- Custom Styles -->
    <link href="css/style.css" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">

</head>
<body>
    <header>
        <a href="index.php">
            <h1>SPACE</h1>
            <h2>The Final Frontier</h2>
        </a>
    </header>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-sm-12 col-md-3 col-lg-2">
                <h3>Nav</h3>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="process.php">Process</a></li>
                </ul>
            </nav>
            <section class="col-sm-12 col-md-6 col-lg-8">
                <main>
                    <h3>Photos curated by NASA.</h3>
                    <div id="topOptions" class="d-flex justify-content-between flex-wrap">
                        <div class="topOption">
                            Show photos from album:
                            <!-- Album dropdown -->
                            <select id="albumFilter">
                                <option value="all">All</option>
                                <option value="album1">album1</option>
                            </select>
                        </div>
                        <div class="topOption">
                            Photos sorted by
                            <!-- Miscellaneous sort dropdown -->
                            <select id="miscSort">
                                <option value="takenDateNew" selected="selected">Date taken (Newest first)</option>
                                <option value="takenDateOld">Date taken (Oldest first)</option>
                                <option value="popularity">Popularity</option>
                                <option value="title">Title (A-Z)</option>
                            </select>
                        </div>
                    </div>

                    <div id="photoContainer">
                        <div id="photoDiv"></div>
                    </div>
                </main>
            </section>
            <section class="col-sm-12 col-md-3 col-lg-2">
                <h3>Tags to filter by</h3>
                tag tag
            </section>
        </div> <!-- /Row div -->


        <footer>
            <div id="footerDiv">Lauren Li 2018</div>
        </footer>
    </div>  <!-- /container-fluid div -->
    <!-- Scripts -->
    <!-- JQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"></script>
    <!-- JS for Flickr -->
    <script src="js/supplement.js"></script>
</body>
</html>