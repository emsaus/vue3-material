import { createApp } from 'vue'
import material from './src/components/Material_lib'
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
