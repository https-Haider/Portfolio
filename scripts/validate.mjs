import { access, readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const css = await readFile('style.css', 'utf8');
const requiredIds = ['main', 'top', 'work', 'experience', 'about', 'contact'];
const requiredLinks = [
  'https://www.cliniqly.tech/',
  'https://www.kickshub.site/',
  'https://github.com/https-Haider',
  'https://linkedin.com/in/haider-abbas-7557712b5',
  'mailto:haiderhunjra1011@gmail.com'
];

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing required section: ${id}`);
}

for (const link of requiredLinks) {
  if (!html.includes(link)) throw new Error(`Missing required link: ${link}`);
}

if (!html.includes('name="viewport"')) throw new Error('Missing responsive viewport metadata');
if (!css.includes('@media (max-width: 600px)')) throw new Error('Missing mobile breakpoint');
if (!css.includes('prefers-reduced-motion')) throw new Error('Missing reduced-motion support');

await access('Haider_Abbas_Resume.pdf');
console.log('Portfolio validation passed.');
