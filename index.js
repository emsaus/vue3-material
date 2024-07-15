import material from './src/components/material'
import * as MdComponents from './src/components'

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
