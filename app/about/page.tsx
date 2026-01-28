import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>

      {/* Main layout */}
      <section className="grid gap-10 md:grid-cols-2 items-start">
        {/* LEFT: Image */}
        <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
          <Image
            src="/projects/Profile.jpg"
            alt="Photo of Gwen"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-5">
          {/* Intro */}
          <div>
            <h2 className="text-3xl font-bold">GWYENTH LIM</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              I’m a 3rd year BSIT student in specializing in Mobile and Web Development. I’m
              interested in building clean, responsive web applications using
              modern tools like Next.js, Tailwind CSS, and shadcn/ui.
            </p>
          </div>

           {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            
        <div className="mt-4 rounded-xl border bg-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all hover:bg-white/40">
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li><span className="font-medium text-foreground">Programming:</span> JavaScript, Java, SQL</li>
                <li><span className="font-medium text-foreground">Frameworks:</span> Next.js, Tailwind</li>
                <li><span className="font-medium text-foreground">Tools:</span> VS Code</li>
                <li><span className="font-medium text-foreground">Soft Skills:</span> Leadership, Communication</li>
              </ul>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-xl font-semibold">Leadership & Experience</h3>
            <div className="mt-4 space-y-4">
        <div className="rounded-xl border bg-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all hover:bg-white/40">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    Chapter Lead, Google Developer Groups on Campus
                  </span>
                  <span className="text-muted-foreground">2025 – Present</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  <li>Led student tech events with 50+ participants</li>
                  <li>Built partnerships with industry professionals</li>
                </ul>
              </div>

        <div className="rounded-xl border bg-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all hover:bg-white/40">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    Project Manager, Capstone Project
                  </span>
                  <span className="text-muted-foreground">2025 – Present</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                  <li>Managed development lifecycle and team coordination</li>
                  <li>Handled documentation and issue resolution</li>
                </ul>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </main>
  );
}
