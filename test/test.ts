import FanPainter from "../src/index";
import Color from "parsegraph-color";
import { BasicGLProvider } from "parsegraph-compileprogram";

describe("Package", function () {
  it("works", () => {
    const window = new BasicGLProvider();
    const painter = new FanPainter(window);
    painter.selectDeg(0, 0, 0, 90, new Color(0, 0, 0, 1));
  });
});
