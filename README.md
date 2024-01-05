<!-- ## `Webserver` repository for botdistrikt interview assignment


#### Deployment stack
#### Backend
`Webserver`: AWS EC2
Database server: postgreSQL Amazon RDS
Environment management: AWS Secrets Manager


#### Setup of AWS EC2 Webserver
<br>

Launch EC2 instance with Amazon Linux OS
![Example Images](images/1.png)
<br>

Name and download private key 'botdistrikt-assignment-loopback-api-webserver.pem' into /Users/your-username/.ssh
![Example Images](images/2.png)
<br>

![Example Images](images/3.png)
<br>

![Example Images](images/4.png)
<br>

![Example Images](images/5.png)
<br>
<br>

Set up EC2 instance on AWS
Connect to EC2 instance via `ssh -i botdistrikt-assignment-loopback-api-webserver.pem ec2-user@ec2-54-254-56-53.ap-southeast-1.compute.amazonaws.com` or set up a custom ssh config file with the ssh extention on vscode
<br>

Install git
`sudo yum install git -y`
<br>

Go to development environment
`cd /home/ec2-user/`
<br>

Clone botdistrikt-assignment-loopback-api-webserver from github into the EC2 webserver dev env
`git clone https://github.com/malepsyche/botdistrikt-assignment-loopback-api-webserver.git`
<br>
 -->


## Webserver Repository for Botdistrikt Interview Assignment

### Deployment Stack
#### Backend
- **Webserver**: AWS EC2
- **Database server**: PostgreSQL Amazon RDS
- **Environment management**: AWS Secrets Manager

### Setup of AWS EC2 Webserver

1. Launch EC2 instance with Amazon Linux OS  
   ![EC2 Instance Launch](images/1.png)

2. Name and download private key 'botdistrikt-assignment-loopback-api-webserver.pem' into `/Users/your-username/.ssh`  
   ![Download Key](images/2.png)

3. ![Step Image](images/3.png)

4. ![Step Image](images/4.png)

5. ![Step Image](images/5.png)

6. Set up EC2 instance on AWS  
   Connect to EC2 instance via `ssh -i botdistrikt-assignment-loopback-api-webserver.pem ec2-user@ec2-54-254-56-53.ap-southeast-1.compute.amazonaws.com` or set up a custom ssh config file with the ssh extension on vscode.

7. Install git  
   `sudo yum install git -y`

8. Go to development environment  
   `cd /home/ec2-user/`

9. Clone botdistrikt-assignment-loopback-api-webserver from github into the EC2 webserver dev env  
   `git clone https://github.com/malepsyche/botdistrikt-assignment-loopback-api-webserver.git`
