"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(3117),o=(a(7294),a(3905));const r={title:"Volumes and Storage",weight:30},l=void 0,s={unversionedId:"storage/storage",id:"storage/storage",title:"Volumes and Storage",description:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.",source:"@site/docs/storage/storage.md",sourceDirName:"storage",slug:"/storage/",permalink:"/storage/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage/storage.md",tags:[],version:"current",lastUpdatedAt:1690876146,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{title:"Volumes and Storage",weight:30},sidebar:"mySidebar",previous:{title:"Automated Upgrades",permalink:"/upgrades/automated"},next:{title:"Networking",permalink:"/networking/"}},i={},p=[{value:"What&#39;s different about K3s storage?",id:"whats-different-about-k3s-storage",level:2},{value:"Setting up the Local Storage Provider",id:"setting-up-the-local-storage-provider",level:2},{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3},{value:"Setting up Longhorn",id:"setting-up-longhorn",level:2},{value:"pvc.yaml",id:"pvcyaml-1",level:3},{value:"pod.yaml",id:"podyaml-1",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails."),(0,o.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage. For details on how PVs and PVCs work, refer to the official Kubernetes documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"storage.")),(0,o.kt)("p",null,"This page describes how to set up persistent storage with a local storage provider, or with ",(0,o.kt)("a",{parentName:"p",href:"#setting-up-longhorn"},"Longhorn.")),(0,o.kt)("h2",{id:"whats-different-about-k3s-storage"},"What's different about K3s storage?"),(0,o.kt)("p",null,'K3s removes several optional volume plugins and all built-in (sometimes referred to as "in-tree") cloud providers. We do this in order to achieve a smaller binary size and to avoid dependence on third-party cloud or data center technologies and services, which may not be available in many K3s use cases. We are able to do this because their removal affects neither core Kubernetes functionality nor conformance.'),(0,o.kt)("p",null,"The following volume plugins have been removed from K3s:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cephfs"),(0,o.kt)("li",{parentName:"ul"},"fc"),(0,o.kt)("li",{parentName:"ul"},"flocker"),(0,o.kt)("li",{parentName:"ul"},"git_repo"),(0,o.kt)("li",{parentName:"ul"},"glusterfs"),(0,o.kt)("li",{parentName:"ul"},"portworx"),(0,o.kt)("li",{parentName:"ul"},"quobyte"),(0,o.kt)("li",{parentName:"ul"},"rbd"),(0,o.kt)("li",{parentName:"ul"},"storageos")),(0,o.kt)("p",null,"Both components have out-of-tree alternatives that can be used with K3s: The Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/"},"Cloud Provider Interface (CPI)"),"."),(0,o.kt)("p",null,"Kubernetes maintainers are actively migrating in-tree volume plugins to CSI drivers. For more information on this migration, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/"},"here"),"."),(0,o.kt)("h2",{id:"setting-up-the-local-storage-provider"},"Setting up the Local Storage Provider"),(0,o.kt)("p",null,"K3s comes with Rancher's Local Path Provisioner and this enables the ability to create persistent volume claims out of the box using local storage on the respective node. Below we cover a simple example. For more information please reference the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage"},"here"),"."),(0,o.kt)("p",null,"Create a hostPath backed persistent volume claim and a pod to utilize it:"),(0,o.kt)("h3",{id:"pvcyaml"},"pvc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{id:"podyaml"},"pod.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n")),(0,o.kt)("p",null,"Apply the yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("p",null,"Confirm the PV and PVC are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",null,"The status should be Bound for each."),(0,o.kt)("h2",{id:"setting-up-longhorn"},"Setting up Longhorn"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Longhorn does not support ARM32.")),(0,o.kt)("p",null,"K3s supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"Longhorn"),", an open-source distributed block storage system for Kubernetes."),(0,o.kt)("p",null,"Below we cover a simple example. For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/"},"official documentation"),"."),(0,o.kt)("p",null,"Apply the longhorn.yaml to install Longhorn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.5.1/deploy/longhorn.yaml\n")),(0,o.kt)("p",null,"Longhorn will be installed in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"longhorn-system"),"."),(0,o.kt)("p",null,"Apply the yaml to create the PVC and pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("h3",{id:"pvcyaml-1"},"pvc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{id:"podyaml-1"},"pod.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n")),(0,o.kt)("p",null,"Confirm the PV and PVC are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",null,"The status should be Bound for each."))}u.isMDXComponent=!0}}]);