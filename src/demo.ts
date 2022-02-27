import { BasicGLProvider } from "parsegraph-compileprogram";
import { make2DProjection } from "parsegraph-matrix";
import FanPainter from ".";
import Color from "parsegraph-color";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("demo");
  root.style.position = "relative";
  const glProvider = new BasicGLProvider();

  const container = document.createElement("div");
  container.appendChild(glProvider.container());
  container.style.position = "absolute";
  container.style.left = "0px";
  container.style.top = "0px";
  container.style.pointerEvents = "none";
  root.appendChild(container);
  container.style.fontSize = "18px";
  container.style.fontFamily = "sans";
  const refresh = () => {
    const painter = new FanPainter(glProvider);
    const animate = () => {
      const mat = make2DProjection(glProvider.width(), glProvider.height());
      painter.selectDeg(
        Math.random() * glProvider.width(),
        Math.random() * glProvider.height(),
        Math.random() * 360,
        Math.random() * 360,
        Color.random()
      );
      glProvider.render();
      painter.render(mat);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    const rand = () => Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
    container.style.color = `rgb(${rand()}, ${rand()}, ${rand()})`;
    container.style.left = `${Math.random() * root.clientWidth}px`;
    container.style.top = `${Math.random() * root.clientHeight}px`;
  };

  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.right = "8px";
  dot.style.top = "8px";
  dot.style.width = "16px";
  dot.style.height = "16px";
  dot.style.borderRadius = "8px";
  dot.style.transition = "background-color 400ms";
  dot.style.backgroundColor = "#222";
  root.appendChild(dot);

  container.style.transition = "color 2s, left 2s, top 2s";
  document.body.style.transition = "background-color 2s";
  let timer: any = null;
  let dotTimer: any = null;
  let dotIndex = 0;
  const dotState = ["#f00", "#c00"];
  const refreshDot = () => {
    dotIndex = (dotIndex + 1) % dotState.length;
    dot.style.backgroundColor = dotState[dotIndex];
  };
  const interval = 3000;
  const dotInterval = 500;
  root.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
      clearInterval(dotTimer);
      dotTimer = null;
      dot.style.transition = "background-color 3s";
      dot.style.backgroundColor = "#222";
    } else {
      refresh();
      dot.style.transition = "background-color 400ms";
      refreshDot();
      timer = setInterval(refresh, interval);
      dotTimer = setInterval(refreshDot, dotInterval);
    }
  });
});
