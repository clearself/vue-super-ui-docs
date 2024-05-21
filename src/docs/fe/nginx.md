# Nginx 相关知识点

## nginx配置开机启动（Windows环境）

### 步骤

1. 载nginx，并解压 [nginx下载](https://nginx.org/en/download.html)
2. 配置nginx.conf，并启动Nginx
3. 开机自启动

## 1、下载nginx，并解压

![img](/nginx/nginx1.png)

## 2、配置nginx.conf，并启动Nginx

### nginx.conf配置

![img](/nginx/nginx2.png)

### 两种方法

1. 方法一：直接双击nginx.exe，双击后一个黑色弹窗一闪而过。
2. 方法二：打开cmd命令窗口，切换到nginx目录下，输入命令

```shell
start nginx
```

<!-- 启动成功，访问 http://localhost如下（端口改为了其他，默认80）： -->

### 停止nginx

```shell
nginx -s stop 
```

## 3、开机自启动

使用WinSW（[WinSW下载](https://pan.baidu.com/s/1WaevJy3RFepFyM-dT_QWOw ) 提取码：fql2），将exe和xml文件放到和jar包一个目录，并根据自己需要进行重命名，如下
![img](/nginx/nginx3.png)

xml文件配置如下：

```xml
<service>  
 <id>nginx</id>  
 <name>nginx</name>  
 <description>nginx</description>  
 <executable>D:\nginx\nginx-1.24.0\nginx-1.24.0\nginx.exe</executable>  
 <logpath>D:\nginx\nginx-1.24.0\nginx-1.24.0\logs\</logpath>  
 <logmode>roll</logmode>  
 <depend></depend>  
 <stopargument>-p D:\nginx\nginx-1.24.0\nginx-1.24.0\nginx.exe -s stop</stopargument>  
</service>
```

相关命令如下：

```shell
nginx-service.exe install #安装服务
nginx-service.exe uninstall#卸载服务
nginx-service.exe start #启动服务
nginx-service.exe stop #停止服务
nginx-service.exe restart #重启服务
nginx-service.exe status #查看状态

```

执行nginx-service.exe install命令安装注册服务：

![img](/nginx/nginx5.png)

将任务管理器中的nginx服务改成开机自动启动：
![img](/nginx/nginx6.png)
