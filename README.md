# Outcast trading landing page website

This site is a simple homepage / landing page for the outcast trading group.


## Prerequisites

First, install the neccessary components to start developing with the website.

```
sudo npm install -g gatsby-cli
sudo npm install -g @aws-amplify/cli
```

Retrieve your AWS IAM account credentials from the account administrator. Create a new IAM security credential pair for your IAM user. Take note of the access key and secret.

Configure the amplify cli with the following commands:

```
amplify env checkout dev
```

Configure with the following parameters when prompted:

* new environment? `N`
* new user? `N`
* existing user: (your iam access key):(your iam secret key)
* region: `us-west-2`

## Development

Navigate to your project folder and start the development server:

```bash
cd my-project-name
gatsby develop
```

The gatsby server will host the page locally at http://localhost:3000

