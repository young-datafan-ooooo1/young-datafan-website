---
sidebar_position: 2
---

# Docker部署

## 先决条件
* <a  href ="https://docs.docker.com/engine/install/">Docker 1.13.1+</a>
 
* <a  href ="https://docs.docker.com/compose/">Docker Compose 1.11.0+</a>

## 如何使用 Docker 镜像
有 3 种方式可以快速试用 DolphinScheduler

**一、以 docker-compose 的方式启动 DolphinScheduler (推荐)**
这种方式需要先安装 <a  href ="https://docs.docker.com/compose/">docker-compose</a>, docker-compose 的安装网上已经有非常多的资料，请自行安装即可
对于 Windows 7-10，你可以安装<a  href ="https://github.com/docker-archive/toolbox/releases">Docker Toolbox</a>。对于 Windows 10 64-bit，
你可以安装 <a  href ="https://docs.docker.com/desktop/windows/install/"> Docker Desktop</a>，并且注意<a  href ="https://docs.docker.com/desktop/windows/install/">系统要求</a>

##### 1、请配置内存不少于 4GB
对于 Mac 用户 点击 Docker Desktop -> Preferences -> Resources -> Memory

对于 Windows Docker Toolbox 用户，有两项需要配置：

* **内存** ：打开 Oracle VirtualBox Manager，如果你双击 Docker Quickstart Terminal 并成功运行 Docker Toolbox，你将会看到一个名为 default 的虚拟机. 点击 设置 -> 系统 -> 主板 -> 内存大小
* **端口转发**：点击 设置 -> 网络 -> 高级 -> 端口转发 -> 添加. 名称，主机端口 和 子系统端口 都填写 12345，不填 主机IP 和 子系统IP

对于 Windows Docker Desktop 用户

* **Hyper-V模式** ：点击 Docker Desktop -> Settings -> Resources -> Memory
* **WSL 2模式** ：参考 <a  href ="https://docs.microsoft.com/zh-cn/windows/wsl/wsl-config#configure-global-options-with-wslconfig"> WSL 2 utility VM</a>


#### 2、下载源码包
请下载源码包 apache-dolphinscheduler-2.0.5-src.tar.gz，下载地址: <a  href ="https://dolphinscheduler.apache.org/zh-cn/download/download.html">下载</a>

#### 3、拉取镜像并启动服务
> 对于 Mac 和 Linux 用户，打开**Terminal** 
>对于 Windows Docker Toolbox 用户，打开 **Docker Quickstart Terminal** 对于 Windows Docker Desktop 用户，打开**Windows PowerShell**  

```javascript
$ tar -zxvf apache-dolphinscheduler-2.0.5-src.tar.gz
$ cd apache-dolphinscheduler-2.0.5-src/docker/docker-swarm
$ docker pull dolphinscheduler.docker.scarf.sh/apache/dolphinscheduler:latest
$ docker-compose up -d

```
> PowerShell 应该使用 cd apache-dolphinscheduler-2.0.5-src\docker\docker-swarm

**mysql** (用户 stelladp, 密码 123456, 数据库 dataintegration) 和 **Consul** 服务将会默认启动


## 登录系统
访问前端页面：http://localhost:8081/dataintegration-ui/#/，如果有需要请修改成对应的 IP 地址

默认的用户是admin，默认的密码是Prime@2020

## 支持矩阵


## FAQ
