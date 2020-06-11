<template>
    <div class="Three" ref= "ThreeContainer">
        three
    </div>
</template>

<script>
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
//   BoxGeometry,
  BoxBufferGeometry,
  MeshBasicMaterial,
//   MeshNormalMaterial,
//   MeshLambertMaterial,
  Mesh
} from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
    name:"three",
    data(){
        return {
            scene: null,
            camera: null,
            renderer: null,
            mesh:null
        }
    },
    methods:{
        ThreeInit(){
            //获取dom容器
            let container = this.$refs.ThreeContainer

            //初始化渲染器
            this.renderer = new WebGLRenderer({antialias:true})
            this.renderer.setSize(container.clientWidth, container.clientHeight)
            container.appendChild(this.renderer.domElement)

            //初始化场景
            this.scene = new Scene()

            //初始化相机
            this.camera = new PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
            this.camera.position.set(0, 0, 100)

            //创建物体
            let geometry = new BoxBufferGeometry(20, 20, 20)
            // let material = new MeshNormalMaterial()
            let material = new MeshBasicMaterial( {color: 0x00ff00} );
            this.mesh = new Mesh(geometry, material)
            this.scene.add(this.mesh)
        },

        ThreeAnimate(){
            requestAnimationFrame(this.ThreeAnimate) //js原生函数
            this.mesh.rotation.x += 0.01
            this.mesh.rotation.y += 0.02
            this.renderer.render(this.scene, this.camera)
        }
    },
    created(){},
    mounted(){
        console.log(this.$refs.ThreeContainer.clientWidth )
        this.ThreeInit()
        this.ThreeAnimate()
    },
    beforeDestroy(){
        // this.running = false
       this.renderer.dispose();
       this.scene.dispose();
    //    this.controls.dispose();
    }

}
</script>

<style scoped>
.Three{
    height: 100%;
}
canvas {
            width: 100%;
            height: 100%;
            display: block;
        }
</style>