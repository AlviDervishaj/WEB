import { Queue } from "../components/Queue";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full h-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col gap-10">
        <Queue />
      </div>
    </main>
  );
}
