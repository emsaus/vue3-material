import material from '@/components/material'
import MdDialog from './MdDialog'
import MdDialogActions from './MdDialogActions'
import MdDialogContent from './MdDialogContent'
import MdDialogTitle from './MdDialogTitle'

export default Vue => {
  material(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}
