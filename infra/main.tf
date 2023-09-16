terraform {
  backend "s3" {
    bucket = "bm-tfstates"
    key    = "b-mertz"
    region = "eu-west-3"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
provider "aws" {
  region = "eu-west-3"
}
