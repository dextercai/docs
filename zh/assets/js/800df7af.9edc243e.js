"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1290],{3910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"Multus and IPAM plugins"},a=void 0,l={id:"networking/multus-ipams",title:"Multus and IPAM plugins",description:"Multus CNI is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/networking/multus-ipams.md",sourceDirName:"networking",slug:"/networking/multus-ipams",permalink:"/zh/networking/multus-ipams",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/multus-ipams.md",tags:[],version:"current",lastUpdatedAt:1713976913e3,frontMatter:{title:"Multus and IPAM plugins"},sidebar:"mySidebar",previous:{title:"Distributed hybrid or multicloud cluster",permalink:"/zh/networking/distributed-multicloud"},next:{title:"Networking Services",permalink:"/zh/networking/networking-services"}},o={},c=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components},{TabItem:t,Tabs:i}=n;return t||h("TabItem",!0),i||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni",children:"Multus CNI"})," is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV."]}),"\n",(0,s.jsx)(n.p,{children:"Multus can not be deployed standalone. It always requires at least one conventional CNI plugin that fulfills the Kubernetes cluster network requirements. That CNI plugin becomes the default for Multus, and will be used to provide the primary interface for all pods. When deploying K3s with default options, that CNI plugin is Flannel."}),"\n",(0,s.jsx)(n.p,{children:"To deploy Multus, we recommend using the following helm repo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm repo add rke2-charts https://rke2-charts.rancher.io\nhelm repo update\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, to set the necessary configuration for it to work, a correct config file must be created. The configuration will depend on the IPAM plugin to be used, i.e. how your pods using Multus extra interfaces will configure the IPs for those extra interfaces. There are three options: host-local, DHCP Daemon and whereabouts:"}),"\n",(0,s.jsxs)(i,{groupId:"MultusIPAMplugins",children:[(0,s.jsxs)(t,{value:"host-local",default:!0,children:[(0,s.jsxs)(n.p,{children:["The host-local IPAM plugin allocates ip addresses out of a set of address ranges. It stores the state locally on the host filesystem, hence ensuring uniqueness of IP addresses on a single host. Therefore, we don't recommend it for multi-node clusters. This IPAM plugin does not require any extra deployment. For more information: ",(0,s.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/host-local/",children:"https://www.cni.dev/plugins/current/ipam/host-local/"}),"."]}),(0,s.jsxs)(n.p,{children:["To use the host-local plugin, please create a file called ",(0,s.jsx)(n.code,{children:"multus-values.yaml"})," with the following content:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"config:\n  cni_conf:\n    confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n    binDir: /var/lib/rancher/k3s/data/current/bin/\n    kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\n"})})]}),(0,s.jsxs)(t,{value:"Whereabouts",default:!0,children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/whereabouts",children:"Whereabouts"})," is an IP Address Management (IPAM) CNI plugin that assigns IP addresses cluster-wide."]}),(0,s.jsx)(n.p,{children:"To use the Whereabouts IPAM plugin, please create a file called multus-values.yaml with the following content:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"config:\n  cni_conf:\n    confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n    binDir: /var/lib/rancher/k3s/data/current/bin/\n    kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\nrke2-whereabouts:\n  fullnameOverride: whereabouts\n  enabled: true\n  cniConf:\n    confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n    binDir: /var/lib/rancher/k3s/data/current/bin/\n"})})]}),(0,s.jsxs)(t,{value:"Multus DHCP daemon",default:!0,children:[(0,s.jsxs)(n.p,{children:["The dhcp IPAM plugin can be deployed when there is already a DHCP server running on the network. This daemonset takes care of periodically renewing the DHCP lease. For more information please check the official docs of ",(0,s.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/dhcp/",children:"DHCP IPAM plugin"}),"."]}),(0,s.jsx)(n.p,{children:"To use this DHCP plugin, please create a file called multus-values.yaml with the following content:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"config:\n  cni_conf:\n    confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n    binDir: /var/lib/rancher/k3s/data/current/bin/\n    kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\nmanifests:\n  dhcpDaemonSet: true\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["After creating the ",(0,s.jsx)(n.code,{children:"multus-values.yaml"})," file, everything is ready to install Multus:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm install multus rke2-charts/rke2-multus -n kube-system --kubeconfig /etc/rancher/k3s/k3s.yaml --values multus-values.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will create a daemonset called multus which will deploy multus and all regular cni binaries in /var/lib/rancher/k3s/data/current/ (e.g. macvlan) and the correct Multus config in /var/lib/rancher/k3s/agent/etc/cni/net.d"}),"\n",(0,s.jsxs)(n.p,{children:["For more information about Multus, refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs",children:"multus-cni"})," documentation."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);