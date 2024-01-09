# Setting Up Amazon CloudWatch Agent on AWS EC2

This README guides you through the process of installing the Amazon CloudWatch Agent on an AWS EC2 instance and creating the necessary IAM role. The CloudWatch Agent enables you to monitor and collect metrics and logs from your EC2 instance, which is crucial for diagnostics and monitoring performance.

## Prerequisites
- An AWS account with access to EC2 and IAM.
- An existing EC2 instance or the ability to create one.

## Step 1: Creating an IAM Role for EC2

1. **Sign in to AWS Management Console**:
   Access the [AWS Management Console](https://aws.amazon.com/console/) and log in.

2. **Open IAM Console**:
   Navigate to the **IAM** service from the console dashboard.

3. **Create a New Role**:
   - In the IAM dashboard, click on **Roles** in the navigation pane.
   - Click on **Create role**.

4. **Choose AWS Service Role Type**:
   - Select **AWS service** as the type of trusted entity.
   - Choose **EC2**. This allows EC2 instances to call AWS services on your behalf.
   - Click **Next: Permissions**.

5. **Attach Permissions Policies**:
   - Search for and select `CloudWatchAgentServerPolicy`.
   - Click **Next: Tags**.

6. **Add Tags (Optional)**:
   - Add tags if desired for organization.
   - Click **Next: Review**.

7. **Review and Create the Role**:
   - Name the role (e.g., `CloudWatchAgentRole`).
   - Click **Create role**.

## Step 2: Attach the Role to Your EC2 Instance

1. **Open EC2 Console**:
   Navigate to the EC2 service in the AWS Management Console.

2. **Modify IAM Role for Instance**:
   - Select your instance.
   - Click on **Actions** > **Security** > **Modify IAM role**.
   - Choose the created IAM role from the dropdown and save.

## Step 3: Install and Configure CloudWatch Agent on EC2

1. **Connect to Your EC2 Instance**:
   Use SSH to connect to your instance.

2. **Update the System**:
   Run `sudo yum update -y`.

3. **Install the CloudWatch Agent**:
   Run `sudo yum install amazon-cloudwatch-agent -y`.

4. **Configure the Agent**:
   - Run `sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard`.
   - Follow the prompts to select the metrics and logs to collect.

5. **Start the Agent**:
   - Start the agent with `sudo systemctl start amazon-cloudwatch-agent`.
   - Enable on boot with `sudo systemctl enable amazon-cloudwatch-agent`.

6. **Verify the Agent is Running**:
   Check the status with `sudo systemctl status amazon-cloudwatch-agent`.

## Monitoring and Logs

- After setup, metrics and logs are available in the CloudWatch console in the AWS Management Console.
- Set up alarms in CloudWatch for proactive monitoring.

For more detailed instructions, refer to AWS documentation.
