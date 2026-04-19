data "cloudflare_zone" "zone" {
  name = local.dns_name
}

resource "cloudflare_dns_record" "cloudfront_cname" {
  name    = "@"
  type    = "CNAME"
  content = aws_cloudfront_distribution.this.domain_name
  ttl     = 3600
  zone_id = data.cloudflare_zone.zone.id
}
