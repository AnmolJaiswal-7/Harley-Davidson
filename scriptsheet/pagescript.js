// color-div store 

const vividBob = document.querySelector(".vividBob");
const billiardBob = document.querySelector(".billiardBob");

// root color code stored 

const rootElement = document.documentElement;
const rootStyles = getComputedStyle(rootElement);

const vivid_color = rootStyles.getPropertyValue('--vivid-black-');
const billiard_color = rootStyles.getPropertyValue('--billiard-gray-');

const heading_vivid_color = rootStyles.getPropertyValue('--main-heading-vivid-black-');
const heading_billiard_color = rootStyles.getPropertyValue('--main-heading-billiard-gray-');

const bis__vivid_color = rootStyles.getPropertyValue('--bis-vivid-black-');
const bis__billiard_color = rootStyles.getPropertyValue('--bis-billiard-gray-');


// slidepage class stored 

const slidepage1 = document.querySelector(".slidepage1");

// horizontol line stored 

const hl1 = document.querySelectorAll(".hl1");

// bike-info-side stored 

const p1 = document.querySelector(".p1");

// heading div store 

const p1_heading = document.querySelector(".p1-heading");

// heading div h1 stored 

const p1_heading_h1 = document.querySelector(".p1-heading h1");

// bike img stored 

const fatBob = document.getElementById("bobImg");

// color name span store 

const colorBob = document.getElementById("color-name-bob");
const colorPrice = document.querySelector(".colorPrice");

billiardBob.addEventListener('click', () => {
    slidepage1.style.borderColor = bis__billiard_color;
    p1.style.backgroundColor = bis__billiard_color;
    p1_heading.style.backgroundColor = heading_billiard_color;
    const fatBob_billiard = `/images/harley-davidson img/cruiser/fat bob 114/grey.webp`;
    fatBob.src = fatBob_billiard;
    p1_heading_h1.style.color = billiard_color;
    hl1.forEach( (bgcolor) => {
        bgcolor.style.backgroundColor = billiard_color;
    });
    const billiardBobColor = "Billiard Gray";
    colorBob.innerText = billiardBobColor;
    colorPrice.style.display = "none";
    billiardBob.classList.add('active');
    vividBob.classList.remove('active');
});

vividBob.addEventListener('click', () => {
    slidepage1.style.borderColor = bis__vivid_color;
    p1.style.backgroundColor = bis__vivid_color;
    p1_heading.style.backgroundColor = heading_vivid_color;
    const fatBob_vivid = `/images/harley-davidson img/cruiser/fat bob 114/black.webp`;
    fatBob.src = fatBob_vivid;
    p1_heading_h1.style.color = vivid_color;
    hl1.forEach( (bgcolor) => {
        bgcolor.style.backgroundColor = vivid_color;

    })
    const vividColor = "Vivid Black";
    colorBob.innerText = vividColor;
    colorPrice.style.display = "flex";
    vividBob.classList.add('active');
    billiardBob.classList.remove('active');
  });