<h1 align="center">
  Talus-Gatsby-Starter
</h1>

## 🚀 Quick start

1.  **Clone This Starter.**

    And pull it before using it!

2.  **Build AWS Stack & Update CCI config**

    Use the `build-stack` repo to set up all AWS resources for this project:

    ```shell
    aws cloudformation deploy --stack-name [project-name] --template-file build-stack.yaml --capabilities CAPABILITY_NAMED_IAM
    ```

    The "Outputs" tab of the CloudFormation stack will contain the distribution IDs which should be used in `/.circleci/config.yml`.

3.  **Check Gatsby CLI configuration**

    To be compatible with our CCI build scripts, Gatsby CLI should use `yarn`:

    `~/.config/gatsby/config.json` should include:

    ```json
    "cli": {
      "packageManager": "yarn"
    }
    ```

4.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this local starter.

    ```shell
    # create a new Gatsby site using the talus starter
    gatsby new [project-name] ./talus-gatsby-starter
    ```

5.  **Set up Git**

    Execute the included `setup-repo.sh` script to initialize a git repo with all branches configured in the CCI config.

    ```shell
    ./setup-repo.sh
    ```

6.  **Update `gatsby-config.js`.**

    `gatsby-config.js` will automatically configure opt-in analytics, cookieconsent, and airtable connections based on the values provided.
