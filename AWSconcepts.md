## AWS Concepts

<u>1. Amazon Cloudfront</u>
> Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment. 

*[AWS Cloudfront (2020)](https://aws.amazon.com/cloudfront/)*

> To serve a static website hosted on Amazon S3, you can deploy a CloudFront distribution.

*[How do I use CloudFront to serve a static website hosted on Amazon S3? (2020)](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/)*

> Cloudfront is used to deliver static and dynamic content and applications to users all over the globe. It does so using a worldwide network of data centers that Amazon refers to as edge locations. CloudFront is integrated with AWS at physical locations that are directly connected to the AWS global infrastructure and other AWS services. 

*[What is Amazon Cloudfront? - Edpresso (2020)](https://www.educative.io/edpresso/what-is-amazon-cloudfront)*

> If you want to speed up delivery of your web content, you can use Amazon CloudFront, the AWS content delivery network (CDN). CloudFront can deliver your entire website—including dynamic, static, streaming, and interactive content—by using a global network of edge locations. Requests for your content are automatically routed to the edge location that gives your users the lowest latency. To use CloudFront to distribute your content, you create a web distribution and specify settings such as the Amazon S3 bucket or HTTP server that you want CloudFront to get your content from, whether you want only selected users to have access to your content, and whether you want to require users to use HTTPS. When you create a web distribution, CloudFront assigns a domain name to the distribution, such as d111111abcdef8.cloudfront.net. Alternatively, you might prefer to use your own domain name in URLs. If you want to use your own domain name, use Amazon Route 53 to create an alias record that points to your CloudFront distribution. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, but you can create an alias record both for the root domain, such as example.com, and for subdomains, such as www.example.com. (You can create CNAME records only for subdomains.) When Route 53 receives a DNS query that matches the name and type of an alias record, Route 53 responds with the domain name that is associated with your distribution. 

*[Routing traffic to an Amazon CloudFront web distribution by using your domain name (2020)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html)*

> Amazon CloudFront is best suited when there is a need of speed in serving static and dynanic web contents of a web application. If the content is already in that edge location, CloudFront delivers it immediately. If the content is not currently in that edge location, CloudFront retrieves it from an Amazon S3 bucket or an HTTP server. Amazon CloudFront is not appropriate in case users can tolerate some delays or servers are present near to the location of user. It also Integrates through the W3 Total Cache plugin. Amazon CloudFront Pricing based on bandwidth usage that's the best part of it.

*[Ashish Agarwal review in TrustRadius](https://www.trustradius.com/compare-products/amazon-cloudfront-vs-amazon-route-53)*
