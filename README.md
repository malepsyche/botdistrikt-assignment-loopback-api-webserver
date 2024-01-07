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


## Botdistrikt Interview Assignment
<br>

## Prerequisites
- AWS Account
<br>

## Server (AWS EC2)
- **Frontend**: EmberJS
- **Backend API**: Loopback
- **Database**: PostgreSQL
- **Environment management**: AWS Secrets Manager
<br>

## Setup of AWS EC2 instance

#### 1. Launch EC2 instance with Amazon Linux OS  
![EC2 Instance Launch](images/1.png)
<br>

#### 2. Create new key-pair
![Download Key](images/2.png)
<br> 

#### 3. Name and download private key 'botdistrikt-assignment-loopback-api-webserver.pem' into `/Users/your-username/.ssh` 
![Step Image](images/3.png)
<br> 

#### 4. 
![Step Image](images/4.png)
<br> 

#### 5. 
![Step Image](images/5.png)
<br> 

#### 6. Set up EC2 instance on AWS  
Connect to EC2 instance via `ssh -i botdistrikt-assignment-loopback-api-webserver.pem ec2-user@ec2-54-254-56-53.ap-southeast-1.compute.amazonaws.com` or set up a custom ssh config file with the ssh extension on vscode.
<br> 

#### 7. Install git  
`sudo yum install git -y`
<br> 

#### 8. Go to development environment  
`cd /home/ec2-user/`
<br> 

#### 9. Clone botdistrikt-assignment-loopback-api-webserver from github into the EC2 webserver dev env  
`git clone https://github.com/malepsyche/botdistrikt-assignment-loopback-api-webserver.git`
<br> 
<br>

## NodeJS Installation into server

#### 1. Install node version manager (nvm)
- **Version manager for nodejs**
- **Note: Package files are installed into server root directory ~/.nvm instead of the application directory**
- **[Full nvm documentation including installation](https://github.com/nvm-sh/nvm#installing-and-updating)**

```zsh
# Download nvm.sh script into ~/.nvm/nvm.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Execute nvm.sh script
. ~/.nvm/nvm.sh
# Install node v12
nvm install 12
# Install Loopback 3 CLI globally using npm
npm install -g loopback-cli
```
<br>


