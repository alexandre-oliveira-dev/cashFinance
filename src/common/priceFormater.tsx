interface PriceformaterType {
  price: string | number;
}

export function formater({price}: PriceformaterType) {
  const priceFormat = parseFloat(
    String(Number(price) ?? "0")?.replace(",", ".")
  )?.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  });
  return priceFormat;
}
