---
sidebar_position: 2
---

# Docker部署

## 先决条件
* <a  href ="https://docs.docker.com/engine/install/">Docker 1.13.1+</a>
 
* <a  href ="https://docs.docker.com/compose/">Docker Compose 1.11.0+</a>

* <a  href ="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Jdk1.8</a>

* <a  href ="https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip">apache-maven-3.6.3</a>

## 安装jdk1.8
 官网<a  href ="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">下载Jdk1.8</a>地址:
 下载完成后，我们得到一个dmg的安装包，名称 jdk-8u211-macosx-x64.dmg,表示这是java8版本号为211的JDK安装包。

### 安装jdk和配置环境变量
下面主要介绍mac安装，windows可以进行网上搜索教程，请自行安装即可。
* 双击dmg安装包，点击JDK 8 Update 211.pkg
![DataIntegration Archite](/doc/image/dataintegration/jdk-install.png)
* 点击继续、安装，输入密码，安装成功
* 配置系统的环境变量
可以通过terminal终端上，执行如下命名找到jdk安装的位置。
```javascript
open /Library/Java/JavaVirtualMachines
```
jdk的真实主目录如下：
/Library/Java/JavaVirtualMachines/jdk1.8.0_211.jdk/Contents/Home
打开终端，进入当前用户的home目录：
```javascript
cd ~/
```
打开.bash_profile并编辑：
```javascript
open .bash_profile
```
在文件的末尾加入这一行语句：
```javascript
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_211.jdk/Contents/Home
```
在终端执行生效命令：
```javascript
source ~/.bash_profile
```
验证JDK1.8是否安装成功
> 终端输入：java -version,正确显示java版本号算安装成功

## Maven安装配置
下载<a  href ="https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip">apache-maven-3.6.3</a>
### 配置环境变量
将下载的mvn解压到自己目录
打开终端，进入当前用户的home目录：
```javascript
cd ~/
```
打开.bash_profile并编辑：
```javascript
open .bash_profile
```
在终端执行生效命令：
```javascript
source ~/.bash_profile
```
> 执行命令验证maven是否安装成功，终端输入：mvn -v

## docker及docker-compose
### 安装
下面主要介绍mac安装，windows可以进行网上搜索教程，请自行安装即可。

* 第1种：命令方式安装docker
用brew进行安装
```javascript
brew cask install docker
```
* 第2种：手动下载安装
如果需要手动下载，请点击以下链接下载  <a  href ="https://docs.docker.com/engine/install/">Install Docker Desktop on Mac</a> 。
如同 macOS 其它软件一样，安装也非常简单，双击下载的 .dmg 文件，然后将鲸鱼图标拖拽到 Application 文件夹即可
点击顶部状态栏中的鲸鱼图标会弹出操作菜单
### 验证
> 执行命令验证docker是否安装成功，终端输入： docker --version  
>
> 执行命令验证docker-compose是否安装成功，终端输入： docker-compose --version

## 启动应用
### 修改服务配置
> 将每个服务的**consul**的IP修改为本地IP
> 将每个服务的数据库IP修改为本地ip 端口改为3306
![DataIntegration Archite](/doc/image/dataintegration/server-yaml.png)
### 使用docker-compose执行启动服务
> 进入dataintegration项目根目录执行sh install.sh {hostIp},{hostIp}可以为本地IP
如下：
```javascript
sh install/install.sh 127.0.0.1
```
![DataIntegration Archite](/doc/image/dataintegration/docker-install.png)

可以查看项目/install/intaslldocker-compose.yaml,查看启动的服务端口
* 创建数据库

> intall装完后，会启动m**mysql**服务，机器ip:3306 root/123456
>
> 使用数据库连接工具连接数据库，创建数据库dataintegration，将项目/install/sql/dataintegration.sql导入数据库中，初始化数据库文件。


## 登录系统
访问前端页面：http://127.0.0.1:8081/dataintegration-ui/#/
默认的用户是admin，默认的密码是Prime@2020
![DataIntegration Archite](/doc/image/dataintegration/login.png)
## FAQ
### dataintegration-file-management启动后，office-home不存在,安装openoffice即可。
下面主要介绍mac安装，windows可以进行网上搜索教程，请自行安装即可。
下载地址：http://www.openoffice.org/zh-cn/download/
* 下载后自动安装
vim ~/.zshrc //有的可能是.bashrc文件
或者终端打开：open ~/.zshr
在.zshrc文件中增加
```javascript
export PATH=$PATH:/Applications/OpenOffice.app/Contents/MacOS
```
* 执行
```javascript
source ~/.zshrc 
source ~/.bash_profile
 ```
* 启动OpenOffice（将以服务的方式启动OpenOffice，并监听本机的8100端口
```javascript
soffice -headless -accept="socket,host=localhost,port=8100;urp;" -nofirststartwizard
 ```

