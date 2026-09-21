// Preencher somente com materiais reais: {src, alt} e {id, title}.
const projects = [
  { src: 'images/projeto-tapuya.webp', alt: 'Identidade visual e aplicações da marca Tapuya' },
  { src: 'images/projeto-m2-fit.webp', alt: 'Identidade visual e aplicações da academia M2 Fit' },
  { src: 'images/projeto-barbearia-president.webp', alt: 'Identidade visual e aplicações da Barbearia President' },
  { src: 'images/projeto-karyus.webp', alt: 'Identidade visual e aplicações da Karyus Móveis Planejados' },
  { src: 'images/projeto-sal-de-riso.webp', alt: 'Identidade visual e aplicações do restaurante Sal de Riso' }
];
const testimonials = [
  { id: 'JU0yc2-MAJw', title: 'Depoimento sobre o MÉTODO FORMA' },
  { id: 'nE9WDor_5ns', title: 'Depoimento sobre o MÉTODO FORMA' },
  { id: 'Xd5h1tjaLrQ', title: 'Depoimento sobre o MÉTODO FORMA' }
];
projects.forEach((project,index)=>{if(!project)return;const slot=document.querySelectorAll('.project-media')[index];const img=document.createElement('img');img.src=project.src;img.alt=project.alt;img.width=1920;img.height=1080;img.loading='lazy';img.decoding='async';slot.removeAttribute('role');slot.removeAttribute('aria-label');slot.replaceChildren(img)});
testimonials.forEach((video,index)=>{if(!video||!/^[a-zA-Z0-9_-]{11}$/.test(video.id))return;const frame=document.createElement('iframe');frame.src=`https://www.youtube-nocookie.com/embed/${video.id}`;frame.title=video.title;frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';document.querySelectorAll('.video-media')[index].replaceChildren(frame)});
