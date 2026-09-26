/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { TECH_STACK } from "./techStack";

const SPACING = 2.05;
const CYCLE = 2.7;

const SKIN = "#8d5a43";
const SKIN_LIGHT = "#a56b52";

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}

const BRAND = {
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  Angular: "#DD0031",
  TypeScript: "#3178C6",
  "JavaScript (ES6+)": "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Responsive Design": "#3DFF8A",
  WCAG: "#3DFF8A",
};

function drawReact(ctx) {
  ctx.save();
  ctx.translate(256, 250);
  ctx.strokeStyle = BRAND.React;
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    ctx.ellipse(0, 0, 108, 42, (i * Math.PI) / 3, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.fillStyle = BRAND.React;
  ctx.arc(0, 0, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawNext(ctx) {
  ctx.save();
  ctx.translate(256, 250);
  ctx.fillStyle = BRAND["Next.js"];
  ctx.font = "700 168px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("N", 0, 10);
  ctx.restore();
}

function drawAngular(ctx) {
  ctx.save();
  ctx.translate(256, 255);
  ctx.fillStyle = BRAND.Angular;
  ctx.beginPath();
  ctx.moveTo(0, -120);
  ctx.lineTo(108, 86);
  ctx.lineTo(0, 52);
  ctx.lineTo(-108, 86);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(0, -52);
  ctx.lineTo(46, 46);
  ctx.lineTo(0, 22);
  ctx.lineTo(-46, 46);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawBadge(ctx, letters, fill, textColor) {
  ctx.save();
  ctx.translate(166, 160);
  roundRect(ctx, 0, 0, 180, 180, 32);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.fillStyle = textColor;
  ctx.font = "700 78px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(letters, 90, 96);
  ctx.restore();
}

function drawShield(ctx, fill, label) {
  ctx.save();
  ctx.translate(256, 250);
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(0, -120);
  ctx.lineTo(100, -80);
  ctx.lineTo(100, 20);
  ctx.quadraticCurveTo(100, 110, 0, 140);
  ctx.quadraticCurveTo(-100, 110, -100, 20);
  ctx.lineTo(-100, -80);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "700 64px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 8);
  ctx.restore();
}

function drawResponsive(ctx) {
  ctx.save();
  ctx.translate(256, 255);
  ctx.strokeStyle = BRAND["Responsive Design"];
  ctx.lineWidth = 10;
  ctx.lineJoin = "round";
  roundRect(ctx, -120, -70, 168, 112, 12);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-90, 58);
  ctx.lineTo(20, 58);
  ctx.stroke();
  roundRect(ctx, 40, -28, 62, 108, 10);
  ctx.stroke();
  ctx.restore();
}

function drawWcag(ctx) {
  ctx.save();
  ctx.translate(256, 250);
  ctx.strokeStyle = BRAND.WCAG;
  ctx.fillStyle = BRAND.WCAG;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(0, 0, 118, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -36, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.moveTo(-52, -6);
  ctx.lineTo(52, -6);
  ctx.moveTo(0, -6);
  ctx.lineTo(0, 48);
  ctx.lineTo(-28, 92);
  ctx.moveTo(0, 48);
  ctx.lineTo(28, 92);
  ctx.stroke();
  ctx.restore();
}

const DRAW_ICON = {
  React: drawReact,
  "Next.js": drawNext,
  Angular: drawAngular,
  TypeScript: (ctx) => drawBadge(ctx, "TS", BRAND.TypeScript, "#FFFFFF"),
  "JavaScript (ES6+)": (ctx) => drawBadge(ctx, "JS", BRAND["JavaScript (ES6+)"], "#111111"),
  HTML5: (ctx) => drawShield(ctx, BRAND.HTML5, "5"),
  CSS3: (ctx) => drawShield(ctx, BRAND.CSS3, "3"),
  "Responsive Design": drawResponsive,
  WCAG: drawWcag,
};

function createCardTexture(tech) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext("2d");
  const accent = BRAND[tech.name] || tech.accent;

  roundRect(ctx, 16, 16, 480, 648, 48);
  ctx.fillStyle = "#12151c";
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = accent;
  ctx.stroke();

  DRAW_ICON[tech.name]?.(ctx);

  ctx.fillStyle = "#F8FAFC";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 40px Inter, Arial, sans-serif";
  const lines = wrapLines(ctx, tech.name, 420);
  const lineHeight = 48;
  const startY = 560 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, index) => {
    ctx.fillText(line, 256, startY + index * lineHeight);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

const FLAKE_COUNT = 180;

function HeroSnow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    let frameId = 0;
    const flakes = Array.from({ length: FLAKE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.6 + Math.random() * 1.8,
      speed: 0.35 + Math.random() * 1.1,
      drift: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.35 + Math.random() * 0.6,
    }));

    const draw = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || window.innerWidth;
      const height = parent?.clientHeight || window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
      }

      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      flakes.forEach((flake) => {
        flake.y += flake.speed / height;
        flake.x += (Math.sin(flake.y * 18 + flake.phase) * flake.drift) / width;
        if (flake.y > 1.05) {
          flake.y = -0.05;
          flake.x = Math.random();
        }
        if (flake.x < -0.05) flake.x = 1.05;
        if (flake.x > 1.05) flake.x = -0.05;

        context.beginPath();
        context.fillStyle = `rgba(255,255,255,${flake.opacity})`;
        context.arc(flake.x * width, flake.y * height, flake.radius, 0, Math.PI * 2);
        context.fill();
      });

      frameId = window.requestAnimationFrame(draw);
    };

    frameId = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      aria-hidden
    />
  );
}

