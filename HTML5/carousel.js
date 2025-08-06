const images = [
  {
    src: "https://picsum.photos/id/1018/500/300",
    alt: "Mountain Landscape"
  },
  {
    src: "https://picsum.photos/id/1025/500/300",
    alt: "Running Dog"
  },
  {
    src: "https://picsum.photos/id/1043/500/300",
    alt: "Lake and Forest"
  },
  {
    src: "https://picsum.photos/id/1052/500/300",
    alt: "Desert Road"
  }
];

let current = 0;

function showImage(index) {
  const img = document.getElementById("carousel-img");
  img.src = images[index].src;
  img.alt = images[index].alt;
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(current);
});
