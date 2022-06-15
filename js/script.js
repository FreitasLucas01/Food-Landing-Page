function slideAnimation() {
  const sectionsLeftSlide = document.querySelectorAll(".js-leftSlide");
  const sectionsRightSlide = document.querySelectorAll(".js-rightSlide");
  const sectionsTop = window.innerHeight * 0.6;

  function handleScroll() {
    sectionsLeftSlide.forEach((itens) => {
      const itensTop = itens.getBoundingClientRect().top
      const sectionView = (itensTop - sectionsTop) < 0

      if (sectionView) {
        itens.classList.add("ativo")
      }
    })

    sectionsRightSlide.forEach((itens) => {
      const itensTop = itens.getBoundingClientRect().top
      const sectionView = (itensTop - sectionsTop) < 0

      if (sectionView) {
        itens.classList.add("ativo")
      }
    })
  }
  handleScroll()

  window.addEventListener("scroll", handleScroll)
}
slideAnimation()