function smoothstep(value) {
  const t = Math.min(Math.max(value, 0), 1);
  return t * t * (3 - 2 * t);
}

function scrollMotion(elapsed) {
  const index = Math.floor(elapsed / CYCLE);
  const t = (elapsed % CYCLE) / CYCLE;
  let cardShift = 0;
  let handShift = 0;

  if (t < 0.42) {
    cardShift = 0;
    handShift = 0;
  } else if (t < 0.72) {
    const u = smoothstep((t - 0.42) / 0.3);
    cardShift = u;
    handShift = u;
  } else {
    const u = smoothstep((t - 0.72) / 0.28);
    cardShift = 1;
    handShift = 1 - u;
  }

  return { indexFloat: index + cardShift, handShift };
}

function Finger({ position, rotation = [0.2, 0, 0], motion, curl = 1, scale = 1 }) {
  const ref = useRef();
  const baseX = rotation[0];

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x = baseX + motion.current.handShift * 0.85 * curl;
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <mesh position={[0, 0.2, 0]}>
        <capsuleGeometry args={[0.032, 0.2, 8, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.46} />
      </mesh>
      <mesh position={[0, 0.42, 0.02]} rotation={[0.18, 0, 0]}>
        <capsuleGeometry args={[0.028, 0.16, 8, 12]} />
        <meshStandardMaterial color={SKIN_LIGHT} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.58, 0.05]} rotation={[0.28, 0, 0]}>
        <capsuleGeometry args={[0.026, 0.1, 8, 12]} />
        <meshStandardMaterial color="#c4896e" roughness={0.35} />
      </mesh>
    </group>
  );
}

