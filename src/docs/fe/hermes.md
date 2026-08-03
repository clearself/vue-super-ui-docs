# docker部署hermes具体操作流程

  docker 相关命令

```bash
docker compose up -d      # 后台启动
docker compose down       # 停止
docker compose logs -f    # 实时日志
docker compose pull       # 拉取最新镜像
docker ps                 #查看正字运行的容器
docker ps -a              #查看所有的容器
docker images             #查看镜像
docker rmi nousresearch/hermes-agent:main    #删除镜像  镜像名称:版本
docker rm -f hermes       #删除容器
docker pull nousresearch/hermes-agent:v2026.7.30  #拉取镜像
```

1. 创建项目目录和数据目录

```bash
cd ~/service
mkdir hermes
cd hermes
mkdir -p data/data
sudo chown -R 10000:10000 data
```

2. 创建docker-compose.yml文件

```yml
version: '3.8'                                                                                                                                                                           
                                                                                                                                                                                         
services:                                                                                                                                                                                
  hermes:                                                                                                                                                                                
    image: nousresearch/hermes-agent:latest                                                                                                                                              
    container_name: hermes                                                                                                                                                               
    restart: unless-stopped                                                                                                                                                              
    command: gateway run                                                                                                                                                                 
    ports:                                                                                                                                                                               
      - "8642:8642"                                                                                                                                                                      
    volumes:                                                                                                                                                                             
      - ./data/data:/opt/data                                                                                                                                                            
    networks:                                                                                                                                                                            
      - hermes-net                                                                                                                                                                       
    environment:                                                                                                                                                                         
      - TZ=Asia/Shanghai                                                                                                                                                                 
                                                                                                                                                                                         
    deploy:                                                                                                                                                                              
      resources:                                                                                                                                                                         
        limits:                                                                                                                                                                          
          cpus: "2.0"                                                                                                                                                                    
          memory: 4G                                                                                                                                                                     
                                                                                                                                                                                         
  dashboard:                                                                                                                                                                             
    image: nousresearch/hermes-agent:latest                                                                                                                                              
    container_name: hermes-dashboard                                                                                                                                                     
    restart: unless-stopped                                                                                                                                                              
    command: dashboard --host 0.0.0.0 --port 9119 --insecure --no-open                                                                                                                   
    ports:                                                                                                                                                                               
      - "9119:9119"                                                                                                                                                                      
    volumes:                                                                                                                                                                             
      - ./data/data:/opt/data                                                                                                                                                            
    environment:                                                                                                                                                                         
      - GATEWAY_HEALTH_URL=http://hermes:8642                                                                                                                                            
      - TZ=Asia/Shanghai                                                                                                                                                                 
    networks:                                                                                                                                                                            
      - hermes-net                                                                                                                                                                       
    depends_on:                                                                                                                                                                          
      - hermes                                                                                                                                                                           
    deploy:                                                                                                                                                                              
      resources:                                                                                                                                                                         
        limits:                                                                                                                                                                          
          cpus: "0.5"                                                                                                                                                                    
          memory: 512M                                                                                                                                                                   
                                                                                                                                                                                         
networks:                                                                                                                                                                                
  hermes-net:                                                                                                                                                                            
    driver: bridge 
```

3. 启动容器

```bash

docker-compose up -d    # 启动
docker-compose logs -f  # 查看日志
docker-compose down     # 停止

```
  正常输出如下：

  ```bash
[+] up 3/3
 ✔ Network docker-hermes_hermes-net  Created
 ✔ Container hermes                  Created
 ✔ Container hermes-dashboard        Created
  ```

  4.拉取hermes镜像

  拉取镜像

  ```bash
docker pull nousresearch/hermes-agent:v2026.7.30 
  ```

  创建容器 hermes 将docker中的数据目录映射的宿主机的/data/hermes/hermes01 
  多个容器创建  更改hermes为hermes-fly;hermes01为hermes01-fly执行命令即可

  使用镜像nousresearch/hermes-agent:v2026.7.30

