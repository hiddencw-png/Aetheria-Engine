export default function Page() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src="/omnigen.html"
        title="OmniGen"
        className="h-full w-full border-0"
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}
