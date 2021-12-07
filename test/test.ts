import FanPainter from "../dist/parsegraph-fanpainter";
import { GraphicsWindow } from "parsegraph-window";
import Color from "parsegraph-color";

import { mockDOM } from "node-canvas-webgl";
mockDOM(window);

describe("Package", function () {
  it("works", () => {
    const window = new GraphicsWindow();
    const painter = new FanPainter(window);
    painter.selectDeg(0, 0, 0, 90, new Color(0, 0, 0, 1));
  });
});
