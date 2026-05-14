## lib/hooks/use-scroll-spy.ts 
Watches sections on the page and updates the URL hash as you scroll. The core logic for /tech-recruitment.

## lib/hooks/use-clear-hash-on-scroll.ts 
Clears the URL hash the moment the user physically scrolls. For pages where a hash link drops you somewhere but shouldn't stick around.

## lib/hooks/use-current-hash.ts 
Reads window.location.hash and re-renders whenever it changes. Needed because Next.js's usePathname() doesn't include the hash.

## components/layout/hash-cleaner.tsx 
A client component that just mounts useClearHashOnScroll. Returns nothing — exists purely so server-component pages can drop <HashCleaner /> without going client themselves.

## app/tech-recruitment/_components/scroll-spy.tsx 
Same idea — a client wrapper around useScrollSpy so the /tech-recruitment page stays a server component.

