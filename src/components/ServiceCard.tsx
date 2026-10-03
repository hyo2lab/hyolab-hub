import { ArrowUpRight } from 'lucide-react';
import type { Accent, Service } from '../data/services';

// Tailwind 가 클래스를 찾을 수 있도록 전체 문자열로 적는다.
const accentStyles: Record<Accent, { gradient: string; hoverBorder: string }> = {
  violet: {
    gradient: 'from-violet-500 to-fuchsia-500',
    hoverBorder: 'hover:border-violet-400/70 dark:hover:border-violet-500/50',
  },
  sky: {
    gradient: 'from-sky-500 to-cyan-400',
    hoverBorder: 'hover:border-sky-400/70 dark:hover:border-sky-500/50',
  },
  amber: {
    gradient: 'from-amber-500 to-yellow-400',
    hoverBorder: 'hover:border-amber-400/70 dark:hover:border-amber-500/50',
  },
  emerald: {
    gradient: 'from-emerald-500 to-teal-400',
    hoverBorder: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/50',
  },
  rose: {
    gradient: 'from-rose-500 to-pink-400',
    hoverBorder: 'hover:border-rose-400/70 dark:hover:border-rose-500/50',
  },
  orange: {
    gradient: 'from-orange-500 to-amber-400',
    hoverBorder: 'hover:border-orange-400/70 dark:hover:border-orange-500/50',
  },
};

const cardBase =
  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60';

export function ServiceCard({ service }: { service: Service }) {
  const accent = accentStyles[service.accent];

  if (!service.url) {
    return (
      <div className={cardBase}>
        <CardBody service={service} gradient={accent.gradient} />
      </div>
    );
  }

  return (
    <a
      href={service.url}
      className={`${cardBase} ${accent.hoverBorder} transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:hover:shadow-black/40 dark:focus-visible:outline-zinc-100`}
    >
      <CardBody service={service} gradient={accent.gradient} />
    </a>
  );
}

function CardBody({ service, gradient }: { service: Service; gradient: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${gradient}`}
      />

      <div className="flex items-start justify-between gap-3">
        <h3
          className={`bg-linear-to-r ${gradient} bg-clip-text text-2xl font-extrabold tracking-tight text-transparent`}
        >
          {service.name}
        </h3>
        {service.status === 'wip' && (
          <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
            개발 중
          </span>
        )}
      </div>

      <p className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">{service.tagline}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {service.description}
      </p>

      {service.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6 text-sm">
        {service.url ? (
          <span className="flex items-center gap-1 font-medium text-zinc-900 dark:text-zinc-100">
            <span className="truncate">{new URL(service.url).host}</span>
            <ArrowUpRight className="size-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="text-zinc-400 dark:text-zinc-500">링크 준비 중</span>
        )}
      </div>
    </>
  );
}
