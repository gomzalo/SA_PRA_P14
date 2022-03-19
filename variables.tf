variable "client_email" {
    description = "Service account email address"
    type        = string
    default     = ""
}

variable "cos_image_name" {
    description = "The forced COS image to use instead of latest"
    default     = "cos-stable-77-12371-89-0"
}