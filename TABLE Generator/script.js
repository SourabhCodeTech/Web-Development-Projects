let table = document.getElementById('table');
let table_input = document.getElementById('table_input');
let generator = document.getElementById('generator');
let h1anch = document.getElementById('h1anch');

generator.addEventListener('click', () => {
  if (table_input.value == 0) {
  } else if (table_input.value != 0) {
    for (let i = 1; i < 11; i++) {
      table.append((table_input.value + '*' + i) + '=' + (i*table_input.value) + `,        `)
      if (!table_input.value == 0) {
        table_input.remove()
        generator.remove()
      }
    }
  }
});

