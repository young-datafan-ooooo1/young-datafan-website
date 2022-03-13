---
sidebar_position: 2
---

# 整体架构

![DataIntegration Archite](/doc/image/dataintegration/dataintegration-archite1.png)


## 输入输出源

* 依托与kettle自带的插件，支持jdbc/odbc、nosql、文本、kafka、大数据等组件数据的输入和输出。
* 扩展了ftp/s3文件读写插件。

## 前端

* 前端目前版本是基于vue2.js + ElementUI + jsplump等框架进行开发。
* 基于vue3 + Ant Design + g6框架升级的版本目前也在同步开发中了。

## 后端

由于公司采用springcloud微服务架构开发整个数据中台产品，数据集成属于其中的一个子模块，所以暂时还是采用springcloud的架构进行开源，便于版本统一。

## 其他组件

* 使用mysql作为元数据存储组件；
* 使用MinIO作为文件存储组件；
* 使用redis存储共享数据。
