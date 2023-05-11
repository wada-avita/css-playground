document.body.onload = () => {
  // エレメントを取得
  const element = document.getElementById('my-element');

  // CSSで指定したlinear-gradientを取得
  const gradientValue = getComputedStyle(element).backgroundImage;
  console.log('gradientValue', gradientValue);

  // canvas要素を作成
  const canvas = document.createElement('canvas');
  console.log('canvas', canvas);
  canvas.width = 132;
  canvas.height = 36;

  const container = document.getElementById('canvasContainer');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // canvasにlinear-gradientを描画
  // ctx.fillStyle = gradientValue;
  const grad = ctx.createLinearGradient(0, 0, 132, 36);
  grad.addColorStop(0.0, '#17A4E1');
  grad.addColorStop(1.0, '#09D0F1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 132, 36);

  // 指定した位置の色情報を取得
  const x1 = 92;
  const pixelData1 = ctx.getImageData(x1, 1, x1, 1).data;
  const x2 = 110;
  const pixelData2 = ctx.getImageData(x2, 1, x2, 1).data;

  // RGB値を取得
  const red1 = pixelData1[0];
  const green1 = pixelData1[1];
  const blue1 = pixelData1[2];

  const red2 = pixelData2[0];
  const green2 = pixelData2[1];
  const blue2 = pixelData2[2];

  // 取得したRGB値を表示
  console.log(`Color at ${x1}: RGB(${red1}, ${green1}, ${blue1})`);
  console.log(`Color at ${x2}: RGB(${red2}, ${green2}, ${blue2})`);
}
