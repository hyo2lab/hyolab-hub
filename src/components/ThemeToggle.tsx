import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { getTheme, setTheme, type Theme } from '../lib/theme';

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(getTheme);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(next);
        setThemeState(next);
      }}
      aria-label={next === 'dark' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      className="inline-flex size-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
    >
      {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
