export type Theme = 'light' | 'dark';

// index.html 의 초기화 스크립트와 같은 키를 써야 한다.
const STORAGE_KEY = 'theme';

export function getTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // 저장소를 못 쓰는 환경(사생활 보호 모드 등)에서는 이번 방문에만 적용된다.
  }
}
