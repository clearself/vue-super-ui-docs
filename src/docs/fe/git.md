# git 常用命令

```shell
git clone <url> ：克隆代码
git add <file>：添加文件到暂存区
git add .：要添加当前目录中的所有文件
git commit -m "<message>"：提交更改
git branch 分支名称 ：显示分支
git branch <branch>：创建一个本地分支
git checkout -b <branch>：创建一个分支并使用 checkout 命令切换到它
git push origin 分支名称:分支名称：创建远程分支并将本地分支代码推到远程分支
git push origin --delete 分支名称：删除远程分支

git tag -a 'tag-20240315' -m '版本迭代'   给当前分支创建tag 标签
git tag 查看tag 标签
git push origin tag-20240315 将创建的tag-20240313 tag标签 提交远程服务
git checkout -b feature-branch origin/feature-branch  将远程分支克隆到本地，并切换到该分支
```
