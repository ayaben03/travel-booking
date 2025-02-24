<?php
class travelOffer
{
    private int $id;
    private string $titre;
    private string $destination;
    private string $date_depart;
    private string $date_retour;
    private float $prix;
    private bool $disponibilite;
    private string $categorie;

    // Constructor
    public function __construct($titre, $destination, $date_depart, $date_retour, $prix, $disponibilite, $categorie)
    {
        $this->titre = $titre;
        $this->destination = $destination;
        $this->date_depart = $date_depart;
        $this->date_retour = $date_retour;
        $this->prix = $prix;
        $this->disponibilite = $disponibilite; // Boolean value
        $this->categorie = $categorie;
    }

    public function show()
    {
        echo "<table border='1'>
            <tr>
                <th>TITLE</th>
                <th>DESTINATION</th>
                <th>DEPARTURE DATE</th>
                <th>RETURN DATE</th>
                <th>PRICE</th>
                <th>AVAILABILITY</th>
                <th>CATEGORY</th>
            </tr>
            <tr>
                <td>{$this->titre}</td>
                <td>{$this->destination}</td>
                <td>{$this->date_depart}</td>
                <td>{$this->date_retour}</td>
                <td>" . number_format($this->prix, 2) . " €</td> 
                <td>" . ($this->disponibilite ? "Available" : "Not Available") . "</td>
                <td>{$this->categorie}</td>
            </tr>
        </table>";
    }
}
?>
