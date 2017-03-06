# How to Deploy Your Angular 2 App to AWS S3

After building up the first version of my personal website with Angular 2, I was thinking to actually put it up online so that it would be seen by others. AWS S3 is one of the good choices which is cheap and easy to deploy. So I want to write down my experience and share with you.

### Assumptions
1. You have a totally functional Angular 2 Application.
2. You have a valid AWS account and basic understanding of AWS.
3. You have [Angular CLI][angular-cli] installed.

### Let's Get Started
1. Pack your Angular 2 app using terminal command `> ng build --prod`. The output files will normally under `dist/` folder.
2. Login to AWS, select S3 service and create a bucket.
3. Get into the bucket and upload all files in `dist/`.
4. In order to make this bucket public accessible, 
	1. click `Properties` on the upper-right corner;
	2. expand `Permissions` section and edit bucket policy as following;
    ```
	{
		"Version": "2012-10-17",
		"Statement": [
			{
				"Sid": "Allow Public Access to All Objects",
				"Effect": "Allow",
				"Principal": "*",
				"Action": "s3:GetObject",
				"Resource": "arn:aws:s3:::your-bucket-name/*"
			}
		]
	}
    ```
	3. expand `Static Website Hosting` section, choose `Enable website hosting`, enter `index.html` for both Index Document and Error Document and save. The reason to set up the Error Document to be index page is all requests except `"/"` and `"/index.html"` should fall back onto `index.html` so that the request can be handled properly. Otherwise, `404 Not Found` will show up. 

Now you can see the `Endpoint` in `Static Website Hosting` section. That is the web address your Angular 2 app is hosting on. Go and check it out!

### My Practice on b1uesky.me
The previous section guide you through the very basic process of deploy an Angular 2 App to S3. In this section, I want to share with you how I develop and deploy [b1uesky.me][pw] with AWS S3. 

It is always a good practice to test your codes under staging environment before push it to the production environment. So I create two buckets, `b1uesky.me` for production and `dev.b1uesky.me` for staging. With [AWS CLI][aws-cli], I am able to manage the buckets effortlessly.

1. [Setup AWS account properly][setup-aws-account].
2. [Installing the AWS Command Line Interface][install-aws-cli]
3. [Configuring the AWS Command Line Interface][config-aws-cli]
4. Create two commands for deploying codes by NPM. Insert the following two lines to `scripts` section in `package.json`.
    ```
        "deploy-dev": "ng build && aws s3 rm s3://dev.b1uesky.me/ --recursive && aws s3 sync dist/ s3://dev.b1uesky.me/",
        "deploy-prod": "git checkout master && ng build --env=prod && aws s3 rm s3://b1uesky.me/ --recursive && aws s3 sync dist/ s3://b1uesky.me/",
    ```
    `deploy-dev` first builds the Angular 2 App, then empties `dev.b1uesky.me` bucket and finally uploads app files to the bucket. `deploy-prod` is pretty much the same as `deploy-dev`, except that it will deploy the master branch codes with production environment to `b1uesky.me`. Run `> npm run deploy-dev` and `> npm run deploy-prod` in terminal to deploy the app to production or staging environment.
5. The last step is to route `http://[[www|dev].]b1uesky.me` to the bucket. Just create three CNAME records in domain name registrar. Map `http://b1uesky.me` and `http://www.b1uesky.me` to the endpoint of `b1uesky.me` bucket, and `http://dev.b1uesky.me` to the endpoint of `dev.b1uesky.me` bucket.

### We're Done
Now we can deploy our Angular 2 app to S3 for testing and production. Once you get familiar with `> npm run deploy-dev` and `> npm run deploy-prod`, it just take a second to actually push your codes to S3. It is quite convinient.

But you may notice, your Angular app is NOT secure! We need HTTPS, or I cannot know your website is actually your website. Don't worry, I'll write another post about it (after I figure out how to add SSL). So keep your eyes on my [blog][bs-blog].

[angular-cli]: https://cli.angular.io/
[aws-cli]: https://aws.amazon.com/cli/
[bigrock]: https://www.bigrock.com/
[bs-blog]: www.b1uesky.me/blog/
[config-aws-cli]: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
[install-aws-cli]: http://docs.aws.amazon.com/cli/latest/userguide/installing.html
[pw]: http://www.b1uesky.me
[setup-aws-account]: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html
