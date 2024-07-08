import material from '@/components/material'
import MdRipple from '@/components/MdRipple/MdRipple'
import MdWave from '@/components/MdRipple/MdWave'

export default Vue => {
  material(Vue)
  Vue.component(MdRipple.name, MdRipple)
  Vue.component(MdWave.name, MdWave)
}
