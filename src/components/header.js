import React, { Component, ReactDOM } from 'react'
import Link from 'gatsby-link'
import * as THREE from 'three'
import '../layouts/index.css'

const GLTFLoader = require('../3rd-party/gltfloader.js')
GLTFLoader(THREE)

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 800,
      height: 182,
    }

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.modelLoader = new THREE.GLTFLoader()
  }

  componentDidMount() {
    const width = window.innerWidth
    const height = 576

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 10
    const renderer = new THREE.WebGLRenderer()
    const light = new THREE.PointLight(new THREE.Color('white'), 3.5)
    light.position.set(0, 1, 0)
    scene.add(light)

    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.light = light

    this.renderer.domElement.style.position = 'absolute'
    this.renderer.domElement.style.zIndex = '-1'
    this.renderer.domElement.style.left = 0
    this.renderer.domElement.style.top = 0

    this.modelLoader.load('./website/assets/shiffman.glb', asset => {
      this.shifmanModel = asset.scene
      console.log(this.shifmanModel)
      this.scene.add(this.shifmanModel)
    })

    document
      .getElementById('gl_container')
      .appendChild(this.renderer.domElement)

    this.start()
  }

  onWindowResize(e) {
    console.log(e)
  }

  componentWillUnmount() {
    this.stop()
    document
      .getElementById('gl_container')
      .removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)

    if (this.shifmanModel) {
      this.shifmanModel.rotation.y += 0.005
    }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        id="gl_container"
        style={{
          background: 'tranparent',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            height: '32rem',
            padding: '13rem 1.0875rem',
            zIndex: 10,
          }}
        >
          <Link
              to="/"
              className='noUnderline'
          >
            <h1 
              className='siteTitle'
              style={{ margin: 0 }}>
              {this.props.siteTitle}
            </h1>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
