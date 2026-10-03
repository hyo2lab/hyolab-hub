import { GitHubIcon } from './components/GitHubIcon';
import { Logo } from './components/Logo';
import { ServiceCard } from './components/ServiceCard';
import { ThemeToggle } from './components/ThemeToggle';
import { services } from './data/services';

const GITHUB_URL = 'https://github.com/hyo2lab';
const YEAR = new Date().getFullYear();

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <Logo className="size-7" />
            hyolab
          </a>
          <div className="flex items-center gap-1">
            <a
              href={GITHUB_URL}
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <GitHubIcon className="size-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
            <h1 className="text-6xl font-black tracking-tighter sm:text-8xl">
              <span className="bg-linear-to-r from-violet-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                hyolab
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
              직접 만들고 운영하는 작은 서비스들을 한곳에 모았어요.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="services-heading"
          className="mx-auto max-w-6xl px-4 pb-24 sm:px-6"
        >
          <div className="mb-6 flex items-baseline justify-between">
            <h2
              id="services-heading"
              className="text-sm font-semibold tracking-widest text-zinc-500 uppercase"
            >
              Services
            </h2>
            <span className="text-sm text-zinc-500">{services.length}개</span>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-zinc-500 sm:px-6">
          <span>© {YEAR} hyolab</span>
          <a href={GITHUB_URL} className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
