const content = document.getElementById("content");

function showLibrary() {
  content.innerHTML = `
    <h2>Home</h2>

    <section class="section">
      <h3>Library</h3>
      <div class="grid" id="libraryGrid"></div>
    </section>

    <section class="section">
      <h3>Discover</h3>
      <div class="grid" id="discoverGrid"></div>
    </section>
  `;

  renderLibraryGrid();
  renderDiscover();
}
