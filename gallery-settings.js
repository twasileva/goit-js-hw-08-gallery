import defaultExport from './gallery-items.js'


const galleryContainer = document.querySelector('.js-gallery')
const isModal = document.querySelector('.js-lightbox')
const isModalImage = document.querySelector('.lightbox__image')
const buttonCloseModal = document.querySelector('button[data-action="close-lightbox"]')
const imagesMarkup = createGalleryImages(defaultExport)

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup)
galleryContainer.addEventListener('click', onGalleryImageClick)
buttonCloseModal.addEventListener('click', onBtnCloseModalClick)

function createGalleryImages(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
  }).join('')
}

function onGalleryImageClick(e) {
  e.preventDefault()

  const isGalleryImageEl = e.target.classList.contains('gallery__image')
  if (!isGalleryImageEl) {
    return
  }

  const originalSizeImage = e.target.dataset.source
  isModal.classList.add('is-open')
  isModalImage.src = originalSizeImage
}

function onBtnCloseModalClick(e) {
  isModal.classList.remove('is-open')
  isModalImage.src = ''
}