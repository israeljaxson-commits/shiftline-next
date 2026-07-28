export default function Loading() {
  return (
    <main className="min-h-screen bg-paper px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-[1400px] space-y-6">
        <div className="h-20 rounded-full bg-charcoal/5 animate-pulse" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-[60svh] rounded-3xl bg-charcoal/5 animate-pulse" />
          <div className="space-y-6">
            <div className="h-12 w-3/4 rounded-full bg-charcoal/5 animate-pulse" />
            <div className="h-12 w-5/6 rounded-full bg-charcoal/5 animate-pulse" />
            <div className="h-12 w-2/3 rounded-full bg-charcoal/5 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
