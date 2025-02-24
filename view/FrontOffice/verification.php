<?php
include_once dirname(__FILE__, 3) . "/model/travelOffer.php";
include_once dirname(__FILE__, 3) . "/controller/TravelOfferController.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $titre = isset($_POST['title']) && !empty($_POST['title']) ? $_POST['title'] : "Unknown";
    $destination = isset($_POST['destination']) && !empty($_POST['destination']) ? $_POST['destination'] : "Unknown";
    $date_depart = isset($_POST['departureDate']) && !empty($_POST['departureDate']) ? $_POST['departureDate'] : "0000-00-00";
    $date_retour = isset($_POST['returnDate']) && !empty($_POST['returnDate']) ? $_POST['returnDate'] : "0000-00-00";
    $prix = isset($_POST['price']) && !empty($_POST['price']) ? floatval($_POST['price']) : 0.0;
    $disponibilite = isset($_POST['disponibilite']) ? true : false;
    $categorie = isset($_POST['category']) && !empty($_POST['category']) ? $_POST['category'] : "Unknown";

    $offer1 = new travelOffer($titre, $destination, $date_depart, $date_retour, $prix, $disponibilite, $categorie);

    $controller = new TravelOfferController();
    $controller->showTravelOffer($offer1);
}
?>
