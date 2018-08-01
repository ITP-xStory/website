import React, { Component, ReactDOM } from 'react'
import Link from 'gatsby-link'
import * as THREE from 'three'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width:  800,
      height: 182
    }

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const width = 1000
    const height = 700

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshNormalMaterial()
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(cube)
    // renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    this.renderer.domElement.style.position = 'absolute'
    this.renderer.domElement.style.left = 0
    this.renderer.domElement.style.top = 0

    document
      .getElementById('gl_container')
      .appendChild(this.renderer.domElement)

    this.start()
  }
  
  onWindowResize(e){
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
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.cube.position.y = Math.sin(this.cube.rotation.y)

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        id="gl_container"
        style={{
          background: 'black',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            height: '32rem',
            padding: '13rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default Header
