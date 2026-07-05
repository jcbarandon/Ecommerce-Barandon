// Format a number as Philippine Peso, e.g. 2499 -> "₱2,499".
export function formatPeso(amount) {
  return `₱${Number(amount).toLocaleString("en-PH")}`;
}