function Hand({ side, motion }) {
  const dir = side === "left" ? 1 : -1;

  return (
    <group position={[dir * 0.78, -0.55, 0.28]} rotation={[0.22, dir * -0.35, dir * 0.12]}>
      <mesh position={[0, -0.42, 0]} rotation={[0.35, 0, dir * 0.15]}>
        <capsuleGeometry args={[0.09, 0.28, 8, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.52} />
      </mesh>
      <RoundedBox args={[0.5, 0.58, 0.14]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color={SKIN} roughness={0.48} />
      </RoundedBox>
      {[-0.16, -0.055, 0.055, 0.16].map((x, index) => (
        <Finger
          key={x}
          motion={motion}
          position={[x, 0.28, 0.02]}
          rotation={[0.22, 0, x * 0.35]}
          curl={index === 1 || index === 2 ? 1 : 0.75}
          scale={index === 3 ? 0.78 : index === 0 ? 0.9 : 1}
        />
      ))}
      <Finger
        motion={motion}
        position={[dir * 0.3, 0.05, 0.06]}
        rotation={[0.15, dir * 0.4, dir * 0.95]}
        curl={0.35}
        scale={0.8}
      />
    </group>
  );
}

function Scene({ onActiveChange }) {
  const camera = useThree((state) => state.camera);
  const handsRef = useRef();
  const cardRefs = useRef([]);
  const motion = useRef({ handShift: 0, indexFloat: 0 });
  const lastActive = useRef(-1);

  const textures = useMemo(
    () => TECH_STACK.map((tech) => createCardTexture(tech)),
    []
  );

  useEffect(
    () => () => {
      textures.forEach((texture) => texture.dispose());
    },
    [textures]
  );

  useFrame(({ clock }) => {
    const vFov = (camera.fov * Math.PI) / 180;
    const tan = Math.tan(vFov / 2);
    const fitZ = Math.max(3.8 / (2 * tan), 3.4 / (2 * tan * Math.max(camera.aspect, 0.45)));
    camera.position.z = fitZ;
    camera.position.x = 0;

    const { indexFloat, handShift } = scrollMotion(clock.elapsedTime);
    motion.current.handShift = handShift;
    motion.current.indexFloat = indexFloat;

    const count = TECH_STACK.length;
    cardRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      let delta = i - indexFloat;
      delta -= count * Math.round(delta / count);
      const focus = 1 - Math.min(Math.abs(delta), 1.15) / 1.15;
      mesh.position.y = -delta * SPACING;
      mesh.position.z = focus * 0.12;
      const scale = 0.78 + focus * 0.26;
      mesh.scale.setScalar(scale);
      mesh.rotation.x = delta * 0.06;
      mesh.material.opacity = 0.2 + focus * 0.8;
    });

    if (handsRef.current) {
      const bob = Math.sin(clock.elapsedTime * 2.4) * 0.02;
      handsRef.current.position.y = handShift * SPACING * 0.92 + bob;
      handsRef.current.position.z = 0.62;
      handsRef.current.rotation.x = -handShift * 0.22;
    }

    const active = ((Math.round(indexFloat) % count) + count) % count;
    if (active !== lastActive.current) {
      lastActive.current = active;
      onActiveChange?.(active);
    }
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3.5, 4, 6]} intensity={1.7} color="#fff6ee" />
      <directionalLight position={[-2, 1.5, 4]} intensity={0.35} color="#d7fff2" />
      <pointLight position={[0, -0.4, 1.2]} intensity={4} distance={4} color="#3dff9a" />
      <spotLight
        position={[0, 2.2, 3.2]}
        angle={0.6}
        penumbra={0.7}
        intensity={18}
        distance={8}
        color="#fff1e4"
      />

      <group position={[0, 0, 0]}>
        {textures.map((texture, i) => (
          <mesh
            key={TECH_STACK[i].name}
            ref={(node) => {
              cardRefs.current[i] = node;
            }}
            position={[0, -i * SPACING, 0]}
          >
            <planeGeometry args={[1.5, 1.9]} />
            <meshStandardMaterial
              map={texture}
              roughness={0.42}
              metalness={0.05}
              transparent
            />
          </mesh>
        ))}
        <group ref={handsRef}>
          <Hand side="left" motion={motion} />
          <Hand side="right" motion={motion} />
        </group>
      </group>
    </>
  );
}

function HeroScene({ onActiveChange }) {
  return (
    <Canvas
      camera={{ position: [0.15, 0.15, 6.6], fov: 34 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Scene onActiveChange={onActiveChange} />
    </Canvas>
  );
}

export default HeroScene;
export { HeroSnow };
