<<<<<<< HEAD
 "use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const loveLines = [
  "Every laugh we share feels like the sweetest melody I have ever heard.",
  "Your kindness paints our ordinary days in watercolor hues that only we understand.",
  "Even the quietest nights glow brighter once I imagine your smile beside me.",
  "I keep falling softly for you in brand new ways, even after all this time.",
];

const memoryMoments = [
  {
    title: "First time we talk",
    description:
      "Jab hamari pehli dafa baat hoi tab hum donon ny ek dosre sy photography share ki thi haha and phir baatien hoen or etni hoen ky piyar hooo gia jee ap sy Alhumdulliah.",
    detail: "20 May 2025 · 10:36 pm ",
  },
  {
    title: " Rishty ke leye purpose",
    description:
      "Ahm Ahmm jeee to hamari batien hoen or or meny phir ap ko purpose kia tha ky me like rishta karna chahta hun not any relationship.",
    detail: "23 July 2025 ",
  },
  {
    title: "First Look",
    description:
      "Etniiiii requests ky baad ap ny mujhe apni pic bheji and to be very honest meri shahzadi bohot piyari ha meri nazar maa MashaAllah.",
    detail: "",
  },
];

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const loveLineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" } },
};

const cardVariants = {
  initial: { y: 0, boxShadow: "0 20px 40px rgba(15, 7, 32, 0.06)" },
  hover: {
    y: -10,
    boxShadow: "0 35px 60px rgba(17, 8, 44, 0.18)",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
    },
  },
};

const floatingHearts = [
  { size: 160, left: "5%", delay: 0, duration: 18, color: "rgba(255, 182, 193, 0.4)" },
  { size: 220, left: "65%", delay: 4, duration: 22, color: "rgba(219, 168, 255, 0.35)" },
  { size: 120, left: "78%", delay: 8, duration: 16, color: "rgba(255, 210, 221, 0.5)" },
  { size: 90, left: "40%", delay: 2, duration: 14, color: "rgba(255, 244, 231, 0.45)" },
];

const sparkleDots = [
  { top: "10%", left: "20%", size: 6, delay: 0 },
  { top: "55%", left: "10%", size: 5, delay: 2 },
  { top: "30%", left: "80%", size: 7, delay: 1 },
  { top: "70%", left: "65%", size: 4, delay: 3 },
];

function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingHearts.map((heart, index) => (
        <motion.span
          key={heart.left + index}
          aria-hidden="true"
          className="absolute rounded-full bg-gradient-to-br from-white to-transparent opacity-70 blur-3xl"
          style={{
            width: heart.size,
            height: heart.size,
            left: heart.left,
            bottom: "-30%",
            background: `radial-gradient(circle, ${heart.color}, transparent 60%)`,
          }}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{
            y: ["0%", "-120%"],
            opacity: [0.5, 0.8, 0.4],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {sparkleDots.map((sparkle) => (
        <motion.span
          key={`${sparkle.top}-${sparkle.left}`}
          aria-hidden="true"
          className="absolute rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            top: sparkle.top,
            left: sparkle.left,
          }}
          initial={{ scale: 0.5, opacity: 0.3 }}
          animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            repeat: Infinity,
            delay: sparkle.delay,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const playChime = () => {
  if (typeof window === "undefined") return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 520;
    gain.gain.value = 0.04;
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
  } catch (error) {
    console.error("Audio context failed", error);
  }
};

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);

  const toggleSurprise = () => {
    playChime();
    setShowSurprise((prev) => !prev);
  };

  return (
    <div className="relative overflow-hidden bg-transparent">
      <FloatingHearts />
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-y-16 px-6 py-10 sm:px-10 lg:px-16"
      >
        <motion.section
          variants={heroVariant}
          className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-[0_25px_60px_rgba(17,8,44,0.18)] backdrop-blur-3xl"
        >
          <p className="text-sm uppercase tracking-[0.6em] text-pink-500">
            Happy Birthday ❤️
          </p>
          <div className="space-y-4">
            <motion.h1
              variants={heroVariant}
              className="text-4xl font-semibold tracking-tight text-[#1b1033] sm:text-5xl lg:text-6xl"
            >
              To the one who twirls sunshine into every ordinary day,
              <br />
              <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                Hafsa Mehak
              </span>
            </motion.h1>
            <motion.p
              variants={heroVariant}
              className="text-lg leading-relaxed text-[#3d3356] sm:text-xl"
            >
              I asked the stars to give me a canvas big enough for all the reasons I adore you. This
              page is my soft, glimmering whisper to remind you that your kindness and laugh spark a
              romance that feels like coming home.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-[0_20px_40px_rgba(21,5,45,0.12)] backdrop-blur-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-semibold text-[#28163f]"
          >
            A love letter written in soft scribbles
          </motion.h2>
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="space-y-4 text-lg leading-relaxed text-[#3e3362]"
          >
            {loveLines.map((line) => (
              <motion.p
                key={line}
                variants={loveLineVariants}
                className="text-base sm:text-lg"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-[0_25px_55px_rgba(18,6,42,0.15)] backdrop-blur-3xl"
        >
          <div className="flex flex-col gap-2">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-semibold text-[#28163f]"
            >
              Memories & reasons that still glow
            </motion.h2>
            <p className="text-sm uppercase tracking-[0.5em] text-rose-500">
              each card is a heartbeat from us
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {memoryMoments.map((memory) => (
              <motion.article
                key={memory.title}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="relative rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 to-white/40 p-5 shadow-lg transition duration-500 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                    cherished
                  </span>
                  <motion.span
                    aria-hidden="true"
                    className="text-2xl"
                    animate={{
                      rotate: [0, 12, -8, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  >
                    💗
                  </motion.span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#2b173b]">
                  {memory.title}
                </h3>
                <p className="mt-2 text-sm text-[#4c3a5f]">{memory.detail}</p>
                <p className="mt-4 text-base text-[#39253f]">{memory.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl bg-gradient-to-br from-rose-100 to-purple-100 p-8 shadow-[0_20px_45px_rgba(33,9,51,0.18)] backdrop-blur-3xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2b1341]">
                Click for a surprise 🎁
              </h2>
              <p className="text-sm text-[#3c2b56]">
                I left a little secret that only you can unlock.
              </p>
            </div>
            <motion.button
              type="button"
              onClick={toggleSurprise}
              className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-pink-500/40 transition duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Reveal
            </motion.button>
          </div>
          <AnimatePresence>
            {showSurprise && (
              <motion.div
                className="mt-6 rounded-2xl border border-white/70 bg-white/80 p-6 text-[#261034] shadow-[0_15px_35px_rgba(23,8,57,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                I Just want to tell you that I bought so much chocolates for you, haha and will give you inshAllah jab hum milien gaen.
                I love You soo much meri shahzadi
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl bg-white/90 p-8 text-center shadow-[0_30px_60px_rgba(21,7,46,0.2)] backdrop-blur-3xl"
        >
          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[#35244f] sm:text-xl"
            variants={loveLineVariants}
          >
            Thank you for painting every sunrise with hope and every evening with gentle laughter.
            Being beside you feels like the softest verse of a poem that I never want to end.
          </motion.p>
          <motion.span
            aria-hidden="true"
            className="mt-6 inline-flex text-5xl"
            animate={{
              y: [0, -14, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            ❤️
          </motion.span>
        </motion.section>
      </motion.main>
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
>>>>>>> a26392a (Initial commit from Create Next App)
    </div>
  );
}
