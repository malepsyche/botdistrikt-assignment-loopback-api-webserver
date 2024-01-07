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


## PostgreSQL Database installation into server

#### Update Your Package Repository:
- ** `sudo yum update -y`

#### Find the available PostgreSQL packages
- ** `sudo yum list available | grep postgres`
- ** ```zsh
[ec2-user@ip-172-31-29-227 botdistrikt-assignment-task-manager-app]$ sudo yum list available | grep postgres
<br>
collectd-postgresql.x86_64                                        5.12.0-16.amzn2023.0.4                      amazonlinux     
<br>
postgresql-odbc.x86_64                                            13.01.0000-5.amzn2023.0.1                   amazonlinux     
<br>
postgresql-odbc-tests.x86_64                                      13.01.0000-5.amzn2023.0.1                   amazonlinux     
<br>
postgresql15.x86_64                                               15.4-1.amzn2023.0.1                         amazonlinux     
<br>
postgresql15-contrib.x86_64                                       15.4-1.amzn2023.0.1                         amazonlinux     
<br>
postgresql15-docs.x86_64                                          15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-llvmjit.x86_64                                       15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-plperl.x86_64                                        15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-plpython3.x86_64                                     15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-pltcl.x86_64                                         15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-private-devel.x86_64                                 15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-private-libs.x86_64                                  15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-server.x86_64                                        15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-server-devel.x86_64                                  15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-static.x86_64                                        15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-test.x86_64                                          15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-test-rpm-macros.noarch                               15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-upgrade.x86_64                                       15.4-1.amzn2023.0.1                         amazonlinux     
postgresql15-upgrade-devel.x86_64     
```
<br>

#### Install the Identified PostgreSQL Package
- ** Once you've identified the correct package name, you can install PostgreSQL like so (replace XX with the actual version number found):
- ** `sudo yum install -y postgresqlXX-server`
- ** We will be using v15: `sudo yum install -y postgresql15 postgresql15-server`