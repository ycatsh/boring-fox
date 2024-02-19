const ascii_placeholders = [
  { id: "ascii-placeholder-1", path: "assets/ascii_art/car.txt" },
  { id: "ascii-placeholder-2", path: "assets/ascii_art/cat.txt" },
  { id: "ascii-placeholder-3", path: "assets/ascii_art/book.txt" },
  { id: "ascii-placeholder-4", path: "assets/ascii_art/graph.txt" }
]


async function load_ascii_from_txt(path) {
  const response = await fetch(path);
  const art = await response.text();
  return art;
}

async function load_all_ascii_arts() {
  for (let i = 0; i < ascii_placeholders.length; i++) {
      const ascii_art = ascii_placeholders[i];
      const art = await load_ascii_from_txt(ascii_placeholders[i].path);
      ascii_art.content = art;
      load_ascii_element(ascii_art);
  }
}

function load_ascii_element(ascii_art) {
  const placeholder = document.getElementById(ascii_art.id);
  if (placeholder) {
      placeholder.innerHTML = ascii_art.content;
  }
}


load_all_ascii_arts();