# puppeteer导出pdf部署注意事项

## 安装chrome 依次执行下列命令(所有无头浏览器都需要安装)

```sh
# 下载所需依赖
yum install -y gcc gcc-c++ make gd-devel libxml2-devel libcurl-devel libjpeg-devel libpng-devel openssl-devel wget

# 远程下载chrome包
wget http://dist.control.lth.se/public/CentOS-7/x86_64/google.x86_64/google-chrome-stable-124.0.6367.118-1.x86_64.rpm

# 本地下载安装chrome包
yum install google-chrome-stable-124.0.6367.118-1.x86_64.rpm  -y
```

## 安装字体到服务器

[Linux系统安装中文字体相关链接](https://blog.csdn.net/Darling_qi/article/details/120485688)

[中文字体下载](/fonts/msyh.zip)

```sh
  # 查看安装的字体
  fc-list

  # 查看安装的中文字体
  fc-list :lang=zh
```
