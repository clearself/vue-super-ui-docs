# 代码签名证书制作工具

## 对 Electron 应用进行代码签名，可以使用 makecert.exe 和 pvk2pfx.exe 两个工具

- [获取makecert.exe 和 pvk2pfx.exe工具](https://github.com/clearself/codeSign)

- 首先，可参考以下命令使用 MakeCert 工具得到 .pvk 和 .cer 文件：
  1. 以管理员身份运行cmd并进入makecert.exe 和 pvk2pfx.exe所在目录 运行下面命令

    ```bush
    makecert -n "CN=Root" -r -sv root.pvk root.cer
    ```

  2. 这个时候，会弹出提示框，首先给root.pvk文件设置私钥保护口令；

  ![img](/codeSign/codeSign1.png)

  3. 然后，再次输入这个口令用私钥(在root.pvk文件中）来给公钥（在root.cer文件中）加密。

  ![img](/codeSign/codeSign2.png)

- 然后，使用命令 pvk2pfx.exe 工具，即可得到代码签名证书文件 cert.pfx：

    ```bush
    pvk2pfx -pvk root.pvk -pi 532023 -spc root.cer -pfx root.pfx -f
    ```

- 注：532023 是root.pfx证书密码
