# Docker 安装及容器部署


## 安装

  - 使用 rpm 存储库安装

  - 在新主机上首次安装 Docker 引擎之前，需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。


  - 设置存储库

  - 安装 yum-utils 软件包（提供 yum-config-manager 实用程序）并设置存储库。

```shell
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装 Docker 引擎 : Docker Engine、containerd 和 Docker Compose：

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- 启动 Docker

```shell
sudo systemctl start docker
```

- docker 常用命令

```shell
sudo service docker start  // 启动docker服务
sudo service docker stop   //停止docker服务
sudo docker info  // 查看docker相关信息
sudo docker stats   // 检查docker 守护进程是否在运行
sudo docker ps -a   // 列出所有容器
sudo docker ps -l   //最后一次运行的容器
sudo docker start/stop/restart 容器名(也可以使用容器ID)   // 启动/停止/重新启动容器
sudo docker images    // 列出镜像
sudo docker pull 镜像名    // 拉取镜像
sudo  docker rm $(docker ps -a -q)  // 删除所有容器
sudo docker rm 容器名   // 删除单个容器
`
