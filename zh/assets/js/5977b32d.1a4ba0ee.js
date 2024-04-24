"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[681],{3571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=s(5893),a=s(1151);const l={title:"Cluster Load Balancer"},t=void 0,o={id:"datastore/cluster-loadbalancer",title:"Cluster Load Balancer",description:"This section describes how to install an external load balancer in front of a High Availability (HA) K3s cluster's server nodes. Two examples are provided: Nginx and HAProxy.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/cluster-loadbalancer.md",sourceDirName:"datastore",slug:"/datastore/cluster-loadbalancer",permalink:"/zh/datastore/cluster-loadbalancer",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/cluster-loadbalancer.md",tags:[],version:"current",lastUpdatedAt:1713976913e3,frontMatter:{title:"Cluster Load Balancer"},sidebar:"mySidebar",previous:{title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93",permalink:"/zh/datastore/ha"},next:{title:"\u5347\u7ea7",permalink:"/zh/upgrades/"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Load Balancer",id:"setup-load-balancer",level:2},{value:"Nginx Load Balancer",id:"nginx-load-balancer",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{TabItem:s,Tabs:l}=n;return s||x("TabItem",!0),l||x("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section describes how to install an external load balancer in front of a High Availability (HA) K3s cluster's server nodes. Two examples are provided: Nginx and HAProxy."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["External load-balancers should not be confused with the embedded ServiceLB, which is an embedded controller that allows for use of Kubernetes LoadBalancer Services without deploying a third-party load-balancer controller. For more details, see ",(0,r.jsx)(n.a,{href:"/zh/networking/networking-services#service-load-balancer",children:"Service Load Balancer"}),"."]}),(0,r.jsx)(n.p,{children:"External load-balancers can be used to provide a fixed registration address for registering nodes, or for external access to the Kubernetes API Server. For exposing LoadBalancer Services, external load-balancers can be used alongside or instead of ServiceLB, but in most cases, replacement load-balancer controllers such as MetalLB or Kube-VIP are a better choice."})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"All nodes in this example are running Ubuntu 20.04."}),"\n",(0,r.jsxs)(n.p,{children:["For both examples, assume that a ",(0,r.jsx)(n.a,{href:"/zh/datastore/ha-embedded",children:"HA K3s cluster with embedded etcd"})," has been installed on 3 nodes."]}),"\n",(0,r.jsx)(n.p,{children:"Each k3s server is configured with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/k3s/config.yaml\ntoken: lb-cluster-gd\ntls-san: 10.10.10.100\n"})}),"\n",(0,r.jsx)(n.p,{children:"The nodes have hostnames and IPs of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["server-1: ",(0,r.jsx)(n.code,{children:"10.10.10.50"})]}),"\n",(0,r.jsxs)(n.li,{children:["server-2: ",(0,r.jsx)(n.code,{children:"10.10.10.51"})]}),"\n",(0,r.jsxs)(n.li,{children:["server-3: ",(0,r.jsx)(n.code,{children:"10.10.10.52"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Two additional nodes for load balancing are configured with hostnames and IPs of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["lb-1: ",(0,r.jsx)(n.code,{children:"10.10.10.98"})]}),"\n",(0,r.jsxs)(n.li,{children:["lb-2: ",(0,r.jsx)(n.code,{children:"10.10.10.99"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Three additional nodes exist with hostnames and IPs of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["agent-1: ",(0,r.jsx)(n.code,{children:"10.10.10.101"})]}),"\n",(0,r.jsxs)(n.li,{children:["agent-2: ",(0,r.jsx)(n.code,{children:"10.10.10.102"})]}),"\n",(0,r.jsxs)(n.li,{children:["agent-3: ",(0,r.jsx)(n.code,{children:"10.10.10.103"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup-load-balancer",children:"Setup Load Balancer"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{value:"HAProxy",default:!0,children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://www.haproxy.org/",children:"HAProxy"})," is an open source option that provides a TCP load balancer. It also supports HA for the load balancer itself, ensuring redundancy at all levels. See ",(0,r.jsx)(n.a,{href:"http://docs.haproxy.org/2.8/intro.html",children:"HAProxy Documentation"})," for more info."]}),(0,r.jsxs)(n.p,{children:["Additionally, we will use KeepAlived to generate a virtual IP (VIP) that will be used to access the cluster. See ",(0,r.jsx)(n.a,{href:"https://www.keepalived.org/manpage.html",children:"KeepAlived Documentation"})," for more info."]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install HAProxy and KeepAlived:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install haproxy keepalived\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Add the following to ",(0,r.jsx)(n.code,{children:"/etc/haproxy/haproxy.cfg"})," on lb-1 and lb-2:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"frontend k3s-frontend\n    bind *:6443\n    mode tcp\n    option tcplog\n    default_backend k3s-backend\n\nbackend k3s-backend\n    mode tcp\n    option tcp-check\n    balance roundrobin\n    default-server inter 10s downinter 5s\n    server server-1 10.10.10.50:6443 check\n    server server-2 10.10.10.51:6443 check\n    server server-3 10.10.10.52:6443 check\n"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Add the following to ",(0,r.jsx)(n.code,{children:"/etc/keepalived/keepalived.conf"})," on lb-1 and lb-2:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"vrrp_script chk_haproxy {\n    script 'killall -0 haproxy' # faster than pidof\n    interval 2\n}\n\nvrrp_instance haproxy-vip {\n   interface eth1\n    state <STATE> # MASTER on lb-1, BACKUP on lb-2\n    priority <PRIORITY> # 200 on lb-1, 100 on lb-2\n\n    virtual_router_id 51\n\n    virtual_ipaddress {\n        10.10.10.100/24\n    }\n\n    track_script {\n        chk_haproxy\n    }\n}\n"})}),(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Restart HAProxy and KeepAlived on lb-1 and lb-2:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"systemctl restart haproxy\nsystemctl restart keepalived\n"})}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"On agent-1, agent-2, and agent-3, run the following command to install k3s and join the cluster:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=lb-cluster-gd sh -s - agent --server https://10.10.10.100:6443\n"})}),(0,r.jsxs)(n.p,{children:["You can now use ",(0,r.jsx)(n.code,{children:"kubectl"})," from server node to interact with the cluster."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@server-1 $ k3s kubectl get nodes -A\nNAME       STATUS   ROLES                       AGE     VERSION\nagent-1    Ready    <none>                      32s     v1.27.3+k3s1\nagent-2    Ready    <none>                      20s     v1.27.3+k3s1\nagent-3    Ready    <none>                      9s      v1.27.3+k3s1\nserver-1   Ready    control-plane,etcd,master   4m22s   v1.27.3+k3s1\nserver-2   Ready    control-plane,etcd,master   3m58s   v1.27.3+k3s1\nserver-3   Ready    control-plane,etcd,master   3m12s   v1.27.3+k3s1\n"})})]}),(0,r.jsxs)(s,{value:"Nginx",children:[(0,r.jsx)(n.h2,{id:"nginx-load-balancer",children:"Nginx Load Balancer"}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Nginx does not natively support a High Availability (HA) configuration. If setting up an HA cluster, having a single load balancer in front of K3s will reintroduce a single point of failure."})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://nginx.org/",children:"Nginx Open Source"})," provides a TCP load balancer. See ",(0,r.jsx)(n.a,{href:"https://nginx.org/en/docs/http/load_balancing.html",children:"Using nginx as HTTP load balancer"})," for more info."]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.code,{children:"nginx.conf"})," file on lb-1 with the following contents:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"events {}\n\nstream {\n  upstream k3s_servers {\n    server 10.10.10.50:6443;\n    server 10.10.10.51:6443;\n    server 10.10.10.52:6443;\n  }\n\n  server {\n    listen 6443;\n    proxy_pass k3s_servers;\n  }\n}\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Run the Nginx load balancer on lb-1:"}),"\n"]}),(0,r.jsx)(n.p,{children:"Using docker:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d --restart unless-stopped \\\n    -v ${PWD}/nginx.conf:/etc/nginx/nginx.conf \\\n    -p 6443:6443 \\\n    nginx:stable\n"})}),(0,r.jsxs)(n.p,{children:["Or ",(0,r.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/",children:"install nginx"})," and then run:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp nginx.conf /etc/nginx/nginx.conf\nsystemctl start nginx\n"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"On agent-1, agent-2, and agent-3, run the following command to install k3s and join the cluster:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=lb-cluster-gd sh -s - agent --server https://10.10.10.99:6443\n"})}),(0,r.jsxs)(n.p,{children:["You can now use ",(0,r.jsx)(n.code,{children:"kubectl"})," from server node to interact with the cluster."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@server1 $ k3s kubectl get nodes -A\nNAME       STATUS   ROLES                       AGE     VERSION\nagent-1    Ready    <none>                      30s     v1.27.3+k3s1\nagent-2    Ready    <none>                      22s     v1.27.3+k3s1\nagent-3    Ready    <none>                      13s     v1.27.3+k3s1\nserver-1   Ready    control-plane,etcd,master   4m49s   v1.27.3+k3s1\nserver-2   Ready    control-plane,etcd,master   3m58s   v1.27.3+k3s1\nserver-3   Ready    control-plane,etcd,master   3m16s   v1.27.3+k3s1\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var r=s(7294);const a={},l=r.createContext(a);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);