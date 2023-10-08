
resource "aws_cloudfront_distribution" "this" {

  enabled = true

  aliases = ["b-mertz.com"]

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:455503544814:certificate/adf2ce32-270b-45d2-8700-279ae0e903a8"
    ssl_support_method  = "sni-only"
  }
  origin {
    origin_id   = local.s3_origin_id
    domain_name = local.s3_domain_name

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  default_cache_behavior {

    target_origin_id = local.s3_origin_id
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  price_class = "PriceClass_200"

  tags = {
    Name        = local.s3_name
    Environment = "Prod"
  }

}
