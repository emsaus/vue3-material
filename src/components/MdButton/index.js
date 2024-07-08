import material from '@/components/material'
import MdButton from './MdButton'

export default Vue => {
  material(Vue)
  Vue.component(MdButton.name, MdButton)
}
