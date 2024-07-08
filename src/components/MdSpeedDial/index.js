import material from '@/components/material'
import MdSpeedDial from './MdSpeedDial'
import MdSpeedDialContent from './MdSpeedDialContent'
import MdSpeedDialTarget from './MdSpeedDialTarget'

export default Vue => {
  material(Vue)
  Vue.component(MdSpeedDial.name, MdSpeedDial)
  Vue.component(MdSpeedDialTarget.name, MdSpeedDialTarget)
  Vue.component(MdSpeedDialContent.name, MdSpeedDialContent)
}
