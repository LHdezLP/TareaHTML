let reviews = [];

function initialize() {
  const REVIEW_FORM = document.getElementById("review-form");
  REVIEW_FORM.addEventListener("submit", addReview);
  showReviews();
}

function addReview(event) {
  event.preventDefault();

  const ORIGIN = event.target.origin.value.trim();
  const NAME = event.target.name.value.trim();
  const MUNICIPIO = event.target.municipio.value.trim();
  const REVIEW = event.target.review.value.trim();

  const lettersNumbersRegex = /^[A-Za-z0-9!¡?¿]+$/;

  const MUNICIPIO_ERROR = document.getElementById("municipio-error");
  const REVIEW_ERROR = document.getElementById("review-error");

  if (MUNICIPIO.length === 0 || REVIEW.length === 0) {
    if (MUNICIPIO.length === 0) {
      MUNICIPIO_ERROR.textContent = "*Municipio es requerido";
      MUNICIPIO_ERROR.style.visibility = "visible";
    } else {
      MUNICIPIO_ERROR.style.visibility = "hidden";
    }

    if (REVIEW.length === 0) {
      REVIEW_ERROR.textContent = "*Reseña es requerida";
      REVIEW_ERROR.style.visibility = "visible";
    } else {
      REVIEW_ERROR.style.visibility = "hidden";
    }
  } else if (MUNICIPIO.length > 50 || !lettersNumbersRegex.test(MUNICIPIO)) {
    MUNICIPIO_ERROR.textContent =
      "Municipio debe tener máximo 50 caracteres y solo letras, números, !, ¡, ?, ¿";
    MUNICIPIO_ERROR.style.visibility = "visible";
    REVIEW_ERROR.style.visibility = "hidden";
  } else if (REVIEW.length > 250 || !lettersNumbersRegex.test(REVIEW)) {
    REVIEW_ERROR.textContent =
      "Reseña debe tener máximo 250 caracteres y solo letras, números, !, ¡, ?, ¿";
    REVIEW_ERROR.style.visibility = "visible";
    MUNICIPIO_ERROR.style.visibility = "hidden";
  } else {
    reviews.push({
      origin: ORIGIN,
      name: NAME,
      municipio: MUNICIPIO,
      review: REVIEW
    });
    showReviews();
    MUNICIPIO_ERROR.style.visibility = "hidden";
    REVIEW_ERROR.style.visibility = "hidden";
    event.target.reset();
  }
}

function showReviews() {
  const REVIEW_LIST = document.getElementById("review-list");

  let allReviews = "";

  for (let i = 0; i < reviews.length; i++) {
    allReviews += `
      <li>
        Origin: ${reviews[i].origin} <br>
        Nombre: ${reviews[i].name} <br>
        Municipio: ${reviews[i].municipio} <br>
        Review: ${reviews[i].review} <br>
      </li>`;
  }

  REVIEW_LIST.innerHTML = allReviews;
}

initialize();