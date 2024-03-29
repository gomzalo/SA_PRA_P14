provider "google" {
    credentials = file("SA_key.json")
    project     = "sopes-1-g13"
    region      = "us-central1"
    zone        = "us-central1-a"
}

module "gce-worker-container" {
    source = "./Practica_7"

    image = "gomzalo/sap7"
    instance_name = "p7p14"
    network_name = "default"
}