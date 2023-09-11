import canvas from '../../styles/canvas.css'
import { btn, canv } from '../../utils/HTMLTemplate';

export default function Canvas() {
  return canv({ id: 'canvasbasic', className: 'canvas_basic' }) + btn({ id: 'btn', className: 'clearBoard', text: '清除画布' })
}