# msfs

Management system front-end service.

# 安装组件

```
cnpm install vue-router@4
cnpm install axios pinia element-plus less --save
cnpm install -D sass-embedded
```

# 部署

## docker 方式

准备一台 linux 系统的服务器，这里以 CentOS7 为例：

```
// 安装必要的工具
yum install -y lrzsz yum-utils net-tools vi zip device-mapper-persistent-data lvm2

// 关闭防火墙
systemctl disable --now firewalld
systemctl disable --now dnsmasq
setenforce 0
sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/sysconfig/selinux
sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config

// 关闭swap分区
swapoff -a && sysctl -w vm.swappiness=0
sed -ri '/^[^#]*swap/s@^@#@' /etc/fstab

// 配置内核参数
cat <<EOF> /etc/sysctl.d/docker.conf
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

sysctl --system

// 安装docker
方式一：参考官方文档：https://docs.docker.com/desktop/setup/install/linux/
方式二（使用国内的阿里云镜像源）：
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.cloud.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
yum install docker-ce-20.10.* docker-ce-cli-20.10.* containerd.io -y

// 开机启动docker
systemctl enable --now docker
```

编译打包程序镜像：

```
// 编译程序
npm run build

// 将编译后的dist文件夹拷贝到服务器

// 创建Dockerfile文件，并填写下面内容：
FROM nginx:alpine
COPY ./dist/ /usr/share/nginx/html

// 构建docker镜像
docker build -t frode123/msfs:v0.1.0 .

// 测试镜像是否正常，运行后访问服务器的8080端口
docker run -tid -p 8080:80 frode123/msfs:v0.1.0
```
