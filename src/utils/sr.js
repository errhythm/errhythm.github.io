// Lazy load ScrollReveal only on client side to avoid SSR issues
let ScrollReveal;
let sr;

const isSSR = typeof window === 'undefined';

if (!isSSR) {
  import('scrollreveal').then(module => {
    ScrollReveal = module.default;
    sr = ScrollReveal();
  });
}

export default {
  reveal: (...args) => {
    if (!isSSR && sr) {
      return sr.reveal(...args);
    }
    return null;
  }
};
