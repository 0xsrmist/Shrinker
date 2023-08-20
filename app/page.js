import TypeWriter from "@/components/Typewriter";

export default function Home() {
  const hats = [
    {
      prep: "a",
      suffix: "Web Developer",
    },
    {
      prep: "a",
      suffix: "UI/UX Designer",
    },
    {
      prep: "a",
      suffix: "Graphics Designer",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-xl font-title text-white ">Hello guys </h1>
    </main>
  );
}
