
resource "aws_s3_bucket" "b-mertz" {
  bucket = "b-mertz"
  tags = {
    Name        = "b-mertz"
    Environment = "Prod"
  }
}
resource "aws_s3_bucket_website_configuration" "b-mertz" {
  bucket = aws_s3_bucket.b-mertz.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}


resource "aws_s3_bucket_ownership_controls" "b-mertz" {
  bucket = aws_s3_bucket.b-mertz.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "b-mertz" {
  bucket = aws_s3_bucket.b-mertz.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "b-mertz" {
  depends_on = [
    aws_s3_bucket_ownership_controls.b-mertz,
    aws_s3_bucket_public_access_block.b-mertz,
  ]

  bucket = aws_s3_bucket.b-mertz.id
  acl    = "public-read"
}
module "dir" {
  source  = "hashicorp/dir/template"
  version = "1.0.2"
  base_dir = "../dist"
}

# module "template_files" {
#   source = "../dist"
#   base_dir = "../dist"

# }

resource "aws_s3_object" "file" {
  for_each = module.dir.files
  bucket       = aws_s3_bucket.b-mertz.id
  key          = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  content = each.value.content
  etag = each.value.digests.md5
  acl = "public-read"
}

