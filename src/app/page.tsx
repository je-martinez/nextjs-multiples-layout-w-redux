import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-6">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
