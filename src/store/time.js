import { readable } from 'svelte/store';

export const timeSince = readable(new Date(), set => { const interval = setInterval(() => {
            set(new Date().getMilliseconds());
        }, 100);
  return () => clearInterval(interval);
});

