const header = document.querySelector('.links')
const sectionTwo = document.querySelector('#sel2')
const sectionFour = document.querySelector('#sel4')

const sectionTwoOptions = {}

const sectionTwoObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      header.classList.add('link_dark')
    } else {
      header.classList.remove('link_dark')
    }
  })
}, sectionTwoOptions)

sectionTwoObserver.observe(sectionFour)

// setTimeout(() => {
//   sectionTFour.scrollIntoView(true)
// }, 2000)