```bash
docker run -d \
  --name hermes \
  --restart=unless-stopped \
  -v /data/hermes/hermes01:/opt/data \
  -e TZ=Asia/Shanghai \
  nousresearch/hermes-agent:v2026.7.30  \
  gateway run

  docker exec -it hermes bash   # 进入容器
  uv pip list | grep lark       # 检查lark包  是否有 飞书、企微、全部所有的包

  uv sync --extra feishu --index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 飞书
  uv sync --extra wecom  --index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 企微
  uv sync --all-extras --index-url https://pypi.tuna.tsinghua.edu.cn/simple    # 全部所有的包

  hermes setup        # 初始化  需要点击打开给出的连接并登录进去
  hermes model        # 选择大语言模型服务商与对应模型
  hermes setup gateway # 配置网关 飞书、企微、全部等
  hermes gateway restart # 重启网关
  ```

5.同一个hermes容器内多个Profile

```bash
hermes profile create coder       # 创建 profile + "coder" 命令别名
coder setup                       # 配置API键和model
coder chat                        # 开始聊天



coder chat                    # 与编码员 agent 聊天
coder setup                   # 配置编码器的设置
coder gateway start           # 启动编码器的gateway
coder doctor                  # 检查编码器的健康状况
coder skills list             # 列出编码器的 skills
coder config set model.model anthropic/claude-sonnet-4




常用命令

# 列出所有 Profile 及状态
hermes profile list

# 查看某个 Profile 的详细信息
hermes profile show coder

# 重命名（自动更新别名和服务）
hermes profile rename coder dev-bot

# 导出为 coder.tar.gz
hermes profile export coder

# 导出 coder 这个profile 
hermes profile export coder -o /opt/data/coder.tar.gz                                                                                                             
可以随时迁移 coder这个 profile    给到任何服务器   把 coder.tar.gz 包 复制过去就行                                       

# 从存档导入
hermes profile import coder.tar.gz

# 删除（需输入名称确认）
hermes profile delete coder

# 跳过确认直接删除
hermes profile delete coder --yes

# ─── Profile 管理 ───────────────────────────────────────────
hermes profile create <name>                    # 全新创建
hermes profile create <name> --clone            # 克隆配置
hermes profile create <name> --clone-all        # 完整克隆
hermes profile create <name> --clone-from <src> # 从指定档案克隆
hermes profile list                             # 列出所有
hermes profile show <name>                      # 查看详情
hermes profile use <name>                       # 设为默认
hermes profile rename <old> <new>              # 重命名
hermes profile export <name>                    # 导出备份
hermes profile import <file>                    # 导入备份
hermes profile delete <name>                    # 删除

# Profile 命令别名（创建后自动可用）
<name> chat / setup / gateway start / skills list / doctor

# ─── 发行版 ──────────────────────────────────────────────────
hermes profile install github.com/user/repo --alias  # 安装
hermes profile update <name>                         # 更新



/opt/data/logs/gateways/wangyanan/current   飞书网关日志 


 uv sync --extra feishu    安装飞书
 
 # 国内源下载  必须在/opt/hermes 目录才能下载
  uv sync --extra feishu --index-url https://pypi.tuna.tsinghua.edu.cn/simple  
 
  uv sync --extra messaging   企微插件
  
  uv sync --extra wecom  --index-url https://pypi.tuna.tsinghua.edu.cn/simple   安装企微插件
  
  uv sync --all-extras --index-url https://pypi.tuna.tsinghua.edu.cn/simple #同步所有扩展
  
  在 .env 配置文件中设置 企微群聊策略  企微群中可以@机器人对话
 cat /opt/data/.env | grep WECOM_GROUP_POLICY=open                                                                                                                 
WECOM_GROUP_POLICY=open          
 
 
 hermes 创建 agent  得先启动 才 gateway restart 网关
 
```
  

