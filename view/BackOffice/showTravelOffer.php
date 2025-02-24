<?php
    include_once "/model/travelOffer.php";
    include_once "/controller/TravelOfferController.php";

    $offer1 = new travelOffer("Discover Paris", "Paris, France", "2024-10-15", "2024-10-22", 1200, "Yes", "Adventure");

    $controller = new TravelOfferController();
    $controller->showTravelOffer($offer1);
?>