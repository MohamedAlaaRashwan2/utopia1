import { useEffect, useRef, memo } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo((props) => {
  const {
    dotRadius = 1.5,
    dotSpacing = 14,
    waveAmplitude = 0,
    ...rest
  } = props;

  const canvasRef = useRef(null);
  const dotsRef = useRef([]);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
  });

  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });

  const propsRef = useRef({});
  propsRef.current = { dotRadius, dotSpacing, waveAmplitude };

  const rebuildRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let resizeTimer;

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 80);
    }

    function doResize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      };

      buildDots(w, h);
    }

    function buildDots(w, h) {
      const p = propsRef.current;
      const step = p.dotRadius + p.dotSpacing;

      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);

      const dots = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ax = c * step + step / 2;
          const ay = r * step + step / 2;

          dots.push({
            ax,
            ay,
            sx: ax,
            sy: ay,
          });
        }
      }

      dotsRef.current = dots;
    }

    function onMouseMove(e) {
      const s = sizeRef.current;

      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;

      mouseRef.current.x = e.pageX - s.offsetX;
      mouseRef.current.y = e.pageY - s.offsetY;
    }

    function tick() {
      const dots = dotsRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const m = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      const rad = p.dotRadius / 2;

      ctx.fillStyle = "#28c8b6";
      ctx.beginPath();

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        let x = d.sx;
        let y = d.sy;

        // simple wave animation
        if (p.waveAmplitude > 0) {
          x += Math.sin(i * 0.1) * p.waveAmplitude;
        }

        // basic cursor influence (lightweight version)
        const dx = m.x - d.ax;
        const dy = m.y - d.ay;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (1 - dist / 120) * 6;
          const angle = Math.atan2(dy, dx);

          x -= Math.cos(angle) * force;
          y -= Math.sin(angle) * force;
        }

        ctx.moveTo(x + rad, y);
        ctx.arc(x, y, rad, 0, TWO_PI);
      }

      ctx.fill();

      rafRef.current = requestAnimationFrame(tick);
    }

    doResize();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    rafRef.current = requestAnimationFrame(tick);

    rebuildRef.current = () => {
      const { w, h } = sizeRef.current;
      if (w && h) buildDots(w, h);
    };

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    rebuildRef.current?.();
  }, [dotRadius, dotSpacing]);

  return (
    <div className="dot-field-container" {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
});

DotField.displayName = "DotField";

export default DotField;