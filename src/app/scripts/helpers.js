//fonction pour : mettre en majuscule la première lettre d'une string
export function capitalizer(value) {
  return value[0].toUpperCase() + value.toString().substring(1);
}

//fonction pour : mettre tout en minuscule et enlevé les . etc...
export function normalizer(data) {
  const dataNormalize = data
    .normalize("NFD")
    .replace(/[\u0300-\u036f.,!;:?]/g, "")
    .toLowerCase();
  return dataNormalize;
}

//fonction pour : avoir une valeur unique
export function unique(value, index, item) {
  return item.indexOf(value) === index;
}
