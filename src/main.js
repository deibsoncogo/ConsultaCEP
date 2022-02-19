const cep = document.querySelector("#cep");

function showData(result) {
  for (const key in result) {
    if(document.querySelector("#"+key)) {
      document.querySelector("#"+key).value = result[key];
    };
  };
};

cep.addEventListener("blur", () => {
  const cepRegex = cep.value.replace(/\D/g, "");

  if (cepRegex.length !== 8) {
    return console.log("Quantidade de dígitos do CEP inválido");
  }

  const optionsFetch = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${cepRegex}/json/`, optionsFetch)
  .then((value) => {
    return value.json().then((date) => {
      return showData(date);
    });
  })
  .catch((value) => {
    return console.log(`Erro inesperado: ${value.message}`);
  });
});
