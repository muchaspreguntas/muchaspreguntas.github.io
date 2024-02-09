
let currentPlanIndex = 0;

function togglePlan(plan) {
  // Lógica para mostrar detalles del plan
}

function changePlan(direction) {
  const slider = document.querySelector('.plans-slider');
  const plans = document.querySelectorAll('.plan');
  const totalPlans = plans.length;
  const planWidth = plans[0].offsetWidth;

  currentPlanIndex = (currentPlanIndex + direction + totalPlans) % totalPlans;
  const translateValue = -currentPlanIndex * planWidth;
  slider.style.transform = `translateX(${translateValue}px)`;
}
function handleTouchMove(event) {
    const touchEndX = event.touches[0].clientX;
    const touchDifference = touchEndX - touchStartX;
  
    if (touchDifference > 50) {
      changePlan(-1); // Swipe hacia la izquierda
    } else if (touchDifference < -50) {
      changePlan(1); // Swipe hacia la derecha
    }
  
    touchStartX = 0; // Restablecer el valor para el próximo toque
  }
  
  // Agregar escuchadores de eventos táctiles
  const slider = document.querySelector('.plans-slider');
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchmove', handleTouchMove);

  //Header//
  
  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });
  

  