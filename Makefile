DIST_NAME = fanpainter

SCRIPT_FILES = \
	src/index.ts \
	src/glsl.d.ts \
	src/demo.ts \
	test/test.ts

EXTRA_SCRIPTS = \
	src/FanPainter_VertexShader.glsl \
	src/FanPainter_FragmentShader.glsl

include ./Makefile.microproject
