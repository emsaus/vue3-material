import material from './components/material'
import * as MdComponents from './components'

let VueMaterial = {
  install(app){
    material(app)

    Object.values(MdComponents).forEach((MdComponent) => {
      app.use(MdComponent)
    })
  },
  version: '__VERSION__'
}

export default VueMaterial
