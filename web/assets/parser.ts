export function parser(data: string) {
  const regex = /\(.+?[\)]{2,}|\{.+?\}/g;
  for (let i: number = 0; i < data.match(regex).length; i++) {
    const result: string = JSON.parse(data.match(regex)[i]).Import;
    return data.replaceAll(regex, `<strong>${result}</strong>`);
  }
}
