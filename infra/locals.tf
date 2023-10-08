locals {
  dns_name       = "b-mertz.com"
  s3_name        = "bmertz"
  region         = "eu-west-3"
  s3_origin_id   = "${local.s3_name}-origin"
  s3_domain_name = "${local.s3_name}.s3-website.${local.region}.amazonaws.com"
}

variable "static_dir" {
  default = "../dist"
}

variable "cloudflare_account_id" {
  type      = string
  sensitive = true
}

variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}
