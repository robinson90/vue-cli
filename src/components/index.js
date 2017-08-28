import Vue from 'vue'
import booklist from './booklist'
import comp from './comp'
import compd from './compd'
import list from './list'
const components = [booklist, comp, compd, list
]

components.map(component => {
  Vue.component(component.name, component)
})

export default {
  booklist, comp, list, compd
}
