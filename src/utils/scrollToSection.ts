export const scrollToSection = (elementRef: {
  current: { offsetTop: number | undefined };
}) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
};
