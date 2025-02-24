<?php
include_once dirname(__FILE__, 2) . "/model/travelOffer.php";

    class TravelOfferController 
    {
        
        public function showTravelOffer($offer)
        {
            $offer->show();
        }
    }
?>