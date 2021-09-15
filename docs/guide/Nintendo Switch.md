---
title: Nintendo Switch
---

## 获取 Session Token 和 Device ID

获取 Session Token 和 Device ID 需要抓包，高版本 Android 抓包有证书相关的问题，建议使用模拟器进行抓包

以下以 [MUMU模拟器](https://mumu.163.com/) 为例

抓包使用 [mitmproxy](https://mitmproxy.org/)，下载后安装即可，运行 ```mitmweb``` ，将会自动打开一个浏览器页面，先放在那里，稍后用到

<a data-fancybox title="" href="/Snipaste_2021-09-15_21-33-29.png">![](/Snipaste_2021-09-15_21-33-29.png)</a>

MUMU 模拟器打开后先在 ```KK谷歌助手``` 中安装谷歌套件，安装完成后打电脑目录 ```C:\Users\username\.mitmproxy``` ，将里面的文件传入模拟器

<a data-fancybox title="" href="/Snipaste_2021-09-15_21-45-05.png">![](/Snipaste_2021-09-15_21-45-05.png)</a>

然后打开模拟器中的 ```设置 - 安全``` ，在 ```存储凭据``` 中点击 ```从SD卡安装``` ，安装复制过去的证书文件

<a data-fancybox title="" href="/Snipaste_2021-09-15_21-48-27.png">![](/Snipaste_2021-09-15_21-48-27.png)</a>

安装完成后，打开 ```WLAN``` ，长按后在弹出框中选择 ```修改网络```

<a data-fancybox title="" href="/Snipaste_2021-09-15_20-05-53.png">![](/Snipaste_2021-09-15_20-05-53.png)</a>

```代理服务器主机名``` 在 ```CMD``` 中输入 ```ipconfig``` 命令查看，请根据自己的电脑网卡判断，图中仅供参考

<a data-fancybox title="" href="/Snipaste_2021-09-15_21-53-24.png">![](/Snipaste_2021-09-15_21-53-24.png)</a>

```代理服务器端口``` 填入 ```mitmproxy``` 监听端口，默认为 8080

<a data-fancybox title="" href="/Snipaste_2021-09-15_20-07-35.png">![](/Snipaste_2021-09-15_20-07-35.png)</a>

设置完毕后可以尝试用浏览器访问百度等网站，此时 ```mitmproxy``` 界面应该会有抓包的显示

<a data-fancybox title="" href="/Snipaste_2021-09-15_21-57-18.png">![](/Snipaste_2021-09-15_21-57-18.png)</a>

打开 ```Switch Parental Controls``` （自行寻找 APK 安装），登陆后刷新，如果无法登录可以先关掉模拟器的代理，使用科学上网登录成功后再开代理，重复多刷新几次也有几率刷到

执行完以上操作后，在 ```mitmproxy``` 中搜索 ```https://accounts.nintendo.com/connect/1.0.0/api/token```，如图即为 ```Session Token```

<a data-fancybox title="" href="/Snipaste_2021-09-15_22-03-00.png">![](/Snipaste_2021-09-15_22-03-00.png)</a>

搜索 ```https://api-lp1.pctl.srv.nintendo.net/moon/v1/devices/```，链接后的即为 ```Device ID```

<a data-fancybox title="" href="/Snipaste_2021-09-15_22-04-34.png">![](/Snipaste_2021-09-15_22-04-34.png)</a>