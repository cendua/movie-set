export function doubanPacking(data: any) {
  const results = [];
  for (const index in data.data) {
    const element = data.data[index];
    const result = {
      id: element.id,
      name: element.data[0].name,
      alias: element.alias,
      description: element.data[0].description,
      genre: element.data[0].genre,
      language: element.data[0].language,
      coutry: element.data[0].country,
      poster: element.data[0].poster,
      imdbVotes: element.imdbVotes,
      imdbRating: element.imdbRating,
      doubanRating: element.doubanRating,
      doubanVotes: element.doubanVotes,
    };
    results.push(result);
  }

  return results;
}

export function imdbPacking(data: any) {
  const results = [];
  for (const index in data.data.items) {
    const element = data.data.items[index];
    const result = {
      id: element.id,
      name: element.title,
      alias: element.fullTitle,
      description: "",
      genre: "",
      language: "",
      coutry: "",
      poster: element.image,
      imdbVotes: element.imDbRatingCount,
      imdbRating: element.imDbRating,
      doubanRating: "",
      doubanVotes: "",
    };
    results.push(result);
  }
  return results;
}
