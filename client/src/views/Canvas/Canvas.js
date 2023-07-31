import canvas from '../../styles/canvas.css'

export default function Canvas() {
  return (
    `<canvas id="canvas"></canvas>
        <span id="eraserCircle" class="eraser-circle"></span>
        <div class="tool-bar">
        <p class='tool-item'>
          <span>颜色选择：</span>
          <input type="color" id="colorInput" />
        </p>
        <p class='tool-item'>
          <span>线条粗度：</span>
          <input type="range" min="1" max="30" value="1" step="1" id="lineWidthRange" />
          <span id="lineWidthValue">1</span>
        </p>
        <p class='tool-item'>
          <span>清除画布：</span>
          <button id="clearAllBtn">清除画布</button>
        </p>
        <p class='tool-item'>
          <span>橡皮擦：</span>
          <button id="eraserBtn">点击开始</button>
          <input type="range" min="5" max="30" value="5" step="1" id="eraserLineWidthRange" />
          <span id="eraserLineWidthValue">5</span>
          
        </p>
      </div>
        `
  )
}