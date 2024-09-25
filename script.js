 // Rasm ustiga bosilganda totalni oshirish
 const aspireImage = document.getElementById('aspire-image');
 const totalElement = document.getElementById('total');
 
 // Bosilganda ishlaydigan funksiya
 function incrementTotal(touches) {
     // Hozirgi total qiymatini olish
     let currentTotal = parseInt(totalElement.innerText);
     // Touches soni bilan yangilash
     currentTotal += touches;
     // Yangilangan qiymatni total elementga yozish
     totalElement.innerText = currentTotal;
 
     // Animatsiya uchun qiymatni ko'rsatish
     showAnimation(touches);
 }
 
 // Qiymat ko‘rsatish va yuqoriga ko'tarilish animatsiyasi
 function showAnimation(value) {
     const animationElement = document.createElement('div');
     animationElement.classList.add('increment-animation');
     animationElement.innerText = `+${value}`;
     document.body.appendChild(animationElement);
 
     // Animatsiya pozitsiyasi - rasm markazidan boshlanadi
     const aspireImageRect = aspireImage.getBoundingClientRect();
     animationElement.style.left = aspireImageRect.left + aspireImageRect.width / 2 + 'px';
     animationElement.style.top = aspireImageRect.top + aspireImageRect.height / 2 + 'px';
 
     // 1 soniyadan keyin elementni o'chirish
     setTimeout(() => {
         animationElement.remove();
     }, 1000);
 }
 
 // Mouse uchun click hodisasi
 aspireImage.addEventListener('click', function() {
     incrementTotal(1);
 });
 
 // Telefonlar uchun touchstart hodisasi
 aspireImage.addEventListener('touchstart', function(event) {
     // event.touches bilan barmoqlar sonini olish
     const numberOfTouches = event.touches.length;
     incrementTotal(numberOfTouches);
 });



 //rasm bosilganda qo'shish tugashi


 const image = document.getElementById('aspire-image'); 
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    let progress = localStorage.getItem('progress') ? parseInt(localStorage.getItem('progress')) : 100;
    let interval;

    // Progressni yangilash
    function updateProgress() {
        if (progress < 100) {
            progress++;
            updateProgressBar();
            localStorage.setItem('100/', progress); // Progressni saqlash
        }
    }

    // Progressni kamaytirish
    function decreaseProgress() {
        if (progress > 0) {
            progress--;
            updateProgressBar();
            localStorage.setItem('100/', progress); // Progressni saqlash

            if (progress === 0) {
                image.style.pointerEvents = 'none'; // Rasmni bosilmaydigan holatga o'tkazish
            }
        }
    }

    // Progress barni yangilash va rangini o'zgartirish
    function updateProgressBar() {
        progressBar.style.width = progress + '%';
        progressText.innerText = '100/ ' + progress;

        // Ranglarni o'zgartirish
        if (progress > 66) {
            progressBar.style.backgroundColor = '#4caf50'; // Yashil
        } else if (progress > 33) {
            progressBar.style.backgroundColor = '#ffeb3b'; // Sariq
        } else {
            progressBar.style.backgroundColor = '#f44336'; // Qizil
        }
    }

    // Rasmga bosish hodisasi
    image.addEventListener('click', () => {
        if (progress > 0) {
            decreaseProgress();
        } else {
            // Agar progress 0 bo'lsa, uni qayta tiklash
            progress = 100; // progressni 100 ga tiklaymiz
            image.style.pointerEvents = 'auto'; // Rasmni faol holatga o'tkazish
            updateProgressBar(); // Progress barni tiklash
            localStorage.setItem('100/', progress); // Progressni saqlash
        }
    });

    // Progress holatini o'rnatish
    updateProgressBar(); // Dastlabki progress barni ko'rsatish

    // Har sekundda progressni oshirish
    interval = setInterval(updateProgress, 1000);



    //progress tugashi