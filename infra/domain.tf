data "cloudflare_zone" "zone" {
  name       = local.dns_name
  account_id = var.cloudflare_account_id
}

resource "cloudflare_record" "cloudfront_cname" {
  name    = "@"
  type    = "CNAME"
  value   = aws_cloudfront_distribution.this.domain_name
  ttl     = 3600
  zone_id = data.cloudflare_zone.zone.id
}
